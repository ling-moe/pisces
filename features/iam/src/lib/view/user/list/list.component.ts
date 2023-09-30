import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '@prisma/client';
import { MatDrawer } from '@angular/material/sidenav';
import { UserQuery, UserRemoteService } from '../../../domain/user.entity';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { EmptyObject, Page, PageRequest } from "@pisces/common";
import { PageEvent } from '@angular/material/paginator';
import { pickBy } from 'lodash';
import { searchFieldGroup, inputSearchField, selectSearchField } from '../../../infra/util/formily-builder';

@Component({
  selector: 'pisces-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UserListComponent implements OnInit {

  current?: User;

  pageInfo: Page<User> = {
    data: [],
    total: 0,
    lastPage: 0,
    page: 0,
    size: 20,
    prev: null,
    next: null
  };

  displayedColumns = [
    'username', 'displayName', 'email', 'phone', 'sex', 'effectiveStartDate',
    'effectiveEndDate', 'lockedTime', 'enabledFlag', 'operations',
  ];
  searchModel: UserQuery = EmptyObject();
  searchForm = new FormGroup({});
  searchFields: FormlyFieldConfig[] = searchFieldGroup([
    inputSearchField('username', '用户名'),
    inputSearchField('displayName', '姓名'),
    selectSearchField('enabledFlag', '是否启用', {
      options: [
        { value: true, label: '启用' },
        { value: false, label: '禁用' },
      ],
      defaultValue: true
    }),
  ]);

  constructor(
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>,
  ) { }

  ngOnInit() {
    this.query();
  }

  edit(user: User, drawer: MatDrawer) {
    this.current = user;
    drawer.toggle();
  }
  close(drawer: MatDrawer) {
    this.current = undefined;
    drawer.toggle();
    this.query();
  }

  query(pageEvent?: PageEvent) {
    const pageRequest = PageRequest.of<User>(pageEvent?.pageIndex || this.pageInfo.page, pageEvent?.pageSize || this.pageInfo.size);
    this.userRemoteService.user.page(pageRequest, pickBy(this.searchModel, Boolean) as UserQuery).subscribe(users => {
      this.pageInfo = { ...users };
    });
  }
}
