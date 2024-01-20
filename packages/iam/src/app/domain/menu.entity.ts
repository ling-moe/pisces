import { AuditDomain, OCC, TreeNode } from '@pisces/common';
import { Perm } from '../infra/permission';

// {value: 'DIR',label: '目录'},{value: 'ROUTE',label: '路由'},{value: 'FUNCTION',label: '功能'},{value: 'UI',label: '视图'}
export type Menu = {
  menuId: bigint
  menuCode: string
  menuName: string
  menuType: string
  pid: bigint
  icon: string | null
  route: string | null
  menuSort: number
  enabledFlag: boolean
  remark: string | null
} & AuditDomain & OCC

export type MenuNode = Menu & TreeNode<Menu>;

export interface MenuDomainService {
  /**
   * 获取树形菜单
   */
  treeMenu(isIncludeFunction: boolean): Menu[]
  /**
   * 创建菜单
   */
  createMenu(user: Menu): void;
  /**
   * 更新菜单
   */
  updateMenu(user: Menu): void;
  /**
   * 获取全部权限
   */
  listPerm(): Perm[];
  /**
   * 删除菜单
   */
  deleteMenu(menuId: bigint): void;

  /**
   * 获取菜单下已经分配的权限
   * @param menuId 菜单ID
   */
  listAssignedPermByMenuId(menuId: bigint): Menu[];

  /**
   * 保存菜单权限
   * @param menuId
   * @param addPerms
   * @param removeMenus
   */
  savePerms(menuId: bigint,addPerms: Perm[], removeMenus: Menu[]): void;

  /**
   * 查询当前用户菜单
   */
  querySelfMenu(): MenuNode[];
}
