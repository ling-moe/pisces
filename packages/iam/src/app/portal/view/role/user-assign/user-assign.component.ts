import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { Consumer, RemoteService} from "@pisces/musubi/client";
import { RoleDomainService, RoleUser } from '../../../domain/role.entity';
import { User, UserDomainService } from '../../../domain/user.entity';

@Component({
  selector: 'pisces-user-assign',
  templateUrl: './user-assign.component.html',
  styleUrls: ['./user-assign.component.scss'],
})
export class UserAssignComponent implements OnInit{
  @Input()
  roleId!: bigint;
  @Output()
  submitted = new EventEmitter<boolean>();

  list: (User & RoleUser)[] = [];
  sourceList: (User & RoleUser)[] = [];
  doneList: (User & RoleUser)[] = [];
  rowSelected: (User & RoleUser)[] = [];
  constructor(
    @Inject(RemoteService)  private roleRepository: Consumer<RoleDomainService>,
    @Inject(RemoteService)  private userRepository: Consumer<UserDomainService>,
    ){
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
    this.roleRepository.saveRoleUser(addUsers.concat(removeUsers)).subscribe(() => this.submitted.emit(true));
  }

  log(e: (User & RoleUser)[]) {
    this.doneList = e;
    console.log(e);
  }
}
