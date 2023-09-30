import { Perm } from './../../../infra/permission';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Menu, MenuRemoteService } from '../../../domain/menu.entity';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'pisces-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public menu: Menu,
    @Inject(RemoteService)
    private menuRemoteService: Consumer<MenuRemoteService, 'menu'>,
    ){}
  ngOnInit(): void {
    forkJoin([this.menuRemoteService.menu.listPerm(), this.menuRemoteService.menu.listAssignedPermByMenuId(this.menu.menuId)])
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
    this.menuRemoteService.menu.savePerms(this.menu,addMenus, removeMenus).subscribe(console.log);
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
