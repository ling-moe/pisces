import { Component, Inject, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { Menu, MenuNode, MenuRemoteService } from '../../../domain/menu.entity';
import { FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { drawerFieldGroup, inputDrawerField, selectDrawerField, toggleDrawerField, textareaDrawerField, numberDrawerField } from '../../../infra/util/formily-builder';
import { Role } from '@prisma/client';
import { tap } from 'rxjs';

@Component({
  selector: 'pisces-menu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MenuListComponent implements OnInit {

  options: FormlyFormOptions = {};
  model: Role | unknown = {};
  form = new FormGroup({});
  data: Role[] = [];
  action: 'create' | 'update' = 'create';

  displayedColumns: string[] = ['menuCode','menuName', 'menuType', 'icon', 'route', 'menuSort', 'enabledFlag', 'operations'];

  constructor(
    @Inject(RemoteService)
    private menuRemoteService: Consumer<MenuRemoteService, 'menu'>
  ){}

  ngOnInit(): void {
    this.query();
  }

  changeAction(action: 'create' | 'update', role: Role | unknown, drawer: MatDrawer) {
    this.action = action;
    this.options.updateInitialValue?.(role);
    this.options.resetModel?.();
    drawer.toggle();
  }

  create(drawer: MatDrawer) {
    this.menuRemoteService.menu.create(this.model as Menu)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }
  update(drawer: MatDrawer) {
    this.menuRemoteService.menu.update(this.model as Menu)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }

  query() {
    this.menuRemoteService.menu.tree().subscribe(tree => {
      this.dataSource.data = tree as MenuNode[];
    });
  }

  menuCreateFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField('pid', '上级菜单', false),
      inputDrawerField('menuCode', '菜单编码', true),
      inputDrawerField('menuName', '菜单名称', true),
      selectDrawerField('menuType', '菜单类型', true, [{value: 'DIR',label: '目录'},{value: 'ROUTE',label: '路由'},{value: 'FUNCTION',label: '功能'},{value: 'UI',label: '视图'}], 'MENU'),
      inputDrawerField('icon', '图标', false),
      inputDrawerField('route', '路由', false),
      numberDrawerField('menuSort', '顺序', true),
      toggleDrawerField('enabledFlag', '是否启用', true, undefined, true),
      textareaDrawerField('remark', '备注', false, undefined, undefined),
    ]);

  menuEditFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      {
        className: 'col-md-12',
        key: 'roleId',
        type: 'input',
        props: {
          label: '角色ID',
          required: true,
        },
        hide: true
      },
      inputDrawerField('pid', '上级菜单', false),
      inputDrawerField('menuCode', '菜单编码', true),
      inputDrawerField('menuName', '菜单名称', true),
      selectDrawerField('menuType', '菜单类型', true, [{value: 'DIR',label: '目录'},{value: 'ROUTE',label: '路由'},{value: 'FUNCTION',label: '功能'},{value: 'UI',label: '视图'}], 'MENU'),
      inputDrawerField('icon', '图标', false),
      inputDrawerField('route', '路由', false),
      numberDrawerField('menuSort', '顺序', true),
      toggleDrawerField('enabledFlag', '是否启用', true, undefined, true),
      textareaDrawerField('remark', '备注', false, undefined, undefined),
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
