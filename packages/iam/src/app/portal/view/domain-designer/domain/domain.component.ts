import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, viewChild } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { RemoteService, Consumer } from '@pisces/musubi/client';
import { Domain, DomainDomainService, DomainSave } from '../../../domain/domain.entity';
import { PageRequest } from '@pisces/common';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product, ProductDomainService } from '../../../domain/product.entity';

type DomainForm = FormGroup & Record<'value', DomainSave>

@Component({
  selector: 'pisces-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainComponent implements OnInit {
  createDomain() {
    this.domainForm.updateValueAndValidity();
    if (!this.domainForm.valid) {
      return;
    }
    if (this.domainForm.value.id) {
      this.domainRepository.updateDomain(this.domainForm.value)
        .subscribe(() => {
          this.toast.success("保存成功");
          this.drawer().toggle();
          this.query();
        });
    } else {
      this.domainRepository.createDomain(this.domainForm.value)
        .subscribe(() => {
          this.toast.success("保存成功");
          this.drawer().toggle();
          this.query();
        });
    }
  }
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
          click: (row) => this.openEdit(row),
        },
        {
          type: 'icon',
          text: '进入',
          icon: 'login',
          tooltip: '进入',
          click: (row: Domain) => this.router.navigateByUrl(`/iam/domain/domain/${row.id}`),
        },
        {
          type: 'icon',
          text: '删除',
          icon: 'delete',
          tooltip: '删除',
          color: 'warn',
          pop: '确认要删除这条数据？',
          click: (row: Domain) => this.remove(row),
        },
      ],
    },
  ];

  drawer = viewChild.required<MatDrawer>('drawer');

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
    @Inject(RemoteService)
    private productRepository: Consumer<ProductDomainService>,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  products: Product[] = [];

  ngOnInit(): void {
    this.query();
    this.productRepository.listProduct()
      .subscribe(res => this.products = res);
  }

  remove(row: Domain): void {
    this.domainRepository.deleteDomain(row.id)
      .subscribe(() => {
        this.toast.success("删除成功");
        this.query();
      });
  }

  trackByName(index: number, item: Domain) {
    return item.name;
  }

  query() {
    this.isLoading = true;
    this.domainRepository
      .pageDomain(PageRequest.of(this.queryParams.page, this.queryParams.size))
      .subscribe(res => {
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

  openCreate() {
    this.drawer().toggle();
    this.domainForm = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      productId: [null, Validators.required],
      desc: [null]
    }) as DomainForm;
  }

  openEdit(row: Domain) {
    this.drawer().toggle();
    this.domainForm = this.fb.group({
      id: [row.id],
      name: [row.name, Validators.required],
      productId: [row.productId, Validators.required],
      desc: [row.desc]
    }) as DomainForm;
  }
  domainForm!: DomainForm;
}
