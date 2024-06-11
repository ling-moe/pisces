
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\57186\\Documents\\Repos\\pisces\\packages\\iam\\src\\app\\infra\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../../../../.env",
    "schemaEnvPath": "../../../../../../../.env"
  },
  "relativePath": "../../../../resource",
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\r\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\r\n\r\ngenerator client {\r\n  provider = \"prisma-client-js\"\r\n  output   = \"../app/infra/prisma/client\"\r\n}\r\n\r\ndatasource db {\r\n  provider     = \"postgresql\"\r\n  url          = env(\"DATABASE_URL\")\r\n  relationMode = \"prisma\"\r\n}\r\n\r\n// 用户信息表\r\nmodel User {\r\n  // 用户ID\r\n  id                 BigInt     @id @default(autoincrement()) @map(\"id\")\r\n  // 用户名\r\n  username           String     @unique @db.VarChar(30)\r\n  // 用户昵称\r\n  displayName        String     @map(\"display_name\") @db.VarChar(30)\r\n  // 语言,默认是中文\r\n  lang               String     @db.VarChar(30)\r\n  // 地区,默认是中国\r\n  locale             String     @db.VarChar(30)\r\n  // 邮箱\r\n  email              String     @unique @db.VarChar(50)\r\n  // 手机号码\r\n  phone              String     @unique @db.VarChar(11)\r\n  // 用户性别（0男 1女 2未知）\r\n  sex                String     @db.VarChar(5)\r\n  // 用户头像\r\n  avatar             String?    @db.VarChar(100)\r\n  // 密码\r\n  password           String     @db.VarChar(100)\r\n  // 生效开始日期\r\n  effectiveStartDate DateTime   @default(now()) @map(\"effective_start_date\")\r\n  // 生效截至日期\r\n  effectiveEndDate   DateTime?  @map(\"effective_end_date\")\r\n  // 已激活标识\r\n  activedFlag        Boolean    @default(true) @map(\"actived_flag\")\r\n  // 锁定截止时间\r\n  lockedTime         DateTime?  @map(\"locked_time\")\r\n  //  已启用标识·\r\n  enabledFlag        Boolean    @default(true) @map(\"enabled_flag\")\r\n  // 版本号\r\n  versionNum         BigInt     @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy           BigInt     @map(\"create_by\")\r\n  // 创建时间\r\n  createAt           DateTime   @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy           BigInt     @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt           DateTime   @updatedAt @map(\"update_at\")\r\n  roleUsers          RoleUser[]\r\n\r\n  @@map(\"iam_user\")\r\n}\r\n\r\nmodel Role {\r\n  id          BigInt     @id @default(autoincrement()) @map(\"id\")\r\n  roleCode    String     @map(\"role_code\") @db.VarChar(60)\r\n  roleName    String     @map(\"role_name\") @db.VarChar(60)\r\n  enabledFlag Boolean    @default(true) @map(\"enabled_flag\")\r\n  // 备注\r\n  remark      String?    @db.VarChar(120)\r\n  // 版本号\r\n  versionNum  BigInt     @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy    BigInt     @map(\"create_by\")\r\n  // 创建时间\r\n  createAt    DateTime   @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy    BigInt     @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt    DateTime   @updatedAt @map(\"update_at\")\r\n  roleMenus   RoleMenu[]\r\n  roleUsers   RoleUser[]\r\n\r\n  @@map(\"iam_role\")\r\n}\r\n\r\nmodel Menu {\r\n  id          BigInt     @id @default(autoincrement()) @map(\"id\")\r\n  menuCode    String     @map(\"menu_code\") @db.VarChar(120)\r\n  menuName    String     @map(\"menu_name\") @db.VarChar(60)\r\n  menuType    String     @map(\"menu_type\") @db.VarChar(10)\r\n  pid         BigInt     @default(0)\r\n  icon        String?    @db.VarChar(30)\r\n  route       String?    @db.VarChar(120)\r\n  menuSort    Int        @default(0)\r\n  enabledFlag Boolean    @default(true) @map(\"enabled_flag\")\r\n  // 备注\r\n  remark      String?    @db.VarChar(120)\r\n  // 版本号\r\n  versionNum  BigInt     @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy    BigInt     @map(\"create_by\")\r\n  // 创建时间\r\n  createAt    DateTime   @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy    BigInt     @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt    DateTime   @updatedAt @map(\"update_at\")\r\n  RoleMenu    RoleMenu[]\r\n\r\n  @@map(\"iam_menu\")\r\n}\r\n\r\nmodel RoleMenu {\r\n  id       BigInt   @id @default(autoincrement()) @map(\"id\")\r\n  roleId   BigInt   @map(\"role_id\")\r\n  role     Role     @relation(fields: [roleId], references: [id])\r\n  menuId   BigInt   @map(\"menu_id\")\r\n  menu     Menu     @relation(fields: [menuId], references: [id])\r\n  // 创建者\r\n  createBy BigInt   @map(\"create_by\")\r\n  // 创建时间\r\n  createAt DateTime @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy BigInt   @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt DateTime @updatedAt @map(\"update_at\")\r\n\r\n  @@unique([roleId, menuId])\r\n  @@index([menuId])\r\n  @@map(\"iam_role_menu\")\r\n}\r\n\r\nmodel RoleUser {\r\n  id       BigInt   @id @default(autoincrement()) @map(\"id\")\r\n  roleId   BigInt   @map(\"role_id\")\r\n  role     Role     @relation(fields: [roleId], references: [id])\r\n  userId   BigInt   @map(\"user_id\")\r\n  user     User     @relation(fields: [userId], references: [id])\r\n  // 创建者\r\n  createBy BigInt   @map(\"create_by\")\r\n  // 创建时间\r\n  createAt DateTime @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy BigInt   @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt DateTime @updatedAt @map(\"update_at\")\r\n\r\n  @@unique([roleId, userId])\r\n  @@index([userId])\r\n  @@map(\"iam_role_user\")\r\n}\r\n\r\n// 产品表\r\nmodel Product {\r\n  // 产品ID\r\n  id              BigInt           @id @default(autoincrement())\r\n  // 产品代码\r\n  code            String           @db.VarChar(60)\r\n  // 产品名称\r\n  name            String           @db.VarChar(120)\r\n  // 产品描述\r\n  desc            String?          @db.Text\r\n  // 产品文档二进制数据\r\n  data            Bytes?           @db.ByteA\r\n  // 版本号\r\n  versionNum      BigInt           @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy        BigInt           @map(\"create_by\")\r\n  // 创建时间\r\n  createAt        DateTime         @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy        BigInt           @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt        DateTime         @updatedAt @map(\"update_at\")\r\n  // 包含的域\r\n  domains         Domain[]\r\n  // 包含的特性\r\n  productFeatures ProductFeature[]\r\n\r\n  @@map(\"ddd_product\")\r\n}\r\n\r\n// 产品域表\r\nmodel Domain {\r\n  // 域ID\r\n  id              BigInt           @id @default(autoincrement()) @map(\"id\")\r\n  // 所属的产品ID\r\n  productId       BigInt?          @map(\"product_id\")\r\n  // 关联的产品\r\n  product         Product?         @relation(fields: [productId], references: [id])\r\n  // 领域名称\r\n  name            String\r\n  // 描述\r\n  desc            String?          @map(\"desc\") @db.Text\r\n  // 版本号\r\n  versionNum      BigInt           @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy        BigInt           @map(\"create_by\")\r\n  // 创建时间\r\n  createAt        DateTime         @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy        BigInt           @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt        DateTime         @updatedAt @map(\"update_at\")\r\n  // 域下的产品特性\r\n  productFeatures ProductFeature[]\r\n  Entity          Entity[]\r\n  EntityField     EntityField[]\r\n\r\n  @@index([productId])\r\n  @@map(\"ddd_domain\")\r\n}\r\n\r\n// 产品特性表\r\nmodel ProductFeature {\r\n  // 特性ID\r\n  id         BigInt   @id @default(autoincrement()) @map(\"id\")\r\n  // 所属的产品ID\r\n  productId  BigInt   @map(\"product_id\")\r\n  // 所属的域ID\r\n  domainId   BigInt?  @map(\"domain_id\")\r\n  // 关联的产品\r\n  Product    Product  @relation(fields: [productId], references: [id])\r\n  // 可能的关联域\r\n  domain     Domain?  @relation(fields: [domainId], references: [id])\r\n  // 标题\r\n  title      String   @map(\"title\") @db.VarChar(240)\r\n  // 描述\r\n  desc       String?  @db.Text\r\n  // 事件\r\n  event      String   @db.Text\r\n  // 命令\r\n  command    String   @db.Text\r\n  // 角色\r\n  role       String   @db.Text\r\n  // 版本号\r\n  versionNum BigInt   @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy   BigInt   @map(\"create_by\")\r\n  // 创建时间\r\n  createAt   DateTime @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy   BigInt   @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt   DateTime @updatedAt @map(\"update_at\")\r\n\r\n  @@index([productId])\r\n  @@index([domainId])\r\n  @@map(\"ddd_product_feature\")\r\n}\r\n\r\n// 领域实体表\r\nmodel Entity {\r\n  // 域ID\r\n  id          BigInt        @id @default(autoincrement()) @map(\"id\")\r\n  // 所属的领域ID\r\n  domainId    BigInt        @map(\"domain_id\")\r\n  // 关联的领域\r\n  domain      Domain        @relation(fields: [domainId], references: [id])\r\n  // 实体名称\r\n  name        String\r\n  // 描述\r\n  desc        String\r\n  // 版本号\r\n  versionNum  BigInt        @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy    BigInt        @map(\"create_by\")\r\n  // 创建时间\r\n  createAt    DateTime      @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy    BigInt        @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt    DateTime      @updatedAt @map(\"update_at\")\r\n  EntityField EntityField[]\r\n\r\n  @@index([domainId])\r\n  @@map(\"ddd_entity\")\r\n}\r\n\r\n// 领域实体字段表\r\nmodel EntityField {\r\n  // 域ID\r\n  id           BigInt   @id @default(autoincrement()) @map(\"id\")\r\n  // 所属的产品ID\r\n  entityId     BigInt?  @map(\"entity_id\")\r\n  // 关联的实体\r\n  entity       Entity?  @relation(fields: [entityId], references: [id])\r\n  // 所属的领域ID\r\n  domainId     BigInt?  @map(\"domain_id\")\r\n  // 关联的领域\r\n  domain       Domain?  @relation(fields: [domainId], references: [id])\r\n  // 字段名称\r\n  name         String\r\n  // 字段类型\r\n  type         String\r\n  // 默认值\r\n  defaultValue String?\r\n  // 是否必填\r\n  isRequired   Boolean\r\n  // 字典\r\n  dict         String?\r\n  // 字段描述\r\n  desc         String\r\n  // 版本号\r\n  versionNum   BigInt   @default(1) @map(\"version_num\")\r\n  // 创建者\r\n  createBy     BigInt   @map(\"create_by\")\r\n  // 创建时间\r\n  createAt     DateTime @default(now()) @map(\"create_at\")\r\n  // 更新者\r\n  updateBy     BigInt   @map(\"update_by\")\r\n  // 更新时间\r\n  updateAt     DateTime @updatedAt @map(\"update_at\")\r\n\r\n  @@index([entityId])\r\n  @@map(\"ddd_entity_field\")\r\n}\r\n",
  "inlineSchemaHash": "b89efc31370daaf9200873dc1fc59532249b1773094a2691698ec07174b8d54a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"iam_user\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"displayName\",\"dbName\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"locale\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectiveStartDate\",\"dbName\":\"effective_start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectiveEndDate\",\"dbName\":\"effective_end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activedFlag\",\"dbName\":\"actived_flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lockedTime\",\"dbName\":\"locked_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabledFlag\",\"dbName\":\"enabled_flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"roleUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUser\",\"relationName\":\"RoleUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Role\":{\"dbName\":\"iam_role\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleCode\",\"dbName\":\"role_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleName\",\"dbName\":\"role_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabledFlag\",\"dbName\":\"enabled_flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"roleMenus\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleMenu\",\"relationName\":\"RoleToRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleUser\",\"relationName\":\"RoleToRoleUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Menu\":{\"dbName\":\"iam_menu\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuCode\",\"dbName\":\"menu_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuName\",\"dbName\":\"menu_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuType\",\"dbName\":\"menu_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"route\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuSort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabledFlag\",\"dbName\":\"enabled_flag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"RoleMenu\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleMenu\",\"relationName\":\"MenuToRoleMenu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleMenu\":{\"dbName\":\"iam_role_menu\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"relationName\":\"RoleToRoleMenu\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menuId\",\"dbName\":\"menu_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Menu\",\"relationName\":\"MenuToRoleMenu\",\"relationFromFields\":[\"menuId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"roleId\",\"menuId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"roleId\",\"menuId\"]}],\"isGenerated\":false},\"RoleUser\":{\"dbName\":\"iam_role_user\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleId\",\"dbName\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"relationName\":\"RoleToRoleUser\",\"relationFromFields\":[\"roleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"RoleUserToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[[\"roleId\",\"userId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"roleId\",\"userId\"]}],\"isGenerated\":false},\"Product\":{\"dbName\":\"ddd_product\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"domains\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToProduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productFeatures\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductFeature\",\"relationName\":\"ProductToProductFeature\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Domain\":{\"dbName\":\"ddd_domain\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"DomainToProduct\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"dbName\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"productFeatures\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductFeature\",\"relationName\":\"DomainToProductFeature\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Entity\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entity\",\"relationName\":\"DomainToEntity\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EntityField\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityField\",\"relationName\":\"DomainToEntityField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductFeature\":{\"dbName\":\"ddd_product_feature\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"dbName\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"ProductToProductFeature\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToProductFeature\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"dbName\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"event\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"command\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Entity\":{\"dbName\":\"ddd_entity\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"dbName\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToEntity\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"EntityField\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EntityField\",\"relationName\":\"EntityToEntityField\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EntityField\":{\"dbName\":\"ddd_entity_field\",\"fields\":[{\"name\":\"id\",\"dbName\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entityId\",\"dbName\":\"entity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"entity\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Entity\",\"relationName\":\"EntityToEntityField\",\"relationFromFields\":[\"entityId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domainId\",\"dbName\":\"domain_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Domain\",\"relationName\":\"DomainToEntityField\",\"relationFromFields\":[\"domainId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"defaultValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRequired\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dict\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"versionNum\",\"dbName\":\"version_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createBy\",\"dbName\":\"create_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createAt\",\"dbName\":\"create_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateBy\",\"dbName\":\"update_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updateAt\",\"dbName\":\"update_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

