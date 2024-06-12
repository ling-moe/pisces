
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  displayName: 'displayName',
  lang: 'lang',
  locale: 'locale',
  email: 'email',
  phone: 'phone',
  sex: 'sex',
  avatar: 'avatar',
  password: 'password',
  effectiveStartDate: 'effectiveStartDate',
  effectiveEndDate: 'effectiveEndDate',
  activedFlag: 'activedFlag',
  lockedTime: 'lockedTime',
  enabledFlag: 'enabledFlag',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  roleCode: 'roleCode',
  roleName: 'roleName',
  enabledFlag: 'enabledFlag',
  remark: 'remark',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.MenuScalarFieldEnum = {
  id: 'id',
  menuCode: 'menuCode',
  menuName: 'menuName',
  menuType: 'menuType',
  pid: 'pid',
  icon: 'icon',
  route: 'route',
  menuSort: 'menuSort',
  enabledFlag: 'enabledFlag',
  remark: 'remark',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.RoleMenuScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  menuId: 'menuId',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.RoleUserScalarFieldEnum = {
  id: 'id',
  roleId: 'roleId',
  userId: 'userId',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  desc: 'desc',
  data: 'data',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.DomainScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  name: 'name',
  desc: 'desc',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.ProductFeatureScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  domainId: 'domainId',
  title: 'title',
  desc: 'desc',
  event: 'event',
  command: 'command',
  role: 'role',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.EntityScalarFieldEnum = {
  id: 'id',
  domainId: 'domainId',
  name: 'name',
  desc: 'desc',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.EntityFieldScalarFieldEnum = {
  id: 'id',
  entityId: 'entityId',
  domainId: 'domainId',
  name: 'name',
  type: 'type',
  defaultValue: 'defaultValue',
  isRequired: 'isRequired',
  dict: 'dict',
  desc: 'desc',
  versionNum: 'versionNum',
  createBy: 'createBy',
  createAt: 'createAt',
  updateBy: 'updateBy',
  updateAt: 'updateAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  Menu: 'Menu',
  RoleMenu: 'RoleMenu',
  RoleUser: 'RoleUser',
  Product: 'Product',
  Domain: 'Domain',
  ProductFeature: 'ProductFeature',
  Entity: 'Entity',
  EntityField: 'EntityField'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
