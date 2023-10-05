import { PageRequest, Page } from '@pisces/common';

export type Role = {
  roleId: bigint;
  roleCode: string;
  roleName: string;
  enabledFlag: boolean;
  remark: string | null;
  versionNum: bigint;
  createBy: bigint;
  createAt: Date;
  updateBy: bigint;
  updateAt: Date;
};

export type RoleMenu = {
  roleMenuId: bigint;
  roleId: bigint;
  menuId: bigint;
  createBy: bigint;
  createAt: Date;
  updateBy: bigint;
  updateAt: Date;
};

export type RoleUser = {
  roleUserId: bigint;
  roleId: bigint;
  userId: bigint;
  createBy: bigint;
  createAt: Date;
  updateBy: bigint;
  updateAt: Date;
};

export type RoleQuery = Pick<Role, 'roleCode' | 'roleName' | 'enabledFlag'>;

export interface RoleDomainService {
  /**
   * 获取角色列表
   */
  page(pageRequest: PageRequest<Role>, query?: RoleQuery): Page<Role>;
  /**
   * 创建角色
   */
  create(user: Role): void;
  /**
   * 更新角色
   */
  update(user: Role): void;

  listMenuByRoleId(roleId: bigint): RoleMenu[];

  saveRoleMenu(list: RoleMenu[]): void;
}

export type RoleRemoteService = Record<'role', RoleDomainService>;
