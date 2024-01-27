import { PageRequest, Page, AuditDomain, OCC } from '@pisces/common';

export type Role = {
  id: bigint;
  roleCode: string;
  roleName: string;
  enabledFlag: boolean;
  remark: string | null;
  versionNum: bigint;
} & AuditDomain & OCC;

export type RoleMenu = {
  id: bigint;
  roleId: bigint;
  menuId: bigint;
} & AuditDomain;

export type RoleUser = {
  id: bigint;
  roleId: bigint;
  userId: bigint;
} & AuditDomain;

export type RoleQuery = Pick<Role, 'roleCode' | 'roleName' | 'enabledFlag'>;

export interface RoleDomainService {
  /**
   * 获取角色列表
   */
  pageRole(pageRequest: PageRequest<Role>, query?: RoleQuery): Page<Role>;
  /**
   * 创建角色
   */
  createRole(user: Role): void;
  /**
   * 更新角色
   */
  updateRole(user: Role): void;

  /**
   * 根据角色ID查询已授权的菜单
   * @param roleId 角色ID
   */
  listMenuByRoleId(roleId: bigint): RoleMenu[];

  /**
   * 保存新增和删除的权限集合
   * @param list 新增和删除的权限集合
   */
  saveRoleMenu(list: RoleMenu[]): void;

    /**
   * 根据角色ID查询已分配的用户
   * @param roleId 角色ID
   */
  listUserByRoleId(roleId: bigint): RoleUser[];

    /**
     * 保存新增和删除的用户
     * @param list 新增和删除的用户
     */
  saveRoleUser(list: RoleUser[]): void;
}
