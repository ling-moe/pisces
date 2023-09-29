import type { Menu as PrismaMenu } from '@prisma/client';
import type { GetResult } from '@prisma/client/runtime/library';
import { Perm } from '../infra/permission';

// export type Menu = PrismaMenu extends GetResult<infer T, infer K> ? T : unknown;
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
}
