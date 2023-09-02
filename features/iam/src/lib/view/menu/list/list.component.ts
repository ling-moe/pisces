import { Component, Inject, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { RemoteService, Consumer } from '@pisces/musubi/client/remote.service';
import { MenuNode, MenuRemoteService } from '../../../domain/menu.entity';

@Component({
  selector: 'pisces-menu-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class MenuListComponent implements OnInit {

  displayedColumns: string[] = ['menuCode','menuName', 'menuType', 'icon', 'route', 'menuOrder', 'enabledFlag', 'remark'];

  constructor(
    @Inject(RemoteService)
    private menuRemoteService: Consumer<MenuRemoteService, 'menu'>
  ){}

  ngOnInit(): void {
    this.menuRemoteService.menu.tree().subscribe(res => this.dataSource.data = res as MenuNode[]);
  }

  private transformer = (node: MenuNode, level: number) => {
    return {
      ...node,
      expandable: !!node.children && node.children.length > 0,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<MenuNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level,
      node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: MenuNode) => node.expandable;

}
