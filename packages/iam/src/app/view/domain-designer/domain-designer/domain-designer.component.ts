import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteService, Consumer } from '@pisces/musubi/client';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Entity, EntityDomainService, EntityField } from '../../../domain/entity.entity';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'pisces-domain-designer',
  templateUrl: './domain-designer.component.html',
  styleUrl: './domain-designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomainDesignerComponent implements OnInit {
  isLoading = true;
  domainId!: bigint;
  list: (Entity & { fields?: FormArray; })[] = [];
  columns: MtxGridColumn[] = [
    { header: '实体名称', field: 'name', showExpand: true },
    { header: '所属领域', field: 'domain.name' },
    { header: '描述', field: 'desc' },
    {
      header: '操作',
      field: 'operation',
      width: '180px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: '编辑',
          icon: 'edit',
          tooltip: '编辑',
          click: () => alert('edit'),
        },
        {
          type: 'icon',
          text: '新增字段',
          icon: 'add',
          tooltip: '新增字段',
          click: (row) => this.addField(row),
        },
        {
          type: 'icon',
          text: '删除',
          icon: 'delete',
          tooltip: '删除',
          color: 'warn',
          pop: '确认要删除这条数据？',
          click: () => alert('delete'),
        },
      ],
    },
  ];
  unsignFields?: FormArray;

  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private entityRepository: Consumer<EntityDomainService>,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.domainId = BigInt(this.route.snapshot.params['id']);
    this.query();
  }

  query() {
    this.isLoading = true;
    this.entityRepository
      .listEntity(this.domainId)
      .subscribe(res => {
        this.list = res;
        this.isLoading = false;
        this.cdr.markForCheck();
      });
    this.entityRepository
      .listFieldsByDomain(this.domainId)
      .subscribe(res => {
        const fieldControls = res?.map(field => this.createFieldForm(field)) ?? [];
        this.unsignFields = this.fb.array(fieldControls)
        this.cdr.markForCheck();
      });
  }
  addField(row: Entity & { fields?: FormArray; }) {
    row.fields?.push(this.createFieldForm({} as EntityField))
  }

  loadFields(e: { data: Entity & { fields?: FormArray; }; index: number,expanded: boolean }) {
    if(!e.expanded || e.data.fields){
      return;
    }
    this.entityRepository
      .listFieldsByEntity(e.data.id)
      .subscribe(res => {
        const fieldControls = res?.map(this.createFieldForm) ?? [];
        if(fieldControls.length === 0){
          fieldControls.push(this.createFieldForm({} as EntityField))
        }
        e.data.fields = this.fb.array(fieldControls);
        this.cdr.markForCheck();
      });
  }

  createFieldForm(field: EntityField) {
    const { name, type, defaultValue, isRequired, dict, desc, entityId } = field;
    return this.fb.group({
      name: [name, Validators.required],
      type: [type ?? 'STRING', Validators.required],
      defaultValue: [defaultValue],
      isRequired: [isRequired, Validators.required],
      dict: [dict],
      desc: [desc, Validators.required],
      entityId: [entityId]
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  get entityContainers(){
    return this.list.map(i => 'Entity' + i.id).concat('unEntity');
  }

}
