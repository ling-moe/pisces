import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Consumer, RemoteService} from "@pisces/musubi/client";
import { forkJoin } from 'rxjs';
import { MenuDomainService, MenuNode } from '../../../domain/menu.entity';
import { RoleDomainService, RoleMenu } from '../../../domain/role.entity';

@Component({
  selector: 'pisces-role-authorization',
  templateUrl: './role-authorization.component.html',
  styleUrls: ['./role-authorization.component.scss']
})
export class RoleAuthorizationComponent implements OnInit{

  @Input()
  roleId!: bigint;
  @Output()
  submitted = new EventEmitter<boolean>();

  menuIds!: RoleMenu[];

  transformer = (node: MenuNode, level: number) => {
    return {
      ...node,
      expandable: !!node.children && node.children.length > 0,
      level: level,
    };
  }

  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);

  treeControl = new FlatTreeControl<MenuNode>(node => node.level, node => node.expandable);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  /**
   * The selection for checklist
   *
   * 检查的选择结果
   *
   */
  checklistSelection = new SelectionModel<MenuNode>(true /* multiple */);

  constructor(
    @Inject(RemoteService)  private menuRepository: Consumer<MenuDomainService>,
    @Inject(RemoteService)  private roleRepository: Consumer<RoleDomainService>,
    private cdr: ChangeDetectorRef,
    ) {
      this.treeControl.dataNodes = [];
  }

  ngOnInit(): void {
    forkJoin([this.menuRepository.treeMenu(true), this.roleRepository.listMenuByRoleId(this.roleId)])
    .subscribe(([menus, roleMenus]) => {
      this.dataSource.data = menus as MenuNode[];
      this.menuIds = roleMenus;
      this.checklistSelection.setSelection(...this.treeControl.dataNodes.filter(item => this.menuIds.map(i => i.menuId).includes(item.menuId)));
    });
  }

  save(){
    const newMenuIds = this.checklistSelection.selected.map(i => i.menuId);
    const removeList = this.menuIds.filter(menuId => !newMenuIds.includes(menuId.menuId));
    const addList = newMenuIds.filter(menuId => !this.menuIds.map(i => i.menuId).includes(menuId));

    this.roleRepository.saveRoleMenu(removeList.concat(addList.map(i => (<RoleMenu>{
      roleId: this.roleId,
      menuId: i
    })))).subscribe(() => this.submitted.emit(true));
  }

  getLevel = (node: MenuNode) => node.level;

  isExpandable = (node: MenuNode) => node.expandable;

  hasChild = (_: number, node: MenuNode) => node.expandable;


  /**
   * Whether all the descendants of the node are selected.
   *
   * 节点的所有后代是否都被选定了。
   *
   */
  descendantsAllSelected(node: MenuNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      descendants.every(child => {
        return this.checklistSelection.isSelected(child);
      });
    return descAllSelected;
  }

  /**
   * Whether part of the descendants are selected
   *
   * 是否选定了部分后代
   *
   */
  descendantsPartiallySelected(node: MenuNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /**
   * Toggle the to-do item selection. Select/deselect all the descendants node
   *
   * 切换待办事项选择结果。选定/取消选定所有后代节点
   *
   */
  todoItemSelectionToggle(node: MenuNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /**
   * Toggle a leaf to-do item selection. Check all the parents to see if they changed
   *
   * 切换叶待办事项的选择结果。检查所有的父母，看看它们是否改变了
   *
   */
  todoLeafItemSelectionToggle(node: MenuNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: MenuNode): void {
    let parent: MenuNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /**
   * Check root node checked state and change it accordingly
   *
   * 检查根节点的勾选状态并相应地更改它
   *
   */
  checkRootNodeSelection(node: MenuNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected =
      descendants.length > 0 &&
      // 只要有一个后代被选中，就认为父级被选中
      descendants.some(child => {
        return this.checklistSelection.isSelected(child);
      });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: MenuNode): MenuNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

}
