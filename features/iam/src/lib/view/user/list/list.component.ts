import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from '@prisma/client';
import { MatDrawer } from '@angular/material/sidenav';
import { UserRemoteService } from '../../../domain/user.entity';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'pisces-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class UserListComponent implements OnInit {
  edit(user: User, drawer: MatDrawer) {
    this.current = user;
    drawer.toggle();
  }
  close() {
    this.current = undefined;
  }
  current?: User;
  data: User[] = [];

  displayedColumns = [
    'username',
    'displayName',
    'email',
    'phone',
    'sex',
    'effectiveStartDate',
    'effectiveEndDate',
    'lockedTime',
    'enabledFlag',
    'operations',
  ];

  constructor(
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>,
    private route: Router
    ) {}

  ngOnInit() {
    const r = this.route.config[2] as any;
    // 子路由，需要遍历
    console.log(r._loadedRoutes);

    this.userRemoteService.user.list().subscribe((users) => (this.data = users));
  }
}
