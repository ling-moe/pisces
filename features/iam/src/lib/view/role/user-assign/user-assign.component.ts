import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleDomainService, RoleRemoteService } from '../../../domain/role.entity';
import { User, UserDomainService, UserRemoteService } from '../../../domain/user.entity';
import { Remotable, RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { Role, Menu, RoleUser } from '@prisma/client';
import { forkJoin } from 'rxjs';
import { MtxGridColumn } from '@ng-matero/extensions/grid';

@Component({
  selector: 'pisces-user-assign',
  templateUrl: './user-assign.component.html',
  styleUrls: ['./user-assign.component.scss'],
})
export class UserAssignComponent implements OnInit{
  @Input()
  roleId!: bigint;
  roleRepository: Remotable<RoleDomainService>;
  userRepository: Remotable<UserDomainService>;
  list: (User & RoleUser)[] = [];
  sourceList: (User & RoleUser)[] = [];
  doneList: (User & RoleUser)[] = [];
  rowSelected: (User & RoleUser)[] = [];
  constructor(
    @Inject(RemoteService) musubiClient: Consumer<RoleRemoteService & UserRemoteService>,
    ){
      this.roleRepository = musubiClient.role;
      this.userRepository = musubiClient.user;
    }
  ngOnInit(): void {
    this.userRepository.listUnassignedUser(this.roleId).subscribe(res => {
      this.list = res;
      this.sourceList = res;
      this.rowSelected = res.filter(i => i.roleId);
    });
  }

  columns: MtxGridColumn[] = [
    { header: '用户名', field: 'username' },
    { header: '姓名', field: 'displayName' },
  ];

  save(){
    const removeUsers = this.sourceList.filter(user => !this.doneList.find(perm => perm.userId === user.userId));
    const addUsers = this.doneList.filter(user => !user.roleId).map(user => ({userId: user.userId, roleId: this.roleId} as RoleUser));
    this.roleRepository.saveRoleUser(addUsers.concat(removeUsers)).subscribe(console.log);
  }

  log(e: (User & RoleUser)[]) {
    this.doneList = e;
    console.log(e);
  }
}