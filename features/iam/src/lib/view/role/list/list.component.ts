import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Role, RoleRemoteService } from '../../../domain/role.entity';

@Component({
  selector: 'pisces-role-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class RoleListComponent implements OnInit {
  edit(role: Role, drawer: MatDrawer) {
    this.current = role;
    drawer.toggle();
  }
  close() {
    this.current = undefined;
  }
  current?: Role;
  data: Role[] = [];

  displayedColumns = [
    'roleCode',
    'roleName',
    'enabledFlag',
    'remark'
  ];

  constructor(
    @Inject(RemoteService)
    private userRemoteService: Consumer<RoleRemoteService, 'role'>
    ) {}

  ngOnInit() {
    this.userRemoteService.role.list().subscribe((roles) => (this.data = roles));
  }
}
