import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteService, Consumer } from '@pisces/musubi/client';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Entity, EntityDomainService, EntityField } from '../../../domain/entity.entity';

@Component({
  selector: 'pisces-domain-designer',
  templateUrl: './domain-designer.component.html',
  styleUrl: './domain-designer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DomainDesignerComponent implements OnInit {

  isLoading = true;
  domainId!: bigint;
  list: (Entity & { fields?: EntityField[]; })[] = [];
  columns: MtxGridColumn[] = [
    { header: '实体名称', field: 'name', showExpand: true },
    { header: '所属领域', field: 'domain.name' },
    { header: '描述', field: 'desc' },
  ];

  constructor(
    private route: ActivatedRoute,
    @Inject(RemoteService)
    private entityRepository: Consumer<EntityDomainService>,
    private cdr: ChangeDetectorRef,
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
  }

  loadFields(e: any) {
    console.log(e);
    this.entityRepository
      .listFieldsByEntity(e.data.id)
      .subscribe(res => {
        e.data.fields = res;
        this.cdr.markForCheck();
      });
  }
}
