import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { FormGroup } from "@angular/forms";
import { MatDrawer } from "@angular/material/sidenav";
import { PageEvent } from "@angular/material/paginator";
import { Product, ProductDomainService, ProductQuery } from "../../../domain/product.entity";
import { EmptyObject, Page, PageRequest } from "@pisces/common";
import {
  drawerFieldGroup,
  inputDrawerField,
  inputSearchField,
  searchFieldGroup,
  textareaDrawerField
} from "../../../infra/util/formily-builder";
import { Consumer, RemoteService } from "@pisces/musubi/client";
import { pickBy } from "lodash";
import { tap } from "rxjs";
import { Router } from "@angular/router";

type FormAction = "create" | "update" | "delete" | "toDesign";

type FormActionSubmit<T extends string | number | symbol> = {
  [key in T]: (...args: any) => any;
};

@Component({
  selector: "pisces-product",
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit,FormActionSubmit<FormAction> {

  options: FormlyFormOptions = {};
  model: Product | unknown = {};
  form = new FormGroup({});
  data: Product[] = [];
  action?: FormAction = "create";
  pageInfo: Page<Product> = {
    data: [],
    total: 0,
    lastPage: 0,
    page: 0,
    size: 20,
    prev: null,
    next: null
  };
  id?: bigint;

  displayedColumns = ["code", "name", "desc", "operations"];

  searchModel: ProductQuery = EmptyObject();
  searchForm = new FormGroup({});
  searchFields: FormlyFieldConfig[] = searchFieldGroup([
    inputSearchField("code", "产品编码"),
    inputSearchField("name", "产品名称")
  ]);

  constructor(
    @Inject(RemoteService) private productRepository: Consumer<ProductDomainService>,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.query();
  }

  changeAction(action: FormAction, drawer: MatDrawer, product?: Product) {
    this.action = action;
    this.options.updateInitialValue?.(product ?? {});
    this.options.resetModel?.();
    this.id = product?.id;
    drawer.toggle();
  }

  create(drawer: MatDrawer) {
    this.productRepository.createProduct(this.model as Product)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }

  update(drawer: MatDrawer) {
    this.productRepository.updateProduct(this.model as Product)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }

  query(pageEvent?: PageEvent) {
    this.action = undefined;
    const pageRequest = PageRequest.of<Product>(pageEvent?.pageIndex || this.pageInfo.page, pageEvent?.pageSize || this.pageInfo.size);
    this.productRepository.pageProduct(pageRequest, pickBy(this.searchModel, Boolean) as ProductQuery).subscribe(products => {
      this.pageInfo = { ...products };
      this.cdr.markForCheck();
    });
  }

  closeDrawer(drawer: MatDrawer) {
    drawer.toggle();
    this.query();
  }

  delete(id: bigint): void {
    this.productRepository.deleteProduct(id).subscribe(() => this.query());
  }

  toDesign(id: bigint): void {
    this.router.navigateByUrl(`/iam/domain/product/${id}`);
  }

  productCreateFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField("code", "产品编码", { required: true }),
      inputDrawerField("name", "产品名称", { required: true }),
      textareaDrawerField("desc", "产品描述", { required: false })
    ]);

  productEditFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField("id", "产品ID", { required: true, hide: true }),
      inputDrawerField("code", "产品编码", { required: true,disabled: true }),
      inputDrawerField("name", "产品名称", { required: true }),
      textareaDrawerField("desc", "产品描述", { required: false })
    ]);

}
