import { AuditDomain, OCC, Page, PageRequest } from '@pisces/common';
import { RoleUser } from './role.entity';

export type User = {
  id: bigint
  username: string
  displayName: string
  lang: string
  locale: string
  email: string
  phone: string
  sex: string
  avatar: string | null
  password: string
  effectiveStartDate: Date
  effectiveEndDate: Date | null
  activedFlag: boolean
  lockedTime: Date | null
  enabledFlag: boolean
  roles?: bigint[]
} & AuditDomain & OCC;

export type UserQuery = Pick<User, 'username' | 'displayName' | 'enabledFlag'>;

export interface UserDomainService {
  /**
   * 获取用户列表
   */
  pageUser(pageRequest: PageRequest<User>, query?: UserQuery): Page<User>
  /**
   * 创建用户
   */
  createUser(user: User): void;
  /**
   * 更新用户信息
   */
  updateUser(user: User): void;

  /**
   * 查询未分配的用户
   * @param roleId 角色ID
   */
  listUnassignedUser(roleId: bigint): (User & RoleUser)[];

  querySelfUser(): User;
}
