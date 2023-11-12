import { Perm } from './../../../infra/permission';
import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Menu, MenuDomainService, MenuRemoteService } from '../../../domain/menu.entity';
import { Remotable, Consumer, RemoteService } from '@pisces/musubi/client/remote.service';
import { forkJoin } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'pisces-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnChanges {

  @Input()
  menuId!: bigint;
  @Output()
  submitted = new EventEmitter<boolean>();

  menuRepository: Remotable<MenuDomainService>;

  displayedColumns: string[] = ['select','code', 'desc'];
  dataSource = new MatTableDataSource<Perm>();
  selection = new SelectionModel<Perm>(true, []);
  assignedMenus!: Menu[];

  constructor(
    @Inject(RemoteService) musubiClient: Consumer<MenuRemoteService>,
    ){
      this.menuRepository = musubiClient.menu;
    }
  ngOnChanges(): void {
    forkJoin([this.menuRepository.listPerm(), this.menuRepository.listAssignedPermByMenuId(this.menuId)])
    .subscribe(([allPerms, assignedMenus]) => {
      this.assignedMenus = assignedMenus;
      const assignedPerms:Perm[] = [];
      allPerms.filter(perm =>  assignedMenus.find(menu => menu.menuCode === perm.code) ? assignedPerms.push(perm) && true : false)
      this.dataSource.data = allPerms;
      this.selection.setSelection(...assignedPerms);
    })
  }

  save(){
    const removeMenus = this.assignedMenus.filter(menu => !this.selection.selected.find(perm => perm.code === menu.menuCode));
    const addMenus = this.selection.selected.filter(perm => !this.assignedMenus.find(menu => perm.code === menu.menuCode));
    this.menuRepository.savePerms(this.menuId,addMenus, removeMenus)
    .subscribe(() => this.submitted.emit(true));
  }

  /**
   * Whether the number of selected elements matches the total number of rows.
   *
   * 所选元素的数量是否与总行数匹配。
   *
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Selects all rows if they are not all selected; otherwise clear selection.
   *
   * 如果未全部选定，则选定所有行；否则清除选定。
   *
   */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /**
   * The label for the checkbox on the passed row
   *
   * 传入的行上的复选框的标签
   *
   */
  checkboxLabel(row?: Perm, index?: number): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${index??0 + 1}`;
  }
}
