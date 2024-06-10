import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { RemoteService, Consumer } from '@pisces/musubi/client';
import { Domain, DomainDomainService } from '../../../domain/domain.entity';
import { PageRequest } from '@pisces/common';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'pisces-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainComponent implements OnInit {
  columns: MtxGridColumn[] = [
    { header: '领域名称', field: 'name' },
    { header: '所属产品', field: 'product.name' },
    { header: '领域描述', field: 'desc' },
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
          text: '进入',
          icon: 'login',
          tooltip: '进入',
          click: (row) => this.router.navigateByUrl(`/iam/domain/domain/${row.id}`),
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

  list: Domain[] = [];
  total = 0;
  isLoading = true;

  queryParams = {
    q: 'user:nzbin',
    page: 0,
    size: 5,
  };

  get params() {
    const p = Object.assign({}, this.queryParams);
    p.page += 1;
    return p;
  }

  constructor(
    @Inject(RemoteService)
    private domainRepository: Consumer<DomainDomainService>,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
    this.query();
  }

  trackByName(index: number, item: Domain) {
    return item.name;
  }

  query() {
    this.isLoading = true;
    this.domainRepository
    .pageDomain(PageRequest.of(this.queryParams.page,this.queryParams.size))
    .subscribe(res =>{
      this.list = res.data;
      this.total = res.total;
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }

  getNextPage(e: PageEvent) {
    this.queryParams.page = e.pageIndex;
    this.queryParams.size = e.pageSize;
    this.query();
  }

  refresh() {
    this.query();
  }
}
