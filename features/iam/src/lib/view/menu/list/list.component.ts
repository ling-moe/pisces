import { Component, Inject, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { MenuRemoteService } from '../../../domain/menu.entity';

export interface MenuItem {
  menuId: string;
  menuCode: string;
  menuName: string;
  menuType: string;
  pid: string;
  level: number;
  expandable: boolean;
  menuGlobalCode: string;
  icon: string;
  route: string;
  menuOrder: number;
  enabledFlag: boolean;
  remark: string;
  children?: MenuItem[];
}

@Component({
  selector: 'pisces-menu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MenuListComponent implements OnInit {

  displayedColumns: string[] = ['menuCode','menuName', 'menuType', 'pid', 'menuGlobalCode', 'icon', 'route', 'menuOrder', 'enabledFlag', 'remark'];

  constructor(
    @Inject(RemoteService)
    private menuRemoteService: Consumer<MenuRemoteService, 'menu'>
  ){}

  ngOnInit(): void {
    this.menuRemoteService.menu.tree().subscribe(res => this.dataSource.data = (res as unknown as MenuItem[]));
  }

  private transformer = (node: MenuItem, level: number) => {
    return {
      ...node,
      expandable: !!node.children && node.children.length > 0,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<MenuItem>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level,
      node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: MenuItem) => node.expandable;

}
