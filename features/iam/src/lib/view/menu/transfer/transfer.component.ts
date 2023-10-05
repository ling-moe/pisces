import { Perm } from './../../../infra/permission';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Menu, MenuDomainService, MenuRemoteService } from '../../../domain/menu.entity';
import { Remotable, Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'pisces-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  menuRepository: Remotable<MenuDomainService>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public menu: Menu,
    @Inject(RemoteService) musubiClient: Consumer<MenuRemoteService>,
    ){
      this.menuRepository = musubiClient.menu;
    }
  ngOnInit(): void {
    forkJoin([this.menuRepository.listPerm(), this.menuRepository.listAssignedPermByMenuId(this.menu.menuId)])
    .subscribe(([allPerms, assignedMenus]) => {
      this.assignedMenus = assignedMenus;
      const assignedPerms:Perm[] = [];
      allPerms.filter(perm =>  assignedMenus.find(menu => menu.menuCode === perm.code) ? assignedPerms.push(perm) && true : false)
      this.todo = allPerms;
      this.done = assignedPerms;
    })
  }

  assignedMenus!: Menu[];

  todo:Perm[] = [];

  done:Perm[] = [];

  save(){
    const removeMenus = this.assignedMenus.filter(menu => !this.done.find(perm => perm.code === menu.menuCode));
    const addMenus = this.done.filter(perm => !this.assignedMenus.find(menu => perm.code === menu.menuCode));
    this.menuRepository.savePerms(this.menu,addMenus, removeMenus).subscribe(console.log);
  }

  drop(event: CdkDragDrop<Perm[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
