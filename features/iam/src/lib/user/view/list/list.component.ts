import { Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { Component, Inject, OnInit } from '@angular/core';
import { UserRemoteService } from '../../domain/repository/user.remote';
import { User } from '@prisma/client';

@Component({
  selector: 'pisces-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {
  data:User[] = [];

  displayedColumns = ['username', 'displayName', 'phone', 'sex', 'avatar'];

  constructor(
    @Inject(RemoteService) private userRemoteService: Consumer<UserRemoteService, 'user'>
  ) { }

  ngOnInit() {
    this.userRemoteService.user.list().subscribe(users => this.data = users)
  }

}
