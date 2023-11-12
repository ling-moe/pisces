import { TransferComponent } from './../transfer/transfer.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Remotable, Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Menu, MenuDomainService, MenuNode, MenuRemoteService } from '../../../domain/menu.entity';
import { FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { drawerFieldGroup, inputDrawerField, selectDrawerField, toggleDrawerField, textareaDrawerField, numberDrawerField, FormAction } from '../../../infra/util/formily-builder';
import { Role } from '@prisma/client';
import { tap } from 'rxjs';
import { EmptyObject } from '@pisces/common';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'pisces-menu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MenuListComponent implements OnInit {

  options: FormlyFormOptions = {};
  model: Menu = EmptyObject();
  form = new FormGroup({});
  data: Role[] = [];
  action?: FormAction | 'addPerm' = 'create';
  menuId!: bigint;

  displayedColumns: string[] = ['menuCode','menuName', 'menuType', 'icon', 'route', 'menuSort', 'enabledFlag', 'operations'];
  menuRepository: Remotable<MenuDomainService>;
  constructor(
    @Inject(RemoteService) musubiClient: Consumer<MenuRemoteService>,
    private router: Router,
    private dialog: MatDialog,
  ){
    this.menuRepository = musubiClient.menu;
  }

  ngOnInit(): void {
    this.query();
  }

  get allRoutes(){
    const routes = this.walkRouteTree(this.router.config).map(path => `/${path.filter(i => i).join('/')}`);
    // 移除/**
    routes.pop()
    return routes;
  }

  walkRouteTree(routes: Route[]): string[][]{
    const result: string[][] = [];
    for(const route of routes){
      if(route.path === undefined){
        continue;
      }
      if(route.children){
        result.push(...this.walkRouteTree(route.children).map((childPath: string[]) => [route.path!, ...childPath]));
      }else if(route.loadChildren){
        result.push(...this.walkRouteTree((route as any)._loadedRoutes).map(childPath => [route.path!, ...childPath]));
      }else{
        result.push([route.path])
      }
    }
    return result;
  }

  changeAction(drawer: MatDrawer, action: FormAction | 'addPerm', menu?: Menu | {pid: bigint, menuId?: bigint}) {
    this.action = action;
    this.options.updateInitialValue?.({...menu, expandable: undefined, level: undefined, children: undefined});
    this.options.resetModel?.();
    this.menuId = menu?.menuId ?? 0n;
    drawer.toggle();
  }

  delete(menuId: bigint) {
    this.menuRepository.delete(menuId).subscribe(() => this.query());
    ;
  }

  create(drawer: MatDrawer) {
    this.menuRepository.create(this.model)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }
  update(drawer: MatDrawer) {
    this.menuRepository.update(this.model)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }

  query() {
    this.action = undefined;
    this.menuRepository.tree(false).subscribe(tree => {
      this.dataSource.data = tree as MenuNode[];
    });
  }
  closeDrawer(drawer: MatDrawer){
    drawer.toggle();
    this.query();
  }

  menuCreateFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField('pid', '上级菜单', {required: false, disabled: true}),
      inputDrawerField('menuCode', '菜单编码', {required: true}),
      inputDrawerField('menuName', '菜单名称', {required: true}),
      selectDrawerField('menuType', '菜单类型', {required: true, options: [{value: 'DIR',label: '目录'},{value: 'ROUTE',label: '路由'}], defaultValue: 'MENU'}),
      inputDrawerField('icon', '图标', {required: false}),
      selectDrawerField('route', '路由', {expressions: {'props.required': 'model.menuType === "ROUTE"', 'hide': 'model.menuType !== "ROUTE"'}, options: this.allRoutes.map(route => ({value: route, label: route}))}),
      numberDrawerField('menuSort', '顺序', {required: true}),
      toggleDrawerField('enabledFlag', '是否启用', {required: true, defaultValue: true}),
      textareaDrawerField('remark', '备注', {required: false}),
    ]);

  menuEditFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField('menuId', '菜单ID', {required: true, hide: true}),
      inputDrawerField('pid', '上级菜单', {required: false, disabled: true}),
      inputDrawerField('menuCode', '菜单编码', {required: true}),
      inputDrawerField('menuName', '菜单名称', {required: true}),
      selectDrawerField('menuType', '菜单类型', {required: true, options: [{value: 'DIR',label: '目录'},{value: 'ROUTE',label: '路由'},{value: 'FUNCTION',label: '功能'},{value: 'UI',label: '视图'}], defaultValue: 'MENU'}),
      inputDrawerField('icon', '图标', {required: false}),
      selectDrawerField('route', '路由', {expressions: {'props.required': 'model.menuType === "ROUTE"', 'hide': 'model.menuType !== "ROUTE"'}, options: this.allRoutes.map(route => ({value: route, label: route}))}),
      numberDrawerField('menuSort', '顺序', {required: true}),
      toggleDrawerField('enabledFlag', '是否启用', {required: true, defaultValue: true}),
      textareaDrawerField('remark', '备注', {required: false}),
    ]);

  private transformer = (node: MenuNode, level: number) => {
    return {
      ...node,
      expandable: !!node.children && node.children.length > 0,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<MenuNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level,
      node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: MenuNode) => node.expandable;

}
