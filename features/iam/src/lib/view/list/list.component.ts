import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { UserRemoteService } from '../../domain/user.remote';
import { User } from '@prisma/client';

@Component({
  selector: 'pisces-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {
  data:User[] = [];

  displayedColumns = ['username', 'displayName','email', 'phone', 'sex', 'effectiveStartDate', 'effectiveEndDate', 'lockedTime', 'enabledFlag'];

  constructor(
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>,
  ) { }

  ngOnInit() {
    this.userRemoteService.user.list().subscribe(users => this.data = users)

  }

}
