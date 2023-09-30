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
  versionNum: bigint
  createBy: bigint
  createAt: Date
  updateBy: bigint
  updateAt: Date
}
export type MenuNode = Menu & {children?: MenuNode[], level: number, expandable: boolean};

export interface MenuRemoteService {
  /**
   * 获取树形菜单
   */
  tree(): Menu[]
  /**
   * 创建菜单
   */
  create(user: Menu): void;
  /**
   * 更新菜单
   */
  update(user: Menu): void;
  /**
   * 获取全部权限
   */
  listPerm(): Perm[];

  /**
   * 获取菜单下已经分配的权限
   * @param menuId 菜单ID
   */
  listAssignedPermByMenuId(menuId: bigint): Menu[];

  savePerms(currentMenu: Menu,addPerms: Perm[], removeMenus: Menu[]): void;

  delete(menuId: bigint): void;
}
