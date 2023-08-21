import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Role, RoleRemoteService } from '../../../domain/role.entity';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'pisces-role-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RoleListComponent implements OnInit {

  options: FormlyFormOptions = {};
  model: Role | unknown = {};
  form =  new FormGroup({});
  data: Role[] = [];
  action: 'create' | 'update' = 'create';

  displayedColumns = ['roleCode', 'roleName', 'enabledFlag', 'remark', 'operations'];

  constructor(
    @Inject(RemoteService)
    private userRemoteService: Consumer<RoleRemoteService, 'role'>
  ) {}

  ngOnInit() {
    this.userRemoteService.role.list().subscribe((roles) => (this.data = roles));
  }

  changeAction(action: 'create' | 'update', role: Role | unknown, drawer: MatDrawer) {
    this.action = action;
    this.options.updateInitialValue?.(role);
    this.options.resetModel?.();
    drawer.toggle();
  }

  create(drawer: MatDrawer){
    this.userRemoteService.role.create(this.model as Role)
    .pipe(tap(() => drawer.toggle()), switchMap(() => this.userRemoteService.role.list()))
    .subscribe(roles => this.data = roles);
  }
  update(drawer: MatDrawer){
    this.userRemoteService.role.update(this.model as Role)
    .pipe(tap(() => drawer.toggle()), switchMap(() => this.userRemoteService.role.list()))
    .subscribe(roles => this.data = roles);
  }

  roleCreateFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'roleCode',
          type: 'input',
          props: {
            label: '角色编码',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'roleName',
          type: 'input',
          props: {
            label: '角色名称',
            required: true,
          },
        },

        {
          className: 'col-md-6',
          key: 'enabledFlag',
          type: 'toggle',
          props: {
            label: '是否启用',
          },
          defaultValue: true,
        },
        {
          className: 'col-md-6',
          key: 'remark',
          type: 'textarea',
          props: {
            label: '备注',
          },
        },
      ],
    },
  ];

  roleEditFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-md-6',
          key: 'roleId',
          type: 'input',
          props: {
            label: '角色ID',
            required: true,
          },
          hide: true
        },
        {
          className: 'col-md-6',
          key: 'roleCode',
          type: 'input',
          props: {
            label: '角色编码',
            required: true,
          },
        },
        {
          className: 'col-md-6',
          key: 'roleName',
          type: 'input',
          props: {
            label: '角色名称',
            required: true,
          },
        },

        {
          className: 'col-md-6',
          key: 'enabledFlag',
          type: 'toggle',
          props: {
            label: '是否启用',
          },
          defaultValue: true,
        },
        {
          className: 'col-md-6',
          key: 'remark',
          type: 'textarea',
          props: {
            label: '备注',
          },
        },
      ],
    },
  ];
}
