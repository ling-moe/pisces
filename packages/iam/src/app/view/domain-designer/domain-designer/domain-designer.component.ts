import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Consumer, RemoteService } from '@pisces/musubi/client';
import { ToastrService } from 'ngx-toastr';
import { Entity, EntityDomainService, EntityField } from '../../../domain/entity.entity';

@Component({
  selector: 'pisces-domain-designer',
  templateUrl: './domain-designer.component.html',
  styleUrl: './domain-designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomainDesignerComponent implements OnInit {
  remove(row: any): void {
    this.entityRepository.deleteEntity(row.id)
      .subscribe(() => {
        this.toast.success("删除成功");
        this.query();
      });
  }
  createEntity() {
    this.entityForm.updateValueAndValidity();
    if (!this.entityForm.valid) {
      return;
    }
    if (this.entityForm.value.id) {
      this.entityRepository.updateEntity(this.entityForm.value)
        .subscribe(() => {
          this.toast.success("保存成功");
          this.drawer().toggle();
          this.query();
        });
    } else {
      this.entityRepository.createEntity(this.entityForm.value)
        .subscribe(() => {
          this.toast.success("保存成功");
          this.drawer().toggle();
          this.query();
        });
    }

  }
  openCreate() {
    this.drawer().toggle();
    this.entityForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      domainId: [this.domainId],
      desc: [null]
    });
  }

  openEdit(row: any) {
    this.drawer().toggle();
    this.entityForm = this.fb.group({
      id: [row.id],
      name: [row.name, Validators.required],
      domainId: [this.domainId],
      desc: [row.desc]
    });
  }
  entityForm!: FormGroup<any>;
  drawer = viewChild.required<MatDrawer>('drawer');

  saveEntityFields(entityId: bigint, formArray: FormArray) {
    formArray.markAllAsTouched();
    if (!formArray.valid) {
      return;
    }
    const data = formArray.value.map((i: any) => ({ ...i, entityId: entityId, domainId: this.domainId }));
    console.log(data);

    this.entityRepository.saveDomainFields(data).subscribe(() => {
      this.toast.success("保存成功");
    });
  }
  removeField(formArray: FormArray, index: number, fieldForm: FormGroup) {
    fieldForm.patchValue({ isRemove: true });
  }
  editableFields(formArray?: FormArray): FormGroup<any>[] {
    return formArray?.controls.filter(i => !i.value.isRemove) as FormGroup<any>[];
  }

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
          click: (row) => this.openEdit(row),
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
          click: (row) => this.remove(row),
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
    private fb: FormBuilder,
    private toast: ToastrService,
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
        this.list = res.map(i => ({ ...i, _loading: false }));
        this.isLoading = false;
        this.cdr.markForCheck();
      });
    this.entityRepository
      .listFieldsByDomain(this.domainId)
      .subscribe(res => {
        const fieldControls = res?.map(field => this.createFieldForm(field)) ?? [];
        this.unsignFields = this.fb.array(fieldControls);
        this.cdr.markForCheck();
      });
  }
  addField(row: Entity & { fields?: FormArray; }) {
    row.fields?.push(this.createFieldForm({} as EntityField));
  }

  loadFields(e: { data: Entity & { fields?: FormArray; }; index: number, expanded: boolean; }) {
    if (!e.expanded || e.data.fields) {
      return;
    }
    this.entityRepository
      .listFieldsByEntity(e.data.id)
      .subscribe(res => {
        const fieldControls = res?.map(i => this.createFieldForm(i)) ?? [];
        if (fieldControls.length === 0) {
          fieldControls.push(this.createFieldForm({} as EntityField));
        }
        e.data.fields = this.fb.array(fieldControls);
        this.cdr.markForCheck();
      });
  }

  createFieldForm(field: EntityField) {
    const { name, type, defaultValue, isRequired, dict, desc, entityId, id } = field;
    return this.fb.group({
      name: [name ?? '', Validators.required],
      type: [type ?? 'STRING', Validators.required],
      defaultValue: [defaultValue],
      isRequired: [isRequired ?? false, Validators.required],
      dict: [dict],
      desc: [desc, Validators.required],
      entityId: [entityId],
      id: [id],
      isRemove: [false]
    });
  }

  drop(event: CdkDragDrop<any[]>) {
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
    this.cdr.markForCheck();
  }

  get entityContainers() {
    return this.list.map(i => 'Entity' + i.id).concat('unEntity');
  }

}
