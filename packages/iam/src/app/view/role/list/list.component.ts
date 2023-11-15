import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { EmptyObject, Page, PageRequest } from '@pisces/common';
import { Consumer, Remotable, RemoteService } from '@pisces/musubi/client/remote.service';
import { pickBy } from 'lodash';
import { tap } from 'rxjs';
import { Role, RoleDomainService, RoleQuery, RoleRemoteService } from '../../../domain/role.entity';
import { drawerFieldGroup, inputDrawerField, inputSearchField, searchFieldGroup, selectSearchField, textareaDrawerField, toggleDrawerField } from '../../../infra/util/formily-builder';
import { MatDialog } from '@angular/material/dialog';
import { UserAssignComponent } from '../user-assign/user-assign.component';

@Component({
  selector: 'pisces-role-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RoleListComponent implements OnInit {

  options: FormlyFormOptions = {};
  model: Role | unknown = {};
  form = new FormGroup({});
  data: Role[] = [];
  action?: 'create' | 'update' | 'authorization' | 'assign' = 'create';
  pageInfo: Page<Role> = {
    data: [],
    total: 0,
    lastPage: 0,
    page: 0,
    size: 20,
    prev: null,
    next: null
  };
  roleId?: bigint;
  roleRepository: Remotable<RoleDomainService>;

  displayedColumns = ['roleCode', 'roleName', 'enabledFlag', 'remark', 'operations'];

  searchModel: RoleQuery = EmptyObject();
  searchForm = new FormGroup({});
  searchFields: FormlyFieldConfig[] = searchFieldGroup([
    inputSearchField('roleCode', '角色编码'),
    inputSearchField('roleName', '角色名称'),
    selectSearchField('enabledFlag', '是否启用', {
      options: [
        { value: true, label: '启用' },
        { value: false, label: '禁用' },
      ],
      defaultValue: true
    }),
  ]);

  constructor(
    @Inject(RemoteService) musubiClient: Consumer<RoleRemoteService>,
    private dialog: MatDialog,
  ) {
    this.roleRepository = musubiClient.role;
  }

  ngOnInit() {
    this.query();
  }

  changeAction(action: 'create' | 'update' | 'authorization' | 'assign', drawer: MatDrawer, role?: Role) {
    this.action = action;
    this.options.updateInitialValue?.(role);
    this.options.resetModel?.();
    this.roleId = role?.roleId;
    drawer.toggle();
  }

  create(drawer: MatDrawer) {
    this.roleRepository.create(this.model as Role)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }
  update(drawer: MatDrawer) {
    this.roleRepository.update(this.model as Role)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }

  authorization(drawer: MatDrawer) {
    this.roleRepository.update(this.model as Role)
      .pipe(tap(() => drawer.toggle()))
      .subscribe(() => this.query());
  }
  assignUser(role: Role){
    this.dialog.open(UserAssignComponent, {
      data: role,
    });
  }

  query(pageEvent?: PageEvent) {
    this.action = undefined;
    const pageRequest = PageRequest.of<Role>(pageEvent?.pageIndex || this.pageInfo.page, pageEvent?.pageSize || this.pageInfo.size);
    this.roleRepository.page(pageRequest, pickBy(this.searchModel, Boolean) as RoleQuery).subscribe(users => {
      this.pageInfo = { ...users };
    });
  }
  closeDrawer(drawer: MatDrawer){
    drawer.toggle();
    this.query();
  }

  roleCreateFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField('roleCode', '角色编码', {required: true}),
      inputDrawerField('roleName', '角色名称', {required: true}),
      toggleDrawerField('enabledFlag', '是否启用', {required: true, defaultValue: true}),
      textareaDrawerField('remark', '备注', {required: false}),
    ]);

  roleEditFields: FormlyFieldConfig[] =
    drawerFieldGroup([
      inputDrawerField('roleId', '角色ID', {required: true, hide: true}),
      inputDrawerField('roleCode', '角色编码', {required: true}),
      inputDrawerField('roleName', '角色名称', {required: true}),
      toggleDrawerField('enabledFlag', '是否启用', {required: true, defaultValue: true}),
      textareaDrawerField('remark', '备注', {required: false}),
    ]);
}
