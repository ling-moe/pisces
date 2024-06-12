
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model RoleMenu
 * 
 */
export type RoleMenu = $Result.DefaultSelection<Prisma.$RoleMenuPayload>
/**
 * Model RoleUser
 * 
 */
export type RoleUser = $Result.DefaultSelection<Prisma.$RoleUserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model ProductFeature
 * 
 */
export type ProductFeature = $Result.DefaultSelection<Prisma.$ProductFeaturePayload>
/**
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model EntityField
 * 
 */
export type EntityField = $Result.DefaultSelection<Prisma.$EntityFieldPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.roleMenu`: Exposes CRUD operations for the **RoleMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleMenus
    * const roleMenus = await prisma.roleMenu.findMany()
    * ```
    */
  get roleMenu(): Prisma.RoleMenuDelegate<ExtArgs>;

  /**
   * `prisma.roleUser`: Exposes CRUD operations for the **RoleUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleUsers
    * const roleUsers = await prisma.roleUser.findMany()
    * ```
    */
  get roleUser(): Prisma.RoleUserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs>;

  /**
   * `prisma.productFeature`: Exposes CRUD operations for the **ProductFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductFeatures
    * const productFeatures = await prisma.productFeature.findMany()
    * ```
    */
  get productFeature(): Prisma.ProductFeatureDelegate<ExtArgs>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs>;

  /**
   * `prisma.entityField`: Exposes CRUD operations for the **EntityField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntityFields
    * const entityFields = await prisma.entityField.findMany()
    * ```
    */
  get entityField(): Prisma.EntityFieldDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'menu' | 'roleMenu' | 'roleUser' | 'product' | 'domain' | 'productFeature' | 'entity' | 'entityField'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>,
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      RoleMenu: {
        payload: Prisma.$RoleMenuPayload<ExtArgs>
        fields: Prisma.RoleMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleMenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleMenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findFirst: {
            args: Prisma.RoleMenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleMenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findMany: {
            args: Prisma.RoleMenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>[]
          }
          create: {
            args: Prisma.RoleMenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          createMany: {
            args: Prisma.RoleMenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleMenuCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>[]
          }
          delete: {
            args: Prisma.RoleMenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          update: {
            args: Prisma.RoleMenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          deleteMany: {
            args: Prisma.RoleMenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleMenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleMenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          aggregate: {
            args: Prisma.RoleMenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoleMenu>
          }
          groupBy: {
            args: Prisma.RoleMenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleMenuCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleMenuCountAggregateOutputType> | number
          }
        }
      }
      RoleUser: {
        payload: Prisma.$RoleUserPayload<ExtArgs>
        fields: Prisma.RoleUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          findFirst: {
            args: Prisma.RoleUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          findMany: {
            args: Prisma.RoleUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>[]
          }
          create: {
            args: Prisma.RoleUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          createMany: {
            args: Prisma.RoleUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleUserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>[]
          }
          delete: {
            args: Prisma.RoleUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          update: {
            args: Prisma.RoleUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          deleteMany: {
            args: Prisma.RoleUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUserPayload>
          }
          aggregate: {
            args: Prisma.RoleUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoleUser>
          }
          groupBy: {
            args: Prisma.RoleUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleUserCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleUserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>,
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      ProductFeature: {
        payload: Prisma.$ProductFeaturePayload<ExtArgs>
        fields: Prisma.ProductFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFeatureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFeatureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          findFirst: {
            args: Prisma.ProductFeatureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFeatureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          findMany: {
            args: Prisma.ProductFeatureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>[]
          }
          create: {
            args: Prisma.ProductFeatureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          createMany: {
            args: Prisma.ProductFeatureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductFeatureCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>[]
          }
          delete: {
            args: Prisma.ProductFeatureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          update: {
            args: Prisma.ProductFeatureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          deleteMany: {
            args: Prisma.ProductFeatureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductFeatureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductFeatureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductFeaturePayload>
          }
          aggregate: {
            args: Prisma.ProductFeatureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductFeature>
          }
          groupBy: {
            args: Prisma.ProductFeatureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductFeatureCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductFeatureCountAggregateOutputType> | number
          }
        }
      }
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>,
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      EntityField: {
        payload: Prisma.$EntityFieldPayload<ExtArgs>
        fields: Prisma.EntityFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFieldFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFieldFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          findFirst: {
            args: Prisma.EntityFieldFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFieldFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          findMany: {
            args: Prisma.EntityFieldFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>[]
          }
          create: {
            args: Prisma.EntityFieldCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          createMany: {
            args: Prisma.EntityFieldCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityFieldCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>[]
          }
          delete: {
            args: Prisma.EntityFieldDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          update: {
            args: Prisma.EntityFieldUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          deleteMany: {
            args: Prisma.EntityFieldDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntityFieldUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntityFieldUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntityFieldPayload>
          }
          aggregate: {
            args: Prisma.EntityFieldAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntityField>
          }
          groupBy: {
            args: Prisma.EntityFieldGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntityFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityFieldCountArgs<ExtArgs>,
            result: $Utils.Optional<EntityFieldCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roleUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleUsers?: boolean | UserCountOutputTypeCountRoleUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    roleMenus: number
    roleUsers: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleMenus?: boolean | RoleCountOutputTypeCountRoleMenusArgs
    roleUsers?: boolean | RoleCountOutputTypeCountRoleUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoleMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUserWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    RoleMenu: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoleMenu?: boolean | MenuCountOutputTypeCountRoleMenuArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountRoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    domains: number
    productFeatures: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | ProductCountOutputTypeCountDomainsArgs
    productFeatures?: boolean | ProductCountOutputTypeCountProductFeaturesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFeatureWhereInput
  }


  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    productFeatures: number
    Entity: number
    EntityField: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productFeatures?: boolean | DomainCountOutputTypeCountProductFeaturesArgs
    Entity?: boolean | DomainCountOutputTypeCountEntityArgs
    EntityField?: boolean | DomainCountOutputTypeCountEntityFieldArgs
  }

  // Custom InputTypes
  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountProductFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFeatureWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountEntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountEntityFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityFieldWhereInput
  }


  /**
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    EntityField: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EntityField?: boolean | EntityCountOutputTypeCountEntityFieldArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountEntityFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityFieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    displayName: string | null
    lang: string | null
    locale: string | null
    email: string | null
    phone: string | null
    sex: string | null
    avatar: string | null
    password: string | null
    effectiveStartDate: Date | null
    effectiveEndDate: Date | null
    activedFlag: boolean | null
    lockedTime: Date | null
    enabledFlag: boolean | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    displayName: string | null
    lang: string | null
    locale: string | null
    email: string | null
    phone: string | null
    sex: string | null
    avatar: string | null
    password: string | null
    effectiveStartDate: Date | null
    effectiveEndDate: Date | null
    activedFlag: boolean | null
    lockedTime: Date | null
    enabledFlag: boolean | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    lang: number
    locale: number
    email: number
    phone: number
    sex: number
    avatar: number
    password: number
    effectiveStartDate: number
    effectiveEndDate: number
    activedFlag: number
    lockedTime: number
    enabledFlag: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    lang?: true
    locale?: true
    email?: true
    phone?: true
    sex?: true
    avatar?: true
    password?: true
    effectiveStartDate?: true
    effectiveEndDate?: true
    activedFlag?: true
    lockedTime?: true
    enabledFlag?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    lang?: true
    locale?: true
    email?: true
    phone?: true
    sex?: true
    avatar?: true
    password?: true
    effectiveStartDate?: true
    effectiveEndDate?: true
    activedFlag?: true
    lockedTime?: true
    enabledFlag?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    lang?: true
    locale?: true
    email?: true
    phone?: true
    sex?: true
    avatar?: true
    password?: true
    effectiveStartDate?: true
    effectiveEndDate?: true
    activedFlag?: true
    lockedTime?: true
    enabledFlag?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
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
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    lang?: boolean
    locale?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    avatar?: boolean
    password?: boolean
    effectiveStartDate?: boolean
    effectiveEndDate?: boolean
    activedFlag?: boolean
    lockedTime?: boolean
    enabledFlag?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    roleUsers?: boolean | User$roleUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    lang?: boolean
    locale?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    avatar?: boolean
    password?: boolean
    effectiveStartDate?: boolean
    effectiveEndDate?: boolean
    activedFlag?: boolean
    lockedTime?: boolean
    enabledFlag?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    lang?: boolean
    locale?: boolean
    email?: boolean
    phone?: boolean
    sex?: boolean
    avatar?: boolean
    password?: boolean
    effectiveStartDate?: boolean
    effectiveEndDate?: boolean
    activedFlag?: boolean
    lockedTime?: boolean
    enabledFlag?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleUsers?: boolean | User$roleUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roleUsers: Prisma.$RoleUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roleUsers<T extends User$roleUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$roleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly lang: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly effectiveStartDate: FieldRef<"User", 'DateTime'>
    readonly effectiveEndDate: FieldRef<"User", 'DateTime'>
    readonly activedFlag: FieldRef<"User", 'Boolean'>
    readonly lockedTime: FieldRef<"User", 'DateTime'>
    readonly enabledFlag: FieldRef<"User", 'Boolean'>
    readonly versionNum: FieldRef<"User", 'BigInt'>
    readonly createBy: FieldRef<"User", 'BigInt'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateBy: FieldRef<"User", 'BigInt'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.roleUsers
   */
  export type User$roleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    where?: RoleUserWhereInput
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    cursor?: RoleUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleUserScalarFieldEnum | RoleUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    id: bigint | null
    roleCode: string | null
    roleName: string | null
    enabledFlag: boolean | null
    remark: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: bigint | null
    roleCode: string | null
    roleName: string | null
    enabledFlag: boolean | null
    remark: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    roleCode: number
    roleName: number
    enabledFlag: number
    remark: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    roleCode?: true
    roleName?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    roleCode?: true
    roleName?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    roleCode?: true
    roleName?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: bigint
    roleCode: string
    roleName: string
    enabledFlag: boolean
    remark: string | null
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleCode?: boolean
    roleName?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    roleMenus?: boolean | Role$roleMenusArgs<ExtArgs>
    roleUsers?: boolean | Role$roleUsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleCode?: boolean
    roleName?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    roleCode?: boolean
    roleName?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roleMenus?: boolean | Role$roleMenusArgs<ExtArgs>
    roleUsers?: boolean | Role$roleUsersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      roleMenus: Prisma.$RoleMenuPayload<ExtArgs>[]
      roleUsers: Prisma.$RoleUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roleCode: string
      roleName: string
      enabledFlag: boolean
      remark: string | null
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roleMenus<T extends Role$roleMenusArgs<ExtArgs> = {}>(args?: Subset<T, Role$roleMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    roleUsers<T extends Role$roleUsersArgs<ExtArgs> = {}>(args?: Subset<T, Role$roleUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'BigInt'>
    readonly roleCode: FieldRef<"Role", 'String'>
    readonly roleName: FieldRef<"Role", 'String'>
    readonly enabledFlag: FieldRef<"Role", 'Boolean'>
    readonly remark: FieldRef<"Role", 'String'>
    readonly versionNum: FieldRef<"Role", 'BigInt'>
    readonly createBy: FieldRef<"Role", 'BigInt'>
    readonly createAt: FieldRef<"Role", 'DateTime'>
    readonly updateBy: FieldRef<"Role", 'BigInt'>
    readonly updateAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.roleMenus
   */
  export type Role$roleMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Role.roleUsers
   */
  export type Role$roleUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    where?: RoleUserWhereInput
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    cursor?: RoleUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleUserScalarFieldEnum | RoleUserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    pid: number | null
    menuSort: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: bigint | null
    pid: bigint | null
    menuSort: number | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type MenuMinAggregateOutputType = {
    id: bigint | null
    menuCode: string | null
    menuName: string | null
    menuType: string | null
    pid: bigint | null
    icon: string | null
    route: string | null
    menuSort: number | null
    enabledFlag: boolean | null
    remark: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: bigint | null
    menuCode: string | null
    menuName: string | null
    menuType: string | null
    pid: bigint | null
    icon: string | null
    route: string | null
    menuSort: number | null
    enabledFlag: boolean | null
    remark: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    menuCode: number
    menuName: number
    menuType: number
    pid: number
    icon: number
    route: number
    menuSort: number
    enabledFlag: number
    remark: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    pid?: true
    menuSort?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    pid?: true
    menuSort?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    menuCode?: true
    menuName?: true
    menuType?: true
    pid?: true
    icon?: true
    route?: true
    menuSort?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    menuCode?: true
    menuName?: true
    menuType?: true
    pid?: true
    icon?: true
    route?: true
    menuSort?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    menuCode?: true
    menuName?: true
    menuType?: true
    pid?: true
    icon?: true
    route?: true
    menuSort?: true
    enabledFlag?: true
    remark?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: bigint
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
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuCode?: boolean
    menuName?: boolean
    menuType?: boolean
    pid?: boolean
    icon?: boolean
    route?: boolean
    menuSort?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    RoleMenu?: boolean | Menu$RoleMenuArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuCode?: boolean
    menuName?: boolean
    menuType?: boolean
    pid?: boolean
    icon?: boolean
    route?: boolean
    menuSort?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    menuCode?: boolean
    menuName?: boolean
    menuType?: boolean
    pid?: boolean
    icon?: boolean
    route?: boolean
    menuSort?: boolean
    enabledFlag?: boolean
    remark?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoleMenu?: boolean | Menu$RoleMenuArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      RoleMenu: Prisma.$RoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
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
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuCreateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    RoleMenu<T extends Menu$RoleMenuArgs<ExtArgs> = {}>(args?: Subset<T, Menu$RoleMenuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'BigInt'>
    readonly menuCode: FieldRef<"Menu", 'String'>
    readonly menuName: FieldRef<"Menu", 'String'>
    readonly menuType: FieldRef<"Menu", 'String'>
    readonly pid: FieldRef<"Menu", 'BigInt'>
    readonly icon: FieldRef<"Menu", 'String'>
    readonly route: FieldRef<"Menu", 'String'>
    readonly menuSort: FieldRef<"Menu", 'Int'>
    readonly enabledFlag: FieldRef<"Menu", 'Boolean'>
    readonly remark: FieldRef<"Menu", 'String'>
    readonly versionNum: FieldRef<"Menu", 'BigInt'>
    readonly createBy: FieldRef<"Menu", 'BigInt'>
    readonly createAt: FieldRef<"Menu", 'DateTime'>
    readonly updateBy: FieldRef<"Menu", 'BigInt'>
    readonly updateAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.RoleMenu
   */
  export type Menu$RoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model RoleMenu
   */

  export type AggregateRoleMenu = {
    _count: RoleMenuCountAggregateOutputType | null
    _avg: RoleMenuAvgAggregateOutputType | null
    _sum: RoleMenuSumAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  export type RoleMenuAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    menuId: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type RoleMenuSumAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    menuId: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type RoleMenuMinAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    menuId: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleMenuMaxAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    menuId: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleMenuCountAggregateOutputType = {
    id: number
    roleId: number
    menuId: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type RoleMenuAvgAggregateInputType = {
    id?: true
    roleId?: true
    menuId?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleMenuSumAggregateInputType = {
    id?: true
    roleId?: true
    menuId?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleMenuMinAggregateInputType = {
    id?: true
    roleId?: true
    menuId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleMenuMaxAggregateInputType = {
    id?: true
    roleId?: true
    menuId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleMenuCountAggregateInputType = {
    id?: true
    roleId?: true
    menuId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type RoleMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenu to aggregate.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleMenus
    **/
    _count?: true | RoleMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMenuMaxAggregateInputType
  }

  export type GetRoleMenuAggregateType<T extends RoleMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleMenu[P]>
      : GetScalarType<T[P], AggregateRoleMenu[P]>
  }




  export type RoleMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithAggregationInput | RoleMenuOrderByWithAggregationInput[]
    by: RoleMenuScalarFieldEnum[] | RoleMenuScalarFieldEnum
    having?: RoleMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleMenuCountAggregateInputType | true
    _avg?: RoleMenuAvgAggregateInputType
    _sum?: RoleMenuSumAggregateInputType
    _min?: RoleMenuMinAggregateInputType
    _max?: RoleMenuMaxAggregateInputType
  }

  export type RoleMenuGroupByOutputType = {
    id: bigint
    roleId: bigint
    menuId: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: RoleMenuCountAggregateOutputType | null
    _avg: RoleMenuAvgAggregateOutputType | null
    _sum: RoleMenuSumAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  type GetRoleMenuGroupByPayload<T extends RoleMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
            : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
        }
      >
    >


  export type RoleMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    menuId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleMenu"]>

  export type RoleMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    menuId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleMenu"]>

  export type RoleMenuSelectScalar = {
    id?: boolean
    roleId?: boolean
    menuId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type RoleMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type RoleMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $RoleMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleMenu"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roleId: bigint
      menuId: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["roleMenu"]>
    composites: {}
  }

  type RoleMenuGetPayload<S extends boolean | null | undefined | RoleMenuDefaultArgs> = $Result.GetResult<Prisma.$RoleMenuPayload, S>

  type RoleMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleMenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleMenuCountAggregateInputType | true
    }

  export interface RoleMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleMenu'], meta: { name: 'RoleMenu' } }
    /**
     * Find zero or one RoleMenu that matches the filter.
     * @param {RoleMenuFindUniqueArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleMenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoleMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleMenuFindUniqueOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleMenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoleMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleMenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuFindFirstArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoleMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleMenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoleMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany()
     * 
     * // Get first 10 RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleMenuWithIdOnly = await prisma.roleMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleMenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoleMenu.
     * @param {RoleMenuCreateArgs} args - Arguments to create a RoleMenu.
     * @example
     * // Create one RoleMenu
     * const RoleMenu = await prisma.roleMenu.create({
     *   data: {
     *     // ... data to create a RoleMenu
     *   }
     * })
     * 
    **/
    create<T extends RoleMenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuCreateArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RoleMenus.
     * @param {RoleMenuCreateManyArgs} args - Arguments to create many RoleMenus.
     * @example
     * // Create many RoleMenus
     * const roleMenu = await prisma.roleMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleMenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoleMenus and returns the data saved in the database.
     * @param {RoleMenuCreateManyAndReturnArgs} args - Arguments to create many RoleMenus.
     * @example
     * // Create many RoleMenus
     * const roleMenu = await prisma.roleMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoleMenus and only return the `id`
     * const roleMenuWithIdOnly = await prisma.roleMenu.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RoleMenuCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a RoleMenu.
     * @param {RoleMenuDeleteArgs} args - Arguments to delete one RoleMenu.
     * @example
     * // Delete one RoleMenu
     * const RoleMenu = await prisma.roleMenu.delete({
     *   where: {
     *     // ... filter to delete one RoleMenu
     *   }
     * })
     * 
    **/
    delete<T extends RoleMenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuDeleteArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoleMenu.
     * @param {RoleMenuUpdateArgs} args - Arguments to update one RoleMenu.
     * @example
     * // Update one RoleMenu
     * const roleMenu = await prisma.roleMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleMenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuUpdateArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoleMenus.
     * @param {RoleMenuDeleteManyArgs} args - Arguments to filter RoleMenus to delete.
     * @example
     * // Delete a few RoleMenus
     * const { count } = await prisma.roleMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleMenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleMenus
     * const roleMenu = await prisma.roleMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleMenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleMenu.
     * @param {RoleMenuUpsertArgs} args - Arguments to update or create a RoleMenu.
     * @example
     * // Update or create a RoleMenu
     * const roleMenu = await prisma.roleMenu.upsert({
     *   create: {
     *     // ... data to create a RoleMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleMenu we want to update
     *   }
     * })
    **/
    upsert<T extends RoleMenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuUpsertArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuCountArgs} args - Arguments to filter RoleMenus to count.
     * @example
     * // Count the number of RoleMenus
     * const count = await prisma.roleMenu.count({
     *   where: {
     *     // ... the filter for the RoleMenus we want to count
     *   }
     * })
    **/
    count<T extends RoleMenuCountArgs>(
      args?: Subset<T, RoleMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleMenuAggregateArgs>(args: Subset<T, RoleMenuAggregateArgs>): Prisma.PrismaPromise<GetRoleMenuAggregateType<T>>

    /**
     * Group by RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleMenuGroupByArgs['orderBy'] }
        : { orderBy?: RoleMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleMenu model
   */
  readonly fields: RoleMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoleMenu model
   */ 
  interface RoleMenuFieldRefs {
    readonly id: FieldRef<"RoleMenu", 'BigInt'>
    readonly roleId: FieldRef<"RoleMenu", 'BigInt'>
    readonly menuId: FieldRef<"RoleMenu", 'BigInt'>
    readonly createBy: FieldRef<"RoleMenu", 'BigInt'>
    readonly createAt: FieldRef<"RoleMenu", 'DateTime'>
    readonly updateBy: FieldRef<"RoleMenu", 'BigInt'>
    readonly updateAt: FieldRef<"RoleMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleMenu findUnique
   */
  export type RoleMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findUniqueOrThrow
   */
  export type RoleMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findFirst
   */
  export type RoleMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findFirstOrThrow
   */
  export type RoleMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findMany
   */
  export type RoleMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenus to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu create
   */
  export type RoleMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleMenu.
     */
    data: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
  }

  /**
   * RoleMenu createMany
   */
  export type RoleMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleMenus.
     */
    data: RoleMenuCreateManyInput | RoleMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleMenu createManyAndReturn
   */
  export type RoleMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoleMenus.
     */
    data: RoleMenuCreateManyInput | RoleMenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoleMenu update
   */
  export type RoleMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleMenu.
     */
    data: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
    /**
     * Choose, which RoleMenu to update.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu updateMany
   */
  export type RoleMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleMenus.
     */
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyInput>
    /**
     * Filter which RoleMenus to update
     */
    where?: RoleMenuWhereInput
  }

  /**
   * RoleMenu upsert
   */
  export type RoleMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleMenu to update in case it exists.
     */
    where: RoleMenuWhereUniqueInput
    /**
     * In case the RoleMenu found by the `where` argument doesn't exist, create a new RoleMenu with this data.
     */
    create: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
    /**
     * In case the RoleMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
  }

  /**
   * RoleMenu delete
   */
  export type RoleMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter which RoleMenu to delete.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu deleteMany
   */
  export type RoleMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenus to delete
     */
    where?: RoleMenuWhereInput
  }

  /**
   * RoleMenu without action
   */
  export type RoleMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
  }


  /**
   * Model RoleUser
   */

  export type AggregateRoleUser = {
    _count: RoleUserCountAggregateOutputType | null
    _avg: RoleUserAvgAggregateOutputType | null
    _sum: RoleUserSumAggregateOutputType | null
    _min: RoleUserMinAggregateOutputType | null
    _max: RoleUserMaxAggregateOutputType | null
  }

  export type RoleUserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    userId: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type RoleUserSumAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    userId: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type RoleUserMinAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    userId: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleUserMaxAggregateOutputType = {
    id: bigint | null
    roleId: bigint | null
    userId: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type RoleUserCountAggregateOutputType = {
    id: number
    roleId: number
    userId: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type RoleUserAvgAggregateInputType = {
    id?: true
    roleId?: true
    userId?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleUserSumAggregateInputType = {
    id?: true
    roleId?: true
    userId?: true
    createBy?: true
    updateBy?: true
  }

  export type RoleUserMinAggregateInputType = {
    id?: true
    roleId?: true
    userId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleUserMaxAggregateInputType = {
    id?: true
    roleId?: true
    userId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type RoleUserCountAggregateInputType = {
    id?: true
    roleId?: true
    userId?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type RoleUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleUser to aggregate.
     */
    where?: RoleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUsers to fetch.
     */
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleUsers
    **/
    _count?: true | RoleUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleUserMaxAggregateInputType
  }

  export type GetRoleUserAggregateType<T extends RoleUserAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleUser[P]>
      : GetScalarType<T[P], AggregateRoleUser[P]>
  }




  export type RoleUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUserWhereInput
    orderBy?: RoleUserOrderByWithAggregationInput | RoleUserOrderByWithAggregationInput[]
    by: RoleUserScalarFieldEnum[] | RoleUserScalarFieldEnum
    having?: RoleUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleUserCountAggregateInputType | true
    _avg?: RoleUserAvgAggregateInputType
    _sum?: RoleUserSumAggregateInputType
    _min?: RoleUserMinAggregateInputType
    _max?: RoleUserMaxAggregateInputType
  }

  export type RoleUserGroupByOutputType = {
    id: bigint
    roleId: bigint
    userId: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: RoleUserCountAggregateOutputType | null
    _avg: RoleUserAvgAggregateOutputType | null
    _sum: RoleUserSumAggregateOutputType | null
    _min: RoleUserMinAggregateOutputType | null
    _max: RoleUserMaxAggregateOutputType | null
  }

  type GetRoleUserGroupByPayload<T extends RoleUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleUserGroupByOutputType[P]>
            : GetScalarType<T[P], RoleUserGroupByOutputType[P]>
        }
      >
    >


  export type RoleUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    userId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleUser"]>

  export type RoleUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    userId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleUser"]>

  export type RoleUserSelectScalar = {
    id?: boolean
    roleId?: boolean
    userId?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type RoleUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoleUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoleUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleUser"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      roleId: bigint
      userId: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["roleUser"]>
    composites: {}
  }

  type RoleUserGetPayload<S extends boolean | null | undefined | RoleUserDefaultArgs> = $Result.GetResult<Prisma.$RoleUserPayload, S>

  type RoleUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleUserCountAggregateInputType | true
    }

  export interface RoleUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleUser'], meta: { name: 'RoleUser' } }
    /**
     * Find zero or one RoleUser that matches the filter.
     * @param {RoleUserFindUniqueArgs} args - Arguments to find a RoleUser
     * @example
     * // Get one RoleUser
     * const roleUser = await prisma.roleUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoleUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleUserFindUniqueOrThrowArgs} args - Arguments to find a RoleUser
     * @example
     * // Get one RoleUser
     * const roleUser = await prisma.roleUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoleUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserFindFirstArgs} args - Arguments to find a RoleUser
     * @example
     * // Get one RoleUser
     * const roleUser = await prisma.roleUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserFindFirstArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoleUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserFindFirstOrThrowArgs} args - Arguments to find a RoleUser
     * @example
     * // Get one RoleUser
     * const roleUser = await prisma.roleUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoleUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleUsers
     * const roleUsers = await prisma.roleUser.findMany()
     * 
     * // Get first 10 RoleUsers
     * const roleUsers = await prisma.roleUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleUserWithIdOnly = await prisma.roleUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoleUser.
     * @param {RoleUserCreateArgs} args - Arguments to create a RoleUser.
     * @example
     * // Create one RoleUser
     * const RoleUser = await prisma.roleUser.create({
     *   data: {
     *     // ... data to create a RoleUser
     *   }
     * })
     * 
    **/
    create<T extends RoleUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserCreateArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RoleUsers.
     * @param {RoleUserCreateManyArgs} args - Arguments to create many RoleUsers.
     * @example
     * // Create many RoleUsers
     * const roleUser = await prisma.roleUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoleUsers and returns the data saved in the database.
     * @param {RoleUserCreateManyAndReturnArgs} args - Arguments to create many RoleUsers.
     * @example
     * // Create many RoleUsers
     * const roleUser = await prisma.roleUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoleUsers and only return the `id`
     * const roleUserWithIdOnly = await prisma.roleUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RoleUserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a RoleUser.
     * @param {RoleUserDeleteArgs} args - Arguments to delete one RoleUser.
     * @example
     * // Delete one RoleUser
     * const RoleUser = await prisma.roleUser.delete({
     *   where: {
     *     // ... filter to delete one RoleUser
     *   }
     * })
     * 
    **/
    delete<T extends RoleUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserDeleteArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoleUser.
     * @param {RoleUserUpdateArgs} args - Arguments to update one RoleUser.
     * @example
     * // Update one RoleUser
     * const roleUser = await prisma.roleUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserUpdateArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoleUsers.
     * @param {RoleUserDeleteManyArgs} args - Arguments to filter RoleUsers to delete.
     * @example
     * // Delete a few RoleUsers
     * const { count } = await prisma.roleUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleUsers
     * const roleUser = await prisma.roleUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleUser.
     * @param {RoleUserUpsertArgs} args - Arguments to update or create a RoleUser.
     * @example
     * // Update or create a RoleUser
     * const roleUser = await prisma.roleUser.upsert({
     *   create: {
     *     // ... data to create a RoleUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleUser we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUserUpsertArgs<ExtArgs>>
    ): Prisma__RoleUserClient<$Result.GetResult<Prisma.$RoleUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoleUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserCountArgs} args - Arguments to filter RoleUsers to count.
     * @example
     * // Count the number of RoleUsers
     * const count = await prisma.roleUser.count({
     *   where: {
     *     // ... the filter for the RoleUsers we want to count
     *   }
     * })
    **/
    count<T extends RoleUserCountArgs>(
      args?: Subset<T, RoleUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleUserAggregateArgs>(args: Subset<T, RoleUserAggregateArgs>): Prisma.PrismaPromise<GetRoleUserAggregateType<T>>

    /**
     * Group by RoleUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleUserGroupByArgs['orderBy'] }
        : { orderBy?: RoleUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleUser model
   */
  readonly fields: RoleUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoleUser model
   */ 
  interface RoleUserFieldRefs {
    readonly id: FieldRef<"RoleUser", 'BigInt'>
    readonly roleId: FieldRef<"RoleUser", 'BigInt'>
    readonly userId: FieldRef<"RoleUser", 'BigInt'>
    readonly createBy: FieldRef<"RoleUser", 'BigInt'>
    readonly createAt: FieldRef<"RoleUser", 'DateTime'>
    readonly updateBy: FieldRef<"RoleUser", 'BigInt'>
    readonly updateAt: FieldRef<"RoleUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleUser findUnique
   */
  export type RoleUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter, which RoleUser to fetch.
     */
    where: RoleUserWhereUniqueInput
  }

  /**
   * RoleUser findUniqueOrThrow
   */
  export type RoleUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter, which RoleUser to fetch.
     */
    where: RoleUserWhereUniqueInput
  }

  /**
   * RoleUser findFirst
   */
  export type RoleUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter, which RoleUser to fetch.
     */
    where?: RoleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUsers to fetch.
     */
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleUsers.
     */
    cursor?: RoleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleUsers.
     */
    distinct?: RoleUserScalarFieldEnum | RoleUserScalarFieldEnum[]
  }

  /**
   * RoleUser findFirstOrThrow
   */
  export type RoleUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter, which RoleUser to fetch.
     */
    where?: RoleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUsers to fetch.
     */
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleUsers.
     */
    cursor?: RoleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleUsers.
     */
    distinct?: RoleUserScalarFieldEnum | RoleUserScalarFieldEnum[]
  }

  /**
   * RoleUser findMany
   */
  export type RoleUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter, which RoleUsers to fetch.
     */
    where?: RoleUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUsers to fetch.
     */
    orderBy?: RoleUserOrderByWithRelationInput | RoleUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleUsers.
     */
    cursor?: RoleUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUsers.
     */
    skip?: number
    distinct?: RoleUserScalarFieldEnum | RoleUserScalarFieldEnum[]
  }

  /**
   * RoleUser create
   */
  export type RoleUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleUser.
     */
    data: XOR<RoleUserCreateInput, RoleUserUncheckedCreateInput>
  }

  /**
   * RoleUser createMany
   */
  export type RoleUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleUsers.
     */
    data: RoleUserCreateManyInput | RoleUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleUser createManyAndReturn
   */
  export type RoleUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoleUsers.
     */
    data: RoleUserCreateManyInput | RoleUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoleUser update
   */
  export type RoleUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleUser.
     */
    data: XOR<RoleUserUpdateInput, RoleUserUncheckedUpdateInput>
    /**
     * Choose, which RoleUser to update.
     */
    where: RoleUserWhereUniqueInput
  }

  /**
   * RoleUser updateMany
   */
  export type RoleUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleUsers.
     */
    data: XOR<RoleUserUpdateManyMutationInput, RoleUserUncheckedUpdateManyInput>
    /**
     * Filter which RoleUsers to update
     */
    where?: RoleUserWhereInput
  }

  /**
   * RoleUser upsert
   */
  export type RoleUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleUser to update in case it exists.
     */
    where: RoleUserWhereUniqueInput
    /**
     * In case the RoleUser found by the `where` argument doesn't exist, create a new RoleUser with this data.
     */
    create: XOR<RoleUserCreateInput, RoleUserUncheckedCreateInput>
    /**
     * In case the RoleUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUserUpdateInput, RoleUserUncheckedUpdateInput>
  }

  /**
   * RoleUser delete
   */
  export type RoleUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
    /**
     * Filter which RoleUser to delete.
     */
    where: RoleUserWhereUniqueInput
  }

  /**
   * RoleUser deleteMany
   */
  export type RoleUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleUsers to delete
     */
    where?: RoleUserWhereInput
  }

  /**
   * RoleUser without action
   */
  export type RoleUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUser
     */
    select?: RoleUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleUserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type ProductMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    desc: string | null
    data: Buffer | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    name: string | null
    desc: string | null
    data: Buffer | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    code: number
    name: number
    desc: number
    data: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    desc?: true
    data?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    desc?: true
    data?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    desc?: true
    data?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: bigint
    code: string
    name: string
    desc: string | null
    data: Buffer | null
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    desc?: boolean
    data?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    domains?: boolean | Product$domainsArgs<ExtArgs>
    productFeatures?: boolean | Product$productFeaturesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    desc?: boolean
    data?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    desc?: boolean
    data?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | Product$domainsArgs<ExtArgs>
    productFeatures?: boolean | Product$productFeaturesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      domains: Prisma.$DomainPayload<ExtArgs>[]
      productFeatures: Prisma.$ProductFeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      name: string
      desc: string | null
      data: Buffer | null
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domains<T extends Product$domainsArgs<ExtArgs> = {}>(args?: Subset<T, Product$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findMany'> | Null>;

    productFeatures<T extends Product$productFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'BigInt'>
    readonly code: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly desc: FieldRef<"Product", 'String'>
    readonly data: FieldRef<"Product", 'Bytes'>
    readonly versionNum: FieldRef<"Product", 'BigInt'>
    readonly createBy: FieldRef<"Product", 'BigInt'>
    readonly createAt: FieldRef<"Product", 'DateTime'>
    readonly updateBy: FieldRef<"Product", 'BigInt'>
    readonly updateAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.domains
   */
  export type Product$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    cursor?: DomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Product.productFeatures
   */
  export type Product$productFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    where?: ProductFeatureWhereInput
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    cursor?: ProductFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFeatureScalarFieldEnum | ProductFeatureScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type DomainSumAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type DomainMinAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    name: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type DomainMaxAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    name: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    desc: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type DomainAvgAggregateInputType = {
    id?: true
    productId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type DomainSumAggregateInputType = {
    id?: true
    productId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type DomainMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _avg?: DomainAvgAggregateInputType
    _sum?: DomainSumAggregateInputType
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: bigint
    productId: bigint | null
    name: string
    desc: string | null
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: DomainCountAggregateOutputType | null
    _avg: DomainAvgAggregateOutputType | null
    _sum: DomainSumAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    product?: boolean | Domain$productArgs<ExtArgs>
    productFeatures?: boolean | Domain$productFeaturesArgs<ExtArgs>
    Entity?: boolean | Domain$EntityArgs<ExtArgs>
    EntityField?: boolean | Domain$EntityFieldArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    product?: boolean | Domain$productArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Domain$productArgs<ExtArgs>
    productFeatures?: boolean | Domain$productFeaturesArgs<ExtArgs>
    Entity?: boolean | Domain$EntityArgs<ExtArgs>
    EntityField?: boolean | Domain$EntityFieldArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Domain$productArgs<ExtArgs>
  }

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      productFeatures: Prisma.$ProductFeaturePayload<ExtArgs>[]
      Entity: Prisma.$EntityPayload<ExtArgs>[]
      EntityField: Prisma.$EntityFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      productId: bigint | null
      name: string
      desc: string | null
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DomainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DomainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DomainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
    **/
    create<T extends DomainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainCreateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DomainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
    **/
    delete<T extends DomainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DomainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DomainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DomainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
    **/
    upsert<T extends DomainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>
    ): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Domain$productArgs<ExtArgs> = {}>(args?: Subset<T, Domain$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    productFeatures<T extends Domain$productFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, Domain$productFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findMany'> | Null>;

    Entity<T extends Domain$EntityArgs<ExtArgs> = {}>(args?: Subset<T, Domain$EntityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findMany'> | Null>;

    EntityField<T extends Domain$EntityFieldArgs<ExtArgs> = {}>(args?: Subset<T, Domain$EntityFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Domain model
   */ 
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'BigInt'>
    readonly productId: FieldRef<"Domain", 'BigInt'>
    readonly name: FieldRef<"Domain", 'String'>
    readonly desc: FieldRef<"Domain", 'String'>
    readonly versionNum: FieldRef<"Domain", 'BigInt'>
    readonly createBy: FieldRef<"Domain", 'BigInt'>
    readonly createAt: FieldRef<"Domain", 'DateTime'>
    readonly updateBy: FieldRef<"Domain", 'BigInt'>
    readonly updateAt: FieldRef<"Domain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
  }

  /**
   * Domain.product
   */
  export type Domain$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Domain.productFeatures
   */
  export type Domain$productFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    where?: ProductFeatureWhereInput
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    cursor?: ProductFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFeatureScalarFieldEnum | ProductFeatureScalarFieldEnum[]
  }

  /**
   * Domain.Entity
   */
  export type Domain$EntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    cursor?: EntityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Domain.EntityField
   */
  export type Domain$EntityFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    where?: EntityFieldWhereInput
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    cursor?: EntityFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityFieldScalarFieldEnum | EntityFieldScalarFieldEnum[]
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model ProductFeature
   */

  export type AggregateProductFeature = {
    _count: ProductFeatureCountAggregateOutputType | null
    _avg: ProductFeatureAvgAggregateOutputType | null
    _sum: ProductFeatureSumAggregateOutputType | null
    _min: ProductFeatureMinAggregateOutputType | null
    _max: ProductFeatureMaxAggregateOutputType | null
  }

  export type ProductFeatureAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    domainId: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type ProductFeatureSumAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    domainId: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type ProductFeatureMinAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    domainId: bigint | null
    title: string | null
    desc: string | null
    event: string | null
    command: string | null
    role: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type ProductFeatureMaxAggregateOutputType = {
    id: bigint | null
    productId: bigint | null
    domainId: bigint | null
    title: string | null
    desc: string | null
    event: string | null
    command: string | null
    role: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type ProductFeatureCountAggregateOutputType = {
    id: number
    productId: number
    domainId: number
    title: number
    desc: number
    event: number
    command: number
    role: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type ProductFeatureAvgAggregateInputType = {
    id?: true
    productId?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type ProductFeatureSumAggregateInputType = {
    id?: true
    productId?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type ProductFeatureMinAggregateInputType = {
    id?: true
    productId?: true
    domainId?: true
    title?: true
    desc?: true
    event?: true
    command?: true
    role?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type ProductFeatureMaxAggregateInputType = {
    id?: true
    productId?: true
    domainId?: true
    title?: true
    desc?: true
    event?: true
    command?: true
    role?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type ProductFeatureCountAggregateInputType = {
    id?: true
    productId?: true
    domainId?: true
    title?: true
    desc?: true
    event?: true
    command?: true
    role?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type ProductFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFeature to aggregate.
     */
    where?: ProductFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFeatures to fetch.
     */
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductFeatures
    **/
    _count?: true | ProductFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductFeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductFeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductFeatureMaxAggregateInputType
  }

  export type GetProductFeatureAggregateType<T extends ProductFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateProductFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductFeature[P]>
      : GetScalarType<T[P], AggregateProductFeature[P]>
  }




  export type ProductFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFeatureWhereInput
    orderBy?: ProductFeatureOrderByWithAggregationInput | ProductFeatureOrderByWithAggregationInput[]
    by: ProductFeatureScalarFieldEnum[] | ProductFeatureScalarFieldEnum
    having?: ProductFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductFeatureCountAggregateInputType | true
    _avg?: ProductFeatureAvgAggregateInputType
    _sum?: ProductFeatureSumAggregateInputType
    _min?: ProductFeatureMinAggregateInputType
    _max?: ProductFeatureMaxAggregateInputType
  }

  export type ProductFeatureGroupByOutputType = {
    id: bigint
    productId: bigint
    domainId: bigint | null
    title: string
    desc: string | null
    event: string
    command: string
    role: string
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: ProductFeatureCountAggregateOutputType | null
    _avg: ProductFeatureAvgAggregateOutputType | null
    _sum: ProductFeatureSumAggregateOutputType | null
    _min: ProductFeatureMinAggregateOutputType | null
    _max: ProductFeatureMaxAggregateOutputType | null
  }

  type GetProductFeatureGroupByPayload<T extends ProductFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], ProductFeatureGroupByOutputType[P]>
        }
      >
    >


  export type ProductFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    domainId?: boolean
    title?: boolean
    desc?: boolean
    event?: boolean
    command?: boolean
    role?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    domain?: boolean | ProductFeature$domainArgs<ExtArgs>
  }, ExtArgs["result"]["productFeature"]>

  export type ProductFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    domainId?: boolean
    title?: boolean
    desc?: boolean
    event?: boolean
    command?: boolean
    role?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    domain?: boolean | ProductFeature$domainArgs<ExtArgs>
  }, ExtArgs["result"]["productFeature"]>

  export type ProductFeatureSelectScalar = {
    id?: boolean
    productId?: boolean
    domainId?: boolean
    title?: boolean
    desc?: boolean
    event?: boolean
    command?: boolean
    role?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type ProductFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    domain?: boolean | ProductFeature$domainArgs<ExtArgs>
  }
  export type ProductFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
    domain?: boolean | ProductFeature$domainArgs<ExtArgs>
  }

  export type $ProductFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductFeature"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
      domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      productId: bigint
      domainId: bigint | null
      title: string
      desc: string | null
      event: string
      command: string
      role: string
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["productFeature"]>
    composites: {}
  }

  type ProductFeatureGetPayload<S extends boolean | null | undefined | ProductFeatureDefaultArgs> = $Result.GetResult<Prisma.$ProductFeaturePayload, S>

  type ProductFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFeatureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductFeatureCountAggregateInputType | true
    }

  export interface ProductFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductFeature'], meta: { name: 'ProductFeature' } }
    /**
     * Find zero or one ProductFeature that matches the filter.
     * @param {ProductFeatureFindUniqueArgs} args - Arguments to find a ProductFeature
     * @example
     * // Get one ProductFeature
     * const productFeature = await prisma.productFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFeatureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductFeature that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFeatureFindUniqueOrThrowArgs} args - Arguments to find a ProductFeature
     * @example
     * // Get one ProductFeature
     * const productFeature = await prisma.productFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFeatureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureFindFirstArgs} args - Arguments to find a ProductFeature
     * @example
     * // Get one ProductFeature
     * const productFeature = await prisma.productFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFeatureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureFindFirstArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureFindFirstOrThrowArgs} args - Arguments to find a ProductFeature
     * @example
     * // Get one ProductFeature
     * const productFeature = await prisma.productFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFeatureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductFeatures
     * const productFeatures = await prisma.productFeature.findMany()
     * 
     * // Get first 10 ProductFeatures
     * const productFeatures = await prisma.productFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productFeatureWithIdOnly = await prisma.productFeature.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFeatureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductFeature.
     * @param {ProductFeatureCreateArgs} args - Arguments to create a ProductFeature.
     * @example
     * // Create one ProductFeature
     * const ProductFeature = await prisma.productFeature.create({
     *   data: {
     *     // ... data to create a ProductFeature
     *   }
     * })
     * 
    **/
    create<T extends ProductFeatureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureCreateArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductFeatures.
     * @param {ProductFeatureCreateManyArgs} args - Arguments to create many ProductFeatures.
     * @example
     * // Create many ProductFeatures
     * const productFeature = await prisma.productFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProductFeatureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductFeatures and returns the data saved in the database.
     * @param {ProductFeatureCreateManyAndReturnArgs} args - Arguments to create many ProductFeatures.
     * @example
     * // Create many ProductFeatures
     * const productFeature = await prisma.productFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductFeatures and only return the `id`
     * const productFeatureWithIdOnly = await prisma.productFeature.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProductFeatureCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ProductFeature.
     * @param {ProductFeatureDeleteArgs} args - Arguments to delete one ProductFeature.
     * @example
     * // Delete one ProductFeature
     * const ProductFeature = await prisma.productFeature.delete({
     *   where: {
     *     // ... filter to delete one ProductFeature
     *   }
     * })
     * 
    **/
    delete<T extends ProductFeatureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureDeleteArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductFeature.
     * @param {ProductFeatureUpdateArgs} args - Arguments to update one ProductFeature.
     * @example
     * // Update one ProductFeature
     * const productFeature = await prisma.productFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductFeatureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureUpdateArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductFeatures.
     * @param {ProductFeatureDeleteManyArgs} args - Arguments to filter ProductFeatures to delete.
     * @example
     * // Delete a few ProductFeatures
     * const { count } = await prisma.productFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductFeatureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFeatureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductFeatures
     * const productFeature = await prisma.productFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductFeatureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductFeature.
     * @param {ProductFeatureUpsertArgs} args - Arguments to update or create a ProductFeature.
     * @example
     * // Update or create a ProductFeature
     * const productFeature = await prisma.productFeature.upsert({
     *   create: {
     *     // ... data to create a ProductFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductFeature we want to update
     *   }
     * })
    **/
    upsert<T extends ProductFeatureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFeatureUpsertArgs<ExtArgs>>
    ): Prisma__ProductFeatureClient<$Result.GetResult<Prisma.$ProductFeaturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureCountArgs} args - Arguments to filter ProductFeatures to count.
     * @example
     * // Count the number of ProductFeatures
     * const count = await prisma.productFeature.count({
     *   where: {
     *     // ... the filter for the ProductFeatures we want to count
     *   }
     * })
    **/
    count<T extends ProductFeatureCountArgs>(
      args?: Subset<T, ProductFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductFeatureAggregateArgs>(args: Subset<T, ProductFeatureAggregateArgs>): Prisma.PrismaPromise<GetProductFeatureAggregateType<T>>

    /**
     * Group by ProductFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductFeatureGroupByArgs['orderBy'] }
        : { orderBy?: ProductFeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductFeature model
   */
  readonly fields: ProductFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    domain<T extends ProductFeature$domainArgs<ExtArgs> = {}>(args?: Subset<T, ProductFeature$domainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductFeature model
   */ 
  interface ProductFeatureFieldRefs {
    readonly id: FieldRef<"ProductFeature", 'BigInt'>
    readonly productId: FieldRef<"ProductFeature", 'BigInt'>
    readonly domainId: FieldRef<"ProductFeature", 'BigInt'>
    readonly title: FieldRef<"ProductFeature", 'String'>
    readonly desc: FieldRef<"ProductFeature", 'String'>
    readonly event: FieldRef<"ProductFeature", 'String'>
    readonly command: FieldRef<"ProductFeature", 'String'>
    readonly role: FieldRef<"ProductFeature", 'String'>
    readonly versionNum: FieldRef<"ProductFeature", 'BigInt'>
    readonly createBy: FieldRef<"ProductFeature", 'BigInt'>
    readonly createAt: FieldRef<"ProductFeature", 'DateTime'>
    readonly updateBy: FieldRef<"ProductFeature", 'BigInt'>
    readonly updateAt: FieldRef<"ProductFeature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductFeature findUnique
   */
  export type ProductFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ProductFeature to fetch.
     */
    where: ProductFeatureWhereUniqueInput
  }

  /**
   * ProductFeature findUniqueOrThrow
   */
  export type ProductFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ProductFeature to fetch.
     */
    where: ProductFeatureWhereUniqueInput
  }

  /**
   * ProductFeature findFirst
   */
  export type ProductFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ProductFeature to fetch.
     */
    where?: ProductFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFeatures to fetch.
     */
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFeatures.
     */
    cursor?: ProductFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFeatures.
     */
    distinct?: ProductFeatureScalarFieldEnum | ProductFeatureScalarFieldEnum[]
  }

  /**
   * ProductFeature findFirstOrThrow
   */
  export type ProductFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ProductFeature to fetch.
     */
    where?: ProductFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFeatures to fetch.
     */
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFeatures.
     */
    cursor?: ProductFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFeatures.
     */
    distinct?: ProductFeatureScalarFieldEnum | ProductFeatureScalarFieldEnum[]
  }

  /**
   * ProductFeature findMany
   */
  export type ProductFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ProductFeatures to fetch.
     */
    where?: ProductFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFeatures to fetch.
     */
    orderBy?: ProductFeatureOrderByWithRelationInput | ProductFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductFeatures.
     */
    cursor?: ProductFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFeatures.
     */
    skip?: number
    distinct?: ProductFeatureScalarFieldEnum | ProductFeatureScalarFieldEnum[]
  }

  /**
   * ProductFeature create
   */
  export type ProductFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductFeature.
     */
    data: XOR<ProductFeatureCreateInput, ProductFeatureUncheckedCreateInput>
  }

  /**
   * ProductFeature createMany
   */
  export type ProductFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductFeatures.
     */
    data: ProductFeatureCreateManyInput | ProductFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductFeature createManyAndReturn
   */
  export type ProductFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductFeatures.
     */
    data: ProductFeatureCreateManyInput | ProductFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductFeature update
   */
  export type ProductFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductFeature.
     */
    data: XOR<ProductFeatureUpdateInput, ProductFeatureUncheckedUpdateInput>
    /**
     * Choose, which ProductFeature to update.
     */
    where: ProductFeatureWhereUniqueInput
  }

  /**
   * ProductFeature updateMany
   */
  export type ProductFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductFeatures.
     */
    data: XOR<ProductFeatureUpdateManyMutationInput, ProductFeatureUncheckedUpdateManyInput>
    /**
     * Filter which ProductFeatures to update
     */
    where?: ProductFeatureWhereInput
  }

  /**
   * ProductFeature upsert
   */
  export type ProductFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductFeature to update in case it exists.
     */
    where: ProductFeatureWhereUniqueInput
    /**
     * In case the ProductFeature found by the `where` argument doesn't exist, create a new ProductFeature with this data.
     */
    create: XOR<ProductFeatureCreateInput, ProductFeatureUncheckedCreateInput>
    /**
     * In case the ProductFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductFeatureUpdateInput, ProductFeatureUncheckedUpdateInput>
  }

  /**
   * ProductFeature delete
   */
  export type ProductFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
    /**
     * Filter which ProductFeature to delete.
     */
    where: ProductFeatureWhereUniqueInput
  }

  /**
   * ProductFeature deleteMany
   */
  export type ProductFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFeatures to delete
     */
    where?: ProductFeatureWhereInput
  }

  /**
   * ProductFeature.domain
   */
  export type ProductFeature$domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * ProductFeature without action
   */
  export type ProductFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFeature
     */
    select?: ProductFeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFeatureInclude<ExtArgs> | null
  }


  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
    domainId: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: bigint | null
    domainId: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type EntityMinAggregateOutputType = {
    id: bigint | null
    domainId: bigint | null
    name: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type EntityMaxAggregateOutputType = {
    id: bigint | null
    domainId: bigint | null
    name: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    domainId: number
    name: number
    desc: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    domainId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    domainId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    domainId?: true
    name?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: bigint
    domainId: bigint
    name: string
    desc: string
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    EntityField?: boolean | Entity$EntityFieldArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domainId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    domainId?: boolean
    name?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    EntityField?: boolean | Entity$EntityFieldArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      EntityField: Prisma.$EntityFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      domainId: bigint
      name: string
      desc: string
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
    **/
    create<T extends EntityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityCreateArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EntityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entities and returns the data saved in the database.
     * @param {EntityCreateManyAndReturnArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
    **/
    delete<T extends EntityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
    **/
    upsert<T extends EntityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>
    ): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    EntityField<T extends Entity$EntityFieldArgs<ExtArgs> = {}>(args?: Subset<T, Entity$EntityFieldArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Entity model
   */ 
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'BigInt'>
    readonly domainId: FieldRef<"Entity", 'BigInt'>
    readonly name: FieldRef<"Entity", 'String'>
    readonly desc: FieldRef<"Entity", 'String'>
    readonly versionNum: FieldRef<"Entity", 'BigInt'>
    readonly createBy: FieldRef<"Entity", 'BigInt'>
    readonly createAt: FieldRef<"Entity", 'DateTime'>
    readonly updateBy: FieldRef<"Entity", 'BigInt'>
    readonly updateAt: FieldRef<"Entity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity createManyAndReturn
   */
  export type EntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
  }

  /**
   * Entity.EntityField
   */
  export type Entity$EntityFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    where?: EntityFieldWhereInput
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    cursor?: EntityFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntityFieldScalarFieldEnum | EntityFieldScalarFieldEnum[]
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model EntityField
   */

  export type AggregateEntityField = {
    _count: EntityFieldCountAggregateOutputType | null
    _avg: EntityFieldAvgAggregateOutputType | null
    _sum: EntityFieldSumAggregateOutputType | null
    _min: EntityFieldMinAggregateOutputType | null
    _max: EntityFieldMaxAggregateOutputType | null
  }

  export type EntityFieldAvgAggregateOutputType = {
    id: number | null
    entityId: number | null
    domainId: number | null
    versionNum: number | null
    createBy: number | null
    updateBy: number | null
  }

  export type EntityFieldSumAggregateOutputType = {
    id: bigint | null
    entityId: bigint | null
    domainId: bigint | null
    versionNum: bigint | null
    createBy: bigint | null
    updateBy: bigint | null
  }

  export type EntityFieldMinAggregateOutputType = {
    id: bigint | null
    entityId: bigint | null
    domainId: bigint | null
    name: string | null
    type: string | null
    defaultValue: string | null
    isRequired: boolean | null
    dict: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type EntityFieldMaxAggregateOutputType = {
    id: bigint | null
    entityId: bigint | null
    domainId: bigint | null
    name: string | null
    type: string | null
    defaultValue: string | null
    isRequired: boolean | null
    dict: string | null
    desc: string | null
    versionNum: bigint | null
    createBy: bigint | null
    createAt: Date | null
    updateBy: bigint | null
    updateAt: Date | null
  }

  export type EntityFieldCountAggregateOutputType = {
    id: number
    entityId: number
    domainId: number
    name: number
    type: number
    defaultValue: number
    isRequired: number
    dict: number
    desc: number
    versionNum: number
    createBy: number
    createAt: number
    updateBy: number
    updateAt: number
    _all: number
  }


  export type EntityFieldAvgAggregateInputType = {
    id?: true
    entityId?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type EntityFieldSumAggregateInputType = {
    id?: true
    entityId?: true
    domainId?: true
    versionNum?: true
    createBy?: true
    updateBy?: true
  }

  export type EntityFieldMinAggregateInputType = {
    id?: true
    entityId?: true
    domainId?: true
    name?: true
    type?: true
    defaultValue?: true
    isRequired?: true
    dict?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type EntityFieldMaxAggregateInputType = {
    id?: true
    entityId?: true
    domainId?: true
    name?: true
    type?: true
    defaultValue?: true
    isRequired?: true
    dict?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
  }

  export type EntityFieldCountAggregateInputType = {
    id?: true
    entityId?: true
    domainId?: true
    name?: true
    type?: true
    defaultValue?: true
    isRequired?: true
    dict?: true
    desc?: true
    versionNum?: true
    createBy?: true
    createAt?: true
    updateBy?: true
    updateAt?: true
    _all?: true
  }

  export type EntityFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityField to aggregate.
     */
    where?: EntityFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityFields to fetch.
     */
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntityFields
    **/
    _count?: true | EntityFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntityFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityFieldMaxAggregateInputType
  }

  export type GetEntityFieldAggregateType<T extends EntityFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateEntityField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntityField[P]>
      : GetScalarType<T[P], AggregateEntityField[P]>
  }




  export type EntityFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityFieldWhereInput
    orderBy?: EntityFieldOrderByWithAggregationInput | EntityFieldOrderByWithAggregationInput[]
    by: EntityFieldScalarFieldEnum[] | EntityFieldScalarFieldEnum
    having?: EntityFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityFieldCountAggregateInputType | true
    _avg?: EntityFieldAvgAggregateInputType
    _sum?: EntityFieldSumAggregateInputType
    _min?: EntityFieldMinAggregateInputType
    _max?: EntityFieldMaxAggregateInputType
  }

  export type EntityFieldGroupByOutputType = {
    id: bigint
    entityId: bigint | null
    domainId: bigint | null
    name: string
    type: string
    defaultValue: string | null
    isRequired: boolean
    dict: string | null
    desc: string
    versionNum: bigint
    createBy: bigint
    createAt: Date
    updateBy: bigint
    updateAt: Date
    _count: EntityFieldCountAggregateOutputType | null
    _avg: EntityFieldAvgAggregateOutputType | null
    _sum: EntityFieldSumAggregateOutputType | null
    _min: EntityFieldMinAggregateOutputType | null
    _max: EntityFieldMaxAggregateOutputType | null
  }

  type GetEntityFieldGroupByPayload<T extends EntityFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityFieldGroupByOutputType[P]>
            : GetScalarType<T[P], EntityFieldGroupByOutputType[P]>
        }
      >
    >


  export type EntityFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityId?: boolean
    domainId?: boolean
    name?: boolean
    type?: boolean
    defaultValue?: boolean
    isRequired?: boolean
    dict?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    entity?: boolean | EntityField$entityArgs<ExtArgs>
    domain?: boolean | EntityField$domainArgs<ExtArgs>
  }, ExtArgs["result"]["entityField"]>

  export type EntityFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityId?: boolean
    domainId?: boolean
    name?: boolean
    type?: boolean
    defaultValue?: boolean
    isRequired?: boolean
    dict?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
    entity?: boolean | EntityField$entityArgs<ExtArgs>
    domain?: boolean | EntityField$domainArgs<ExtArgs>
  }, ExtArgs["result"]["entityField"]>

  export type EntityFieldSelectScalar = {
    id?: boolean
    entityId?: boolean
    domainId?: boolean
    name?: boolean
    type?: boolean
    defaultValue?: boolean
    isRequired?: boolean
    dict?: boolean
    desc?: boolean
    versionNum?: boolean
    createBy?: boolean
    createAt?: boolean
    updateBy?: boolean
    updateAt?: boolean
  }

  export type EntityFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityField$entityArgs<ExtArgs>
    domain?: boolean | EntityField$domainArgs<ExtArgs>
  }
  export type EntityFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entity?: boolean | EntityField$entityArgs<ExtArgs>
    domain?: boolean | EntityField$domainArgs<ExtArgs>
  }

  export type $EntityFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntityField"
    objects: {
      entity: Prisma.$EntityPayload<ExtArgs> | null
      domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      entityId: bigint | null
      domainId: bigint | null
      name: string
      type: string
      defaultValue: string | null
      isRequired: boolean
      dict: string | null
      desc: string
      versionNum: bigint
      createBy: bigint
      createAt: Date
      updateBy: bigint
      updateAt: Date
    }, ExtArgs["result"]["entityField"]>
    composites: {}
  }

  type EntityFieldGetPayload<S extends boolean | null | undefined | EntityFieldDefaultArgs> = $Result.GetResult<Prisma.$EntityFieldPayload, S>

  type EntityFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntityFieldFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntityFieldCountAggregateInputType | true
    }

  export interface EntityFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntityField'], meta: { name: 'EntityField' } }
    /**
     * Find zero or one EntityField that matches the filter.
     * @param {EntityFieldFindUniqueArgs} args - Arguments to find a EntityField
     * @example
     * // Get one EntityField
     * const entityField = await prisma.entityField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntityFieldFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldFindUniqueArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EntityField that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntityFieldFindUniqueOrThrowArgs} args - Arguments to find a EntityField
     * @example
     * // Get one EntityField
     * const entityField = await prisma.entityField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntityFieldFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EntityField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldFindFirstArgs} args - Arguments to find a EntityField
     * @example
     * // Get one EntityField
     * const entityField = await prisma.entityField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntityFieldFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldFindFirstArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EntityField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldFindFirstOrThrowArgs} args - Arguments to find a EntityField
     * @example
     * // Get one EntityField
     * const entityField = await prisma.entityField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntityFieldFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EntityFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntityFields
     * const entityFields = await prisma.entityField.findMany()
     * 
     * // Get first 10 EntityFields
     * const entityFields = await prisma.entityField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityFieldWithIdOnly = await prisma.entityField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntityFieldFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EntityField.
     * @param {EntityFieldCreateArgs} args - Arguments to create a EntityField.
     * @example
     * // Create one EntityField
     * const EntityField = await prisma.entityField.create({
     *   data: {
     *     // ... data to create a EntityField
     *   }
     * })
     * 
    **/
    create<T extends EntityFieldCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldCreateArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EntityFields.
     * @param {EntityFieldCreateManyArgs} args - Arguments to create many EntityFields.
     * @example
     * // Create many EntityFields
     * const entityField = await prisma.entityField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EntityFieldCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EntityFields and returns the data saved in the database.
     * @param {EntityFieldCreateManyAndReturnArgs} args - Arguments to create many EntityFields.
     * @example
     * // Create many EntityFields
     * const entityField = await prisma.entityField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EntityFields and only return the `id`
     * const entityFieldWithIdOnly = await prisma.entityField.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends EntityFieldCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a EntityField.
     * @param {EntityFieldDeleteArgs} args - Arguments to delete one EntityField.
     * @example
     * // Delete one EntityField
     * const EntityField = await prisma.entityField.delete({
     *   where: {
     *     // ... filter to delete one EntityField
     *   }
     * })
     * 
    **/
    delete<T extends EntityFieldDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldDeleteArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EntityField.
     * @param {EntityFieldUpdateArgs} args - Arguments to update one EntityField.
     * @example
     * // Update one EntityField
     * const entityField = await prisma.entityField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntityFieldUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldUpdateArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EntityFields.
     * @param {EntityFieldDeleteManyArgs} args - Arguments to filter EntityFields to delete.
     * @example
     * // Delete a few EntityFields
     * const { count } = await prisma.entityField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntityFieldDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntityFieldDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntityFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntityFields
     * const entityField = await prisma.entityField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntityFieldUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntityField.
     * @param {EntityFieldUpsertArgs} args - Arguments to update or create a EntityField.
     * @example
     * // Update or create a EntityField
     * const entityField = await prisma.entityField.upsert({
     *   create: {
     *     // ... data to create a EntityField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntityField we want to update
     *   }
     * })
    **/
    upsert<T extends EntityFieldUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntityFieldUpsertArgs<ExtArgs>>
    ): Prisma__EntityFieldClient<$Result.GetResult<Prisma.$EntityFieldPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EntityFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldCountArgs} args - Arguments to filter EntityFields to count.
     * @example
     * // Count the number of EntityFields
     * const count = await prisma.entityField.count({
     *   where: {
     *     // ... the filter for the EntityFields we want to count
     *   }
     * })
    **/
    count<T extends EntityFieldCountArgs>(
      args?: Subset<T, EntityFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntityField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityFieldAggregateArgs>(args: Subset<T, EntityFieldAggregateArgs>): Prisma.PrismaPromise<GetEntityFieldAggregateType<T>>

    /**
     * Group by EntityField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityFieldGroupByArgs['orderBy'] }
        : { orderBy?: EntityFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntityField model
   */
  readonly fields: EntityFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntityField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entity<T extends EntityField$entityArgs<ExtArgs> = {}>(args?: Subset<T, EntityField$entityArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    domain<T extends EntityField$domainArgs<ExtArgs> = {}>(args?: Subset<T, EntityField$domainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EntityField model
   */ 
  interface EntityFieldFieldRefs {
    readonly id: FieldRef<"EntityField", 'BigInt'>
    readonly entityId: FieldRef<"EntityField", 'BigInt'>
    readonly domainId: FieldRef<"EntityField", 'BigInt'>
    readonly name: FieldRef<"EntityField", 'String'>
    readonly type: FieldRef<"EntityField", 'String'>
    readonly defaultValue: FieldRef<"EntityField", 'String'>
    readonly isRequired: FieldRef<"EntityField", 'Boolean'>
    readonly dict: FieldRef<"EntityField", 'String'>
    readonly desc: FieldRef<"EntityField", 'String'>
    readonly versionNum: FieldRef<"EntityField", 'BigInt'>
    readonly createBy: FieldRef<"EntityField", 'BigInt'>
    readonly createAt: FieldRef<"EntityField", 'DateTime'>
    readonly updateBy: FieldRef<"EntityField", 'BigInt'>
    readonly updateAt: FieldRef<"EntityField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EntityField findUnique
   */
  export type EntityFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter, which EntityField to fetch.
     */
    where: EntityFieldWhereUniqueInput
  }

  /**
   * EntityField findUniqueOrThrow
   */
  export type EntityFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter, which EntityField to fetch.
     */
    where: EntityFieldWhereUniqueInput
  }

  /**
   * EntityField findFirst
   */
  export type EntityFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter, which EntityField to fetch.
     */
    where?: EntityFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityFields to fetch.
     */
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityFields.
     */
    cursor?: EntityFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityFields.
     */
    distinct?: EntityFieldScalarFieldEnum | EntityFieldScalarFieldEnum[]
  }

  /**
   * EntityField findFirstOrThrow
   */
  export type EntityFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter, which EntityField to fetch.
     */
    where?: EntityFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityFields to fetch.
     */
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntityFields.
     */
    cursor?: EntityFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntityFields.
     */
    distinct?: EntityFieldScalarFieldEnum | EntityFieldScalarFieldEnum[]
  }

  /**
   * EntityField findMany
   */
  export type EntityFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter, which EntityFields to fetch.
     */
    where?: EntityFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntityFields to fetch.
     */
    orderBy?: EntityFieldOrderByWithRelationInput | EntityFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntityFields.
     */
    cursor?: EntityFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntityFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntityFields.
     */
    skip?: number
    distinct?: EntityFieldScalarFieldEnum | EntityFieldScalarFieldEnum[]
  }

  /**
   * EntityField create
   */
  export type EntityFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a EntityField.
     */
    data: XOR<EntityFieldCreateInput, EntityFieldUncheckedCreateInput>
  }

  /**
   * EntityField createMany
   */
  export type EntityFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntityFields.
     */
    data: EntityFieldCreateManyInput | EntityFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EntityField createManyAndReturn
   */
  export type EntityFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EntityFields.
     */
    data: EntityFieldCreateManyInput | EntityFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EntityField update
   */
  export type EntityFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a EntityField.
     */
    data: XOR<EntityFieldUpdateInput, EntityFieldUncheckedUpdateInput>
    /**
     * Choose, which EntityField to update.
     */
    where: EntityFieldWhereUniqueInput
  }

  /**
   * EntityField updateMany
   */
  export type EntityFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntityFields.
     */
    data: XOR<EntityFieldUpdateManyMutationInput, EntityFieldUncheckedUpdateManyInput>
    /**
     * Filter which EntityFields to update
     */
    where?: EntityFieldWhereInput
  }

  /**
   * EntityField upsert
   */
  export type EntityFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the EntityField to update in case it exists.
     */
    where: EntityFieldWhereUniqueInput
    /**
     * In case the EntityField found by the `where` argument doesn't exist, create a new EntityField with this data.
     */
    create: XOR<EntityFieldCreateInput, EntityFieldUncheckedCreateInput>
    /**
     * In case the EntityField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityFieldUpdateInput, EntityFieldUncheckedUpdateInput>
  }

  /**
   * EntityField delete
   */
  export type EntityFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
    /**
     * Filter which EntityField to delete.
     */
    where: EntityFieldWhereUniqueInput
  }

  /**
   * EntityField deleteMany
   */
  export type EntityFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntityFields to delete
     */
    where?: EntityFieldWhereInput
  }

  /**
   * EntityField.entity
   */
  export type EntityField$entityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
  }

  /**
   * EntityField.domain
   */
  export type EntityField$domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * EntityField without action
   */
  export type EntityFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityField
     */
    select?: EntityFieldSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityFieldInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
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

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const MenuScalarFieldEnum: {
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

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const RoleMenuScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    menuId: 'menuId',
    createBy: 'createBy',
    createAt: 'createAt',
    updateBy: 'updateBy',
    updateAt: 'updateAt'
  };

  export type RoleMenuScalarFieldEnum = (typeof RoleMenuScalarFieldEnum)[keyof typeof RoleMenuScalarFieldEnum]


  export const RoleUserScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    userId: 'userId',
    createBy: 'createBy',
    createAt: 'createAt',
    updateBy: 'updateBy',
    updateAt: 'updateAt'
  };

  export type RoleUserScalarFieldEnum = (typeof RoleUserScalarFieldEnum)[keyof typeof RoleUserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const DomainScalarFieldEnum: {
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

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const ProductFeatureScalarFieldEnum: {
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

  export type ProductFeatureScalarFieldEnum = (typeof ProductFeatureScalarFieldEnum)[keyof typeof ProductFeatureScalarFieldEnum]


  export const EntityScalarFieldEnum: {
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

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const EntityFieldScalarFieldEnum: {
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

  export type EntityFieldScalarFieldEnum = (typeof EntityFieldScalarFieldEnum)[keyof typeof EntityFieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    username?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    lang?: StringFilter<"User"> | string
    locale?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    sex?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    effectiveStartDate?: DateTimeFilter<"User"> | Date | string
    effectiveEndDate?: DateTimeNullableFilter<"User"> | Date | string | null
    activedFlag?: BoolFilter<"User"> | boolean
    lockedTime?: DateTimeNullableFilter<"User"> | Date | string | null
    enabledFlag?: BoolFilter<"User"> | boolean
    versionNum?: BigIntFilter<"User"> | bigint | number
    createBy?: BigIntFilter<"User"> | bigint | number
    createAt?: DateTimeFilter<"User"> | Date | string
    updateBy?: BigIntFilter<"User"> | bigint | number
    updateAt?: DateTimeFilter<"User"> | Date | string
    roleUsers?: RoleUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    lang?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    effectiveStartDate?: SortOrder
    effectiveEndDate?: SortOrderInput | SortOrder
    activedFlag?: SortOrder
    lockedTime?: SortOrderInput | SortOrder
    enabledFlag?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    roleUsers?: RoleUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    username?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    lang?: StringFilter<"User"> | string
    locale?: StringFilter<"User"> | string
    sex?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    effectiveStartDate?: DateTimeFilter<"User"> | Date | string
    effectiveEndDate?: DateTimeNullableFilter<"User"> | Date | string | null
    activedFlag?: BoolFilter<"User"> | boolean
    lockedTime?: DateTimeNullableFilter<"User"> | Date | string | null
    enabledFlag?: BoolFilter<"User"> | boolean
    versionNum?: BigIntFilter<"User"> | bigint | number
    createBy?: BigIntFilter<"User"> | bigint | number
    createAt?: DateTimeFilter<"User"> | Date | string
    updateBy?: BigIntFilter<"User"> | bigint | number
    updateAt?: DateTimeFilter<"User"> | Date | string
    roleUsers?: RoleUserListRelationFilter
  }, "id" | "username" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    lang?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    effectiveStartDate?: SortOrder
    effectiveEndDate?: SortOrderInput | SortOrder
    activedFlag?: SortOrder
    lockedTime?: SortOrderInput | SortOrder
    enabledFlag?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    lang?: StringWithAggregatesFilter<"User"> | string
    locale?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    sex?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    effectiveStartDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    effectiveEndDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    activedFlag?: BoolWithAggregatesFilter<"User"> | boolean
    lockedTime?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    enabledFlag?: BoolWithAggregatesFilter<"User"> | boolean
    versionNum?: BigIntWithAggregatesFilter<"User"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"User"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"User"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: BigIntFilter<"Role"> | bigint | number
    roleCode?: StringFilter<"Role"> | string
    roleName?: StringFilter<"Role"> | string
    enabledFlag?: BoolFilter<"Role"> | boolean
    remark?: StringNullableFilter<"Role"> | string | null
    versionNum?: BigIntFilter<"Role"> | bigint | number
    createBy?: BigIntFilter<"Role"> | bigint | number
    createAt?: DateTimeFilter<"Role"> | Date | string
    updateBy?: BigIntFilter<"Role"> | bigint | number
    updateAt?: DateTimeFilter<"Role"> | Date | string
    roleMenus?: RoleMenuListRelationFilter
    roleUsers?: RoleUserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    roleCode?: SortOrder
    roleName?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    roleMenus?: RoleMenuOrderByRelationAggregateInput
    roleUsers?: RoleUserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleCode?: StringFilter<"Role"> | string
    roleName?: StringFilter<"Role"> | string
    enabledFlag?: BoolFilter<"Role"> | boolean
    remark?: StringNullableFilter<"Role"> | string | null
    versionNum?: BigIntFilter<"Role"> | bigint | number
    createBy?: BigIntFilter<"Role"> | bigint | number
    createAt?: DateTimeFilter<"Role"> | Date | string
    updateBy?: BigIntFilter<"Role"> | bigint | number
    updateAt?: DateTimeFilter<"Role"> | Date | string
    roleMenus?: RoleMenuListRelationFilter
    roleUsers?: RoleUserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    roleCode?: SortOrder
    roleName?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    roleCode?: StringWithAggregatesFilter<"Role"> | string
    roleName?: StringWithAggregatesFilter<"Role"> | string
    enabledFlag?: BoolWithAggregatesFilter<"Role"> | boolean
    remark?: StringNullableWithAggregatesFilter<"Role"> | string | null
    versionNum?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: BigIntFilter<"Menu"> | bigint | number
    menuCode?: StringFilter<"Menu"> | string
    menuName?: StringFilter<"Menu"> | string
    menuType?: StringFilter<"Menu"> | string
    pid?: BigIntFilter<"Menu"> | bigint | number
    icon?: StringNullableFilter<"Menu"> | string | null
    route?: StringNullableFilter<"Menu"> | string | null
    menuSort?: IntFilter<"Menu"> | number
    enabledFlag?: BoolFilter<"Menu"> | boolean
    remark?: StringNullableFilter<"Menu"> | string | null
    versionNum?: BigIntFilter<"Menu"> | bigint | number
    createBy?: BigIntFilter<"Menu"> | bigint | number
    createAt?: DateTimeFilter<"Menu"> | Date | string
    updateBy?: BigIntFilter<"Menu"> | bigint | number
    updateAt?: DateTimeFilter<"Menu"> | Date | string
    RoleMenu?: RoleMenuListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    menuCode?: SortOrder
    menuName?: SortOrder
    menuType?: SortOrder
    pid?: SortOrder
    icon?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    menuSort?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    RoleMenu?: RoleMenuOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    menuCode?: StringFilter<"Menu"> | string
    menuName?: StringFilter<"Menu"> | string
    menuType?: StringFilter<"Menu"> | string
    pid?: BigIntFilter<"Menu"> | bigint | number
    icon?: StringNullableFilter<"Menu"> | string | null
    route?: StringNullableFilter<"Menu"> | string | null
    menuSort?: IntFilter<"Menu"> | number
    enabledFlag?: BoolFilter<"Menu"> | boolean
    remark?: StringNullableFilter<"Menu"> | string | null
    versionNum?: BigIntFilter<"Menu"> | bigint | number
    createBy?: BigIntFilter<"Menu"> | bigint | number
    createAt?: DateTimeFilter<"Menu"> | Date | string
    updateBy?: BigIntFilter<"Menu"> | bigint | number
    updateAt?: DateTimeFilter<"Menu"> | Date | string
    RoleMenu?: RoleMenuListRelationFilter
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    menuCode?: SortOrder
    menuName?: SortOrder
    menuType?: SortOrder
    pid?: SortOrder
    icon?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    menuSort?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    menuCode?: StringWithAggregatesFilter<"Menu"> | string
    menuName?: StringWithAggregatesFilter<"Menu"> | string
    menuType?: StringWithAggregatesFilter<"Menu"> | string
    pid?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    icon?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    route?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    menuSort?: IntWithAggregatesFilter<"Menu"> | number
    enabledFlag?: BoolWithAggregatesFilter<"Menu"> | boolean
    remark?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    versionNum?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"Menu"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type RoleMenuWhereInput = {
    AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
    OR?: RoleMenuWhereInput[]
    NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
    id?: BigIntFilter<"RoleMenu"> | bigint | number
    roleId?: BigIntFilter<"RoleMenu"> | bigint | number
    menuId?: BigIntFilter<"RoleMenu"> | bigint | number
    createBy?: BigIntFilter<"RoleMenu"> | bigint | number
    createAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updateBy?: BigIntFilter<"RoleMenu"> | bigint | number
    updateAt?: DateTimeFilter<"RoleMenu"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type RoleMenuOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type RoleMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    roleId_menuId?: RoleMenuRoleIdMenuIdCompoundUniqueInput
    AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
    OR?: RoleMenuWhereInput[]
    NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
    roleId?: BigIntFilter<"RoleMenu"> | bigint | number
    menuId?: BigIntFilter<"RoleMenu"> | bigint | number
    createBy?: BigIntFilter<"RoleMenu"> | bigint | number
    createAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updateBy?: BigIntFilter<"RoleMenu"> | bigint | number
    updateAt?: DateTimeFilter<"RoleMenu"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "id" | "roleId_menuId">

  export type RoleMenuOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: RoleMenuCountOrderByAggregateInput
    _avg?: RoleMenuAvgOrderByAggregateInput
    _max?: RoleMenuMaxOrderByAggregateInput
    _min?: RoleMenuMinOrderByAggregateInput
    _sum?: RoleMenuSumOrderByAggregateInput
  }

  export type RoleMenuScalarWhereWithAggregatesInput = {
    AND?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    OR?: RoleMenuScalarWhereWithAggregatesInput[]
    NOT?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RoleMenu"> | bigint | number
    roleId?: BigIntWithAggregatesFilter<"RoleMenu"> | bigint | number
    menuId?: BigIntWithAggregatesFilter<"RoleMenu"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"RoleMenu"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"RoleMenu"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"RoleMenu"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"RoleMenu"> | Date | string
  }

  export type RoleUserWhereInput = {
    AND?: RoleUserWhereInput | RoleUserWhereInput[]
    OR?: RoleUserWhereInput[]
    NOT?: RoleUserWhereInput | RoleUserWhereInput[]
    id?: BigIntFilter<"RoleUser"> | bigint | number
    roleId?: BigIntFilter<"RoleUser"> | bigint | number
    userId?: BigIntFilter<"RoleUser"> | bigint | number
    createBy?: BigIntFilter<"RoleUser"> | bigint | number
    createAt?: DateTimeFilter<"RoleUser"> | Date | string
    updateBy?: BigIntFilter<"RoleUser"> | bigint | number
    updateAt?: DateTimeFilter<"RoleUser"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RoleUserOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoleUserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    roleId_userId?: RoleUserRoleIdUserIdCompoundUniqueInput
    AND?: RoleUserWhereInput | RoleUserWhereInput[]
    OR?: RoleUserWhereInput[]
    NOT?: RoleUserWhereInput | RoleUserWhereInput[]
    roleId?: BigIntFilter<"RoleUser"> | bigint | number
    userId?: BigIntFilter<"RoleUser"> | bigint | number
    createBy?: BigIntFilter<"RoleUser"> | bigint | number
    createAt?: DateTimeFilter<"RoleUser"> | Date | string
    updateBy?: BigIntFilter<"RoleUser"> | bigint | number
    updateAt?: DateTimeFilter<"RoleUser"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "roleId_userId">

  export type RoleUserOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: RoleUserCountOrderByAggregateInput
    _avg?: RoleUserAvgOrderByAggregateInput
    _max?: RoleUserMaxOrderByAggregateInput
    _min?: RoleUserMinOrderByAggregateInput
    _sum?: RoleUserSumOrderByAggregateInput
  }

  export type RoleUserScalarWhereWithAggregatesInput = {
    AND?: RoleUserScalarWhereWithAggregatesInput | RoleUserScalarWhereWithAggregatesInput[]
    OR?: RoleUserScalarWhereWithAggregatesInput[]
    NOT?: RoleUserScalarWhereWithAggregatesInput | RoleUserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RoleUser"> | bigint | number
    roleId?: BigIntWithAggregatesFilter<"RoleUser"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"RoleUser"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"RoleUser"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"RoleUser"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"RoleUser"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"RoleUser"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: BigIntFilter<"Product"> | bigint | number
    code?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    desc?: StringNullableFilter<"Product"> | string | null
    data?: BytesNullableFilter<"Product"> | Buffer | null
    versionNum?: BigIntFilter<"Product"> | bigint | number
    createBy?: BigIntFilter<"Product"> | bigint | number
    createAt?: DateTimeFilter<"Product"> | Date | string
    updateBy?: BigIntFilter<"Product"> | bigint | number
    updateAt?: DateTimeFilter<"Product"> | Date | string
    domains?: DomainListRelationFilter
    productFeatures?: ProductFeatureListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    domains?: DomainOrderByRelationAggregateInput
    productFeatures?: ProductFeatureOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    code?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    desc?: StringNullableFilter<"Product"> | string | null
    data?: BytesNullableFilter<"Product"> | Buffer | null
    versionNum?: BigIntFilter<"Product"> | bigint | number
    createBy?: BigIntFilter<"Product"> | bigint | number
    createAt?: DateTimeFilter<"Product"> | Date | string
    updateBy?: BigIntFilter<"Product"> | bigint | number
    updateAt?: DateTimeFilter<"Product"> | Date | string
    domains?: DomainListRelationFilter
    productFeatures?: ProductFeatureListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    code?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    data?: BytesNullableWithAggregatesFilter<"Product"> | Buffer | null
    versionNum?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"Product"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: BigIntFilter<"Domain"> | bigint | number
    productId?: BigIntNullableFilter<"Domain"> | bigint | number | null
    name?: StringFilter<"Domain"> | string
    desc?: StringNullableFilter<"Domain"> | string | null
    versionNum?: BigIntFilter<"Domain"> | bigint | number
    createBy?: BigIntFilter<"Domain"> | bigint | number
    createAt?: DateTimeFilter<"Domain"> | Date | string
    updateBy?: BigIntFilter<"Domain"> | bigint | number
    updateAt?: DateTimeFilter<"Domain"> | Date | string
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    productFeatures?: ProductFeatureListRelationFilter
    Entity?: EntityListRelationFilter
    EntityField?: EntityFieldListRelationFilter
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    productFeatures?: ProductFeatureOrderByRelationAggregateInput
    Entity?: EntityOrderByRelationAggregateInput
    EntityField?: EntityFieldOrderByRelationAggregateInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    productId?: BigIntNullableFilter<"Domain"> | bigint | number | null
    name?: StringFilter<"Domain"> | string
    desc?: StringNullableFilter<"Domain"> | string | null
    versionNum?: BigIntFilter<"Domain"> | bigint | number
    createBy?: BigIntFilter<"Domain"> | bigint | number
    createAt?: DateTimeFilter<"Domain"> | Date | string
    updateBy?: BigIntFilter<"Domain"> | bigint | number
    updateAt?: DateTimeFilter<"Domain"> | Date | string
    product?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    productFeatures?: ProductFeatureListRelationFilter
    Entity?: EntityListRelationFilter
    EntityField?: EntityFieldListRelationFilter
  }, "id">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    name?: SortOrder
    desc?: SortOrderInput | SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _avg?: DomainAvgOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
    _sum?: DomainSumOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Domain"> | bigint | number
    productId?: BigIntNullableWithAggregatesFilter<"Domain"> | bigint | number | null
    name?: StringWithAggregatesFilter<"Domain"> | string
    desc?: StringNullableWithAggregatesFilter<"Domain"> | string | null
    versionNum?: BigIntWithAggregatesFilter<"Domain"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"Domain"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"Domain"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
  }

  export type ProductFeatureWhereInput = {
    AND?: ProductFeatureWhereInput | ProductFeatureWhereInput[]
    OR?: ProductFeatureWhereInput[]
    NOT?: ProductFeatureWhereInput | ProductFeatureWhereInput[]
    id?: BigIntFilter<"ProductFeature"> | bigint | number
    productId?: BigIntFilter<"ProductFeature"> | bigint | number
    domainId?: BigIntNullableFilter<"ProductFeature"> | bigint | number | null
    title?: StringFilter<"ProductFeature"> | string
    desc?: StringNullableFilter<"ProductFeature"> | string | null
    event?: StringFilter<"ProductFeature"> | string
    command?: StringFilter<"ProductFeature"> | string
    role?: StringFilter<"ProductFeature"> | string
    versionNum?: BigIntFilter<"ProductFeature"> | bigint | number
    createBy?: BigIntFilter<"ProductFeature"> | bigint | number
    createAt?: DateTimeFilter<"ProductFeature"> | Date | string
    updateBy?: BigIntFilter<"ProductFeature"> | bigint | number
    updateAt?: DateTimeFilter<"ProductFeature"> | Date | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
  }

  export type ProductFeatureOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrderInput | SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    event?: SortOrder
    command?: SortOrder
    role?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    Product?: ProductOrderByWithRelationInput
    domain?: DomainOrderByWithRelationInput
  }

  export type ProductFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProductFeatureWhereInput | ProductFeatureWhereInput[]
    OR?: ProductFeatureWhereInput[]
    NOT?: ProductFeatureWhereInput | ProductFeatureWhereInput[]
    productId?: BigIntFilter<"ProductFeature"> | bigint | number
    domainId?: BigIntNullableFilter<"ProductFeature"> | bigint | number | null
    title?: StringFilter<"ProductFeature"> | string
    desc?: StringNullableFilter<"ProductFeature"> | string | null
    event?: StringFilter<"ProductFeature"> | string
    command?: StringFilter<"ProductFeature"> | string
    role?: StringFilter<"ProductFeature"> | string
    versionNum?: BigIntFilter<"ProductFeature"> | bigint | number
    createBy?: BigIntFilter<"ProductFeature"> | bigint | number
    createAt?: DateTimeFilter<"ProductFeature"> | Date | string
    updateBy?: BigIntFilter<"ProductFeature"> | bigint | number
    updateAt?: DateTimeFilter<"ProductFeature"> | Date | string
    Product?: XOR<ProductRelationFilter, ProductWhereInput>
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
  }, "id">

  export type ProductFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrderInput | SortOrder
    title?: SortOrder
    desc?: SortOrderInput | SortOrder
    event?: SortOrder
    command?: SortOrder
    role?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: ProductFeatureCountOrderByAggregateInput
    _avg?: ProductFeatureAvgOrderByAggregateInput
    _max?: ProductFeatureMaxOrderByAggregateInput
    _min?: ProductFeatureMinOrderByAggregateInput
    _sum?: ProductFeatureSumOrderByAggregateInput
  }

  export type ProductFeatureScalarWhereWithAggregatesInput = {
    AND?: ProductFeatureScalarWhereWithAggregatesInput | ProductFeatureScalarWhereWithAggregatesInput[]
    OR?: ProductFeatureScalarWhereWithAggregatesInput[]
    NOT?: ProductFeatureScalarWhereWithAggregatesInput | ProductFeatureScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ProductFeature"> | bigint | number
    productId?: BigIntWithAggregatesFilter<"ProductFeature"> | bigint | number
    domainId?: BigIntNullableWithAggregatesFilter<"ProductFeature"> | bigint | number | null
    title?: StringWithAggregatesFilter<"ProductFeature"> | string
    desc?: StringNullableWithAggregatesFilter<"ProductFeature"> | string | null
    event?: StringWithAggregatesFilter<"ProductFeature"> | string
    command?: StringWithAggregatesFilter<"ProductFeature"> | string
    role?: StringWithAggregatesFilter<"ProductFeature"> | string
    versionNum?: BigIntWithAggregatesFilter<"ProductFeature"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"ProductFeature"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"ProductFeature"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"ProductFeature"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"ProductFeature"> | Date | string
  }

  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: BigIntFilter<"Entity"> | bigint | number
    domainId?: BigIntFilter<"Entity"> | bigint | number
    name?: StringFilter<"Entity"> | string
    desc?: StringFilter<"Entity"> | string
    versionNum?: BigIntFilter<"Entity"> | bigint | number
    createBy?: BigIntFilter<"Entity"> | bigint | number
    createAt?: DateTimeFilter<"Entity"> | Date | string
    updateBy?: BigIntFilter<"Entity"> | bigint | number
    updateAt?: DateTimeFilter<"Entity"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    EntityField?: EntityFieldListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    domain?: DomainOrderByWithRelationInput
    EntityField?: EntityFieldOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    domainId?: BigIntFilter<"Entity"> | bigint | number
    name?: StringFilter<"Entity"> | string
    desc?: StringFilter<"Entity"> | string
    versionNum?: BigIntFilter<"Entity"> | bigint | number
    createBy?: BigIntFilter<"Entity"> | bigint | number
    createAt?: DateTimeFilter<"Entity"> | Date | string
    updateBy?: BigIntFilter<"Entity"> | bigint | number
    updateAt?: DateTimeFilter<"Entity"> | Date | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    EntityField?: EntityFieldListRelationFilter
  }, "id">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: EntityCountOrderByAggregateInput
    _avg?: EntityAvgOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
    _sum?: EntitySumOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Entity"> | bigint | number
    domainId?: BigIntWithAggregatesFilter<"Entity"> | bigint | number
    name?: StringWithAggregatesFilter<"Entity"> | string
    desc?: StringWithAggregatesFilter<"Entity"> | string
    versionNum?: BigIntWithAggregatesFilter<"Entity"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"Entity"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"Entity"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"Entity"> | Date | string
  }

  export type EntityFieldWhereInput = {
    AND?: EntityFieldWhereInput | EntityFieldWhereInput[]
    OR?: EntityFieldWhereInput[]
    NOT?: EntityFieldWhereInput | EntityFieldWhereInput[]
    id?: BigIntFilter<"EntityField"> | bigint | number
    entityId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    domainId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    name?: StringFilter<"EntityField"> | string
    type?: StringFilter<"EntityField"> | string
    defaultValue?: StringNullableFilter<"EntityField"> | string | null
    isRequired?: BoolFilter<"EntityField"> | boolean
    dict?: StringNullableFilter<"EntityField"> | string | null
    desc?: StringFilter<"EntityField"> | string
    versionNum?: BigIntFilter<"EntityField"> | bigint | number
    createBy?: BigIntFilter<"EntityField"> | bigint | number
    createAt?: DateTimeFilter<"EntityField"> | Date | string
    updateBy?: BigIntFilter<"EntityField"> | bigint | number
    updateAt?: DateTimeFilter<"EntityField"> | Date | string
    entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
  }

  export type EntityFieldOrderByWithRelationInput = {
    id?: SortOrder
    entityId?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    dict?: SortOrderInput | SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    entity?: EntityOrderByWithRelationInput
    domain?: DomainOrderByWithRelationInput
  }

  export type EntityFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EntityFieldWhereInput | EntityFieldWhereInput[]
    OR?: EntityFieldWhereInput[]
    NOT?: EntityFieldWhereInput | EntityFieldWhereInput[]
    entityId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    domainId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    name?: StringFilter<"EntityField"> | string
    type?: StringFilter<"EntityField"> | string
    defaultValue?: StringNullableFilter<"EntityField"> | string | null
    isRequired?: BoolFilter<"EntityField"> | boolean
    dict?: StringNullableFilter<"EntityField"> | string | null
    desc?: StringFilter<"EntityField"> | string
    versionNum?: BigIntFilter<"EntityField"> | bigint | number
    createBy?: BigIntFilter<"EntityField"> | bigint | number
    createAt?: DateTimeFilter<"EntityField"> | Date | string
    updateBy?: BigIntFilter<"EntityField"> | bigint | number
    updateAt?: DateTimeFilter<"EntityField"> | Date | string
    entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
  }, "id">

  export type EntityFieldOrderByWithAggregationInput = {
    id?: SortOrder
    entityId?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    isRequired?: SortOrder
    dict?: SortOrderInput | SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
    _count?: EntityFieldCountOrderByAggregateInput
    _avg?: EntityFieldAvgOrderByAggregateInput
    _max?: EntityFieldMaxOrderByAggregateInput
    _min?: EntityFieldMinOrderByAggregateInput
    _sum?: EntityFieldSumOrderByAggregateInput
  }

  export type EntityFieldScalarWhereWithAggregatesInput = {
    AND?: EntityFieldScalarWhereWithAggregatesInput | EntityFieldScalarWhereWithAggregatesInput[]
    OR?: EntityFieldScalarWhereWithAggregatesInput[]
    NOT?: EntityFieldScalarWhereWithAggregatesInput | EntityFieldScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"EntityField"> | bigint | number
    entityId?: BigIntNullableWithAggregatesFilter<"EntityField"> | bigint | number | null
    domainId?: BigIntNullableWithAggregatesFilter<"EntityField"> | bigint | number | null
    name?: StringWithAggregatesFilter<"EntityField"> | string
    type?: StringWithAggregatesFilter<"EntityField"> | string
    defaultValue?: StringNullableWithAggregatesFilter<"EntityField"> | string | null
    isRequired?: BoolWithAggregatesFilter<"EntityField"> | boolean
    dict?: StringNullableWithAggregatesFilter<"EntityField"> | string | null
    desc?: StringWithAggregatesFilter<"EntityField"> | string
    versionNum?: BigIntWithAggregatesFilter<"EntityField"> | bigint | number
    createBy?: BigIntWithAggregatesFilter<"EntityField"> | bigint | number
    createAt?: DateTimeWithAggregatesFilter<"EntityField"> | Date | string
    updateBy?: BigIntWithAggregatesFilter<"EntityField"> | bigint | number
    updateAt?: DateTimeWithAggregatesFilter<"EntityField"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    username: string
    displayName: string
    lang: string
    locale: string
    email: string
    phone: string
    sex: string
    avatar?: string | null
    password: string
    effectiveStartDate?: Date | string
    effectiveEndDate?: Date | string | null
    activedFlag?: boolean
    lockedTime?: Date | string | null
    enabledFlag?: boolean
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleUsers?: RoleUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    username: string
    displayName: string
    lang: string
    locale: string
    email: string
    phone: string
    sex: string
    avatar?: string | null
    password: string
    effectiveStartDate?: Date | string
    effectiveEndDate?: Date | string | null
    activedFlag?: boolean
    lockedTime?: Date | string | null
    enabledFlag?: boolean
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleUsers?: RoleUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleUsers?: RoleUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleUsers?: RoleUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    username: string
    displayName: string
    lang: string
    locale: string
    email: string
    phone: string
    sex: string
    avatar?: string | null
    password: string
    effectiveStartDate?: Date | string
    effectiveEndDate?: Date | string | null
    activedFlag?: boolean
    lockedTime?: Date | string | null
    enabledFlag?: boolean
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleMenus?: RoleMenuCreateNestedManyWithoutRoleInput
    roleUsers?: RoleUserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
    roleUsers?: RoleUserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleMenus?: RoleMenuUpdateManyWithoutRoleNestedInput
    roleUsers?: RoleUserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
    roleUsers?: RoleUserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    id?: bigint | number
    menuCode: string
    menuName: string
    menuType: string
    pid?: bigint | number
    icon?: string | null
    route?: string | null
    menuSort?: number
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    RoleMenu?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: bigint | number
    menuCode: string
    menuName: string
    menuType: string
    pid?: bigint | number
    icon?: string | null
    route?: string | null
    menuSort?: number
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    RoleMenu?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleMenu?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoleMenu?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: bigint | number
    menuCode: string
    menuName: string
    menuType: string
    pid?: bigint | number
    icon?: string | null
    route?: string | null
    menuSort?: number
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleMenusInput
    menu: MenuCreateNestedOneWithoutRoleMenuInput
  }

  export type RoleMenuUncheckedCreateInput = {
    id?: bigint | number
    roleId: bigint | number
    menuId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleMenusNestedInput
    menu?: MenuUpdateOneRequiredWithoutRoleMenuNestedInput
  }

  export type RoleMenuUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateManyInput = {
    id?: bigint | number
    roleId: bigint | number
    menuId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserCreateInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleUsersInput
    user: UserCreateNestedOneWithoutRoleUsersInput
  }

  export type RoleUserUncheckedCreateInput = {
    id?: bigint | number
    roleId: bigint | number
    userId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleUsersNestedInput
    user?: UserUpdateOneRequiredWithoutRoleUsersNestedInput
  }

  export type RoleUserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserCreateManyInput = {
    id?: bigint | number
    roleId: bigint | number
    userId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domains?: DomainCreateNestedManyWithoutProductInput
    productFeatures?: ProductFeatureCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutProductInput
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutProductNestedInput
    productFeatures?: ProductFeatureUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutProductNestedInput
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    product?: ProductCreateNestedOneWithoutDomainsInput
    productFeatures?: ProductFeatureCreateNestedManyWithoutDomainInput
    Entity?: EntityCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id?: bigint | number
    productId?: bigint | number | null
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutDomainInput
    Entity?: EntityUncheckedCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutDomainsNestedInput
    productFeatures?: ProductFeatureUpdateManyWithoutDomainNestedInput
    Entity?: EntityUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutDomainNestedInput
    Entity?: EntityUncheckedUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: bigint | number
    productId?: bigint | number | null
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type DomainUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureCreateInput = {
    id?: bigint | number
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    Product: ProductCreateNestedOneWithoutProductFeaturesInput
    domain?: DomainCreateNestedOneWithoutProductFeaturesInput
  }

  export type ProductFeatureUncheckedCreateInput = {
    id?: bigint | number
    productId: bigint | number
    domainId?: bigint | number | null
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutProductFeaturesNestedInput
    domain?: DomainUpdateOneWithoutProductFeaturesNestedInput
  }

  export type ProductFeatureUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureCreateManyInput = {
    id?: bigint | number
    productId: bigint | number
    domainId?: bigint | number | null
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityCreateInput = {
    id?: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domain: DomainCreateNestedOneWithoutEntityInput
    EntityField?: EntityFieldCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: bigint | number
    domainId: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutEntityNestedInput
    EntityField?: EntityFieldUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EntityField?: EntityFieldUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: bigint | number
    domainId: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldCreateInput = {
    id?: bigint | number
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    entity?: EntityCreateNestedOneWithoutEntityFieldInput
    domain?: DomainCreateNestedOneWithoutEntityFieldInput
  }

  export type EntityFieldUncheckedCreateInput = {
    id?: bigint | number
    entityId?: bigint | number | null
    domainId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneWithoutEntityFieldNestedInput
    domain?: DomainUpdateOneWithoutEntityFieldNestedInput
  }

  export type EntityFieldUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldCreateManyInput = {
    id?: bigint | number
    entityId?: bigint | number | null
    domainId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleUserListRelationFilter = {
    every?: RoleUserWhereInput
    some?: RoleUserWhereInput
    none?: RoleUserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    lang?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    effectiveStartDate?: SortOrder
    effectiveEndDate?: SortOrder
    activedFlag?: SortOrder
    lockedTime?: SortOrder
    enabledFlag?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    lang?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    effectiveStartDate?: SortOrder
    effectiveEndDate?: SortOrder
    activedFlag?: SortOrder
    lockedTime?: SortOrder
    enabledFlag?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    lang?: SortOrder
    locale?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    effectiveStartDate?: SortOrder
    effectiveEndDate?: SortOrder
    activedFlag?: SortOrder
    lockedTime?: SortOrder
    enabledFlag?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleMenuListRelationFilter = {
    every?: RoleMenuWhereInput
    some?: RoleMenuWhereInput
    none?: RoleMenuWhereInput
  }

  export type RoleMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    roleCode?: SortOrder
    roleName?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    roleCode?: SortOrder
    roleName?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    roleCode?: SortOrder
    roleName?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    menuCode?: SortOrder
    menuName?: SortOrder
    menuType?: SortOrder
    pid?: SortOrder
    icon?: SortOrder
    route?: SortOrder
    menuSort?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    menuSort?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    menuCode?: SortOrder
    menuName?: SortOrder
    menuType?: SortOrder
    pid?: SortOrder
    icon?: SortOrder
    route?: SortOrder
    menuSort?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    menuCode?: SortOrder
    menuName?: SortOrder
    menuType?: SortOrder
    pid?: SortOrder
    icon?: SortOrder
    route?: SortOrder
    menuSort?: SortOrder
    enabledFlag?: SortOrder
    remark?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    pid?: SortOrder
    menuSort?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type RoleMenuRoleIdMenuIdCompoundUniqueInput = {
    roleId: bigint | number
    menuId: bigint | number
  }

  export type RoleMenuCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type RoleMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleMenuMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleMenuSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    menuId?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleUserRoleIdUserIdCompoundUniqueInput = {
    roleId: bigint | number
    userId: bigint | number
  }

  export type RoleUserCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleUserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type RoleUserMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleUserMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type RoleUserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    userId?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type ProductFeatureListRelationFilter = {
    every?: ProductFeatureWhereInput
    some?: ProductFeatureWhereInput
    none?: ProductFeatureWhereInput
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    data?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    data?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    data?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type EntityListRelationFilter = {
    every?: EntityWhereInput
    some?: EntityWhereInput
    none?: EntityWhereInput
  }

  export type EntityFieldListRelationFilter = {
    every?: EntityFieldWhereInput
    some?: EntityFieldWhereInput
    none?: EntityFieldWhereInput
  }

  export type EntityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntityFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type DomainAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type DomainSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type DomainNullableRelationFilter = {
    is?: DomainWhereInput | null
    isNot?: DomainWhereInput | null
  }

  export type ProductFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    event?: SortOrder
    command?: SortOrder
    role?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFeatureAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type ProductFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    event?: SortOrder
    command?: SortOrder
    role?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    event?: SortOrder
    command?: SortOrder
    role?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type ProductFeatureSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type DomainRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type EntityNullableRelationFilter = {
    is?: EntityWhereInput | null
    isNot?: EntityWhereInput | null
  }

  export type EntityFieldCountOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    defaultValue?: SortOrder
    isRequired?: SortOrder
    dict?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntityFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type EntityFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    defaultValue?: SortOrder
    isRequired?: SortOrder
    dict?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntityFieldMinOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    domainId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    defaultValue?: SortOrder
    isRequired?: SortOrder
    dict?: SortOrder
    desc?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    createAt?: SortOrder
    updateBy?: SortOrder
    updateAt?: SortOrder
  }

  export type EntityFieldSumOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    domainId?: SortOrder
    versionNum?: SortOrder
    createBy?: SortOrder
    updateBy?: SortOrder
  }

  export type RoleUserCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput> | RoleUserCreateWithoutUserInput[] | RoleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutUserInput | RoleUserCreateOrConnectWithoutUserInput[]
    createMany?: RoleUserCreateManyUserInputEnvelope
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
  }

  export type RoleUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput> | RoleUserCreateWithoutUserInput[] | RoleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutUserInput | RoleUserCreateOrConnectWithoutUserInput[]
    createMany?: RoleUserCreateManyUserInputEnvelope
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput> | RoleUserCreateWithoutUserInput[] | RoleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutUserInput | RoleUserCreateOrConnectWithoutUserInput[]
    upsert?: RoleUserUpsertWithWhereUniqueWithoutUserInput | RoleUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleUserCreateManyUserInputEnvelope
    set?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    disconnect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    delete?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    update?: RoleUserUpdateWithWhereUniqueWithoutUserInput | RoleUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUserUpdateManyWithWhereWithoutUserInput | RoleUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
  }

  export type RoleUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput> | RoleUserCreateWithoutUserInput[] | RoleUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutUserInput | RoleUserCreateOrConnectWithoutUserInput[]
    upsert?: RoleUserUpsertWithWhereUniqueWithoutUserInput | RoleUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleUserCreateManyUserInputEnvelope
    set?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    disconnect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    delete?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    update?: RoleUserUpdateWithWhereUniqueWithoutUserInput | RoleUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUserUpdateManyWithWhereWithoutUserInput | RoleUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
  }

  export type RoleMenuCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type RoleUserCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput> | RoleUserCreateWithoutRoleInput[] | RoleUserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutRoleInput | RoleUserCreateOrConnectWithoutRoleInput[]
    createMany?: RoleUserCreateManyRoleInputEnvelope
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type RoleUserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput> | RoleUserCreateWithoutRoleInput[] | RoleUserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutRoleInput | RoleUserCreateOrConnectWithoutRoleInput[]
    createMany?: RoleUserCreateManyRoleInputEnvelope
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
  }

  export type RoleMenuUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleUserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput> | RoleUserCreateWithoutRoleInput[] | RoleUserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutRoleInput | RoleUserCreateOrConnectWithoutRoleInput[]
    upsert?: RoleUserUpsertWithWhereUniqueWithoutRoleInput | RoleUserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleUserCreateManyRoleInputEnvelope
    set?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    disconnect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    delete?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    update?: RoleUserUpdateWithWhereUniqueWithoutRoleInput | RoleUserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleUserUpdateManyWithWhereWithoutRoleInput | RoleUserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleUserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput> | RoleUserCreateWithoutRoleInput[] | RoleUserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUserCreateOrConnectWithoutRoleInput | RoleUserCreateOrConnectWithoutRoleInput[]
    upsert?: RoleUserUpsertWithWhereUniqueWithoutRoleInput | RoleUserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleUserCreateManyRoleInputEnvelope
    set?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    disconnect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    delete?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    connect?: RoleUserWhereUniqueInput | RoleUserWhereUniqueInput[]
    update?: RoleUserUpdateWithWhereUniqueWithoutRoleInput | RoleUserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleUserUpdateManyWithWhereWithoutRoleInput | RoleUserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
  }

  export type RoleMenuCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleMenuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRoleMenusInput = {
    create?: XOR<RoleCreateWithoutRoleMenusInput, RoleUncheckedCreateWithoutRoleMenusInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenusInput
    connect?: RoleWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutRoleMenuInput = {
    create?: XOR<MenuCreateWithoutRoleMenuInput, MenuUncheckedCreateWithoutRoleMenuInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRoleMenuInput
    connect?: MenuWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRoleMenusNestedInput = {
    create?: XOR<RoleCreateWithoutRoleMenusInput, RoleUncheckedCreateWithoutRoleMenusInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenusInput
    upsert?: RoleUpsertWithoutRoleMenusInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoleMenusInput, RoleUpdateWithoutRoleMenusInput>, RoleUncheckedUpdateWithoutRoleMenusInput>
  }

  export type MenuUpdateOneRequiredWithoutRoleMenuNestedInput = {
    create?: XOR<MenuCreateWithoutRoleMenuInput, MenuUncheckedCreateWithoutRoleMenuInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRoleMenuInput
    upsert?: MenuUpsertWithoutRoleMenuInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutRoleMenuInput, MenuUpdateWithoutRoleMenuInput>, MenuUncheckedUpdateWithoutRoleMenuInput>
  }

  export type RoleCreateNestedOneWithoutRoleUsersInput = {
    create?: XOR<RoleCreateWithoutRoleUsersInput, RoleUncheckedCreateWithoutRoleUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoleUsersInput = {
    create?: XOR<UserCreateWithoutRoleUsersInput, UserUncheckedCreateWithoutRoleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleUsersInput
    connect?: UserWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRoleUsersNestedInput = {
    create?: XOR<RoleCreateWithoutRoleUsersInput, RoleUncheckedCreateWithoutRoleUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleUsersInput
    upsert?: RoleUpsertWithoutRoleUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoleUsersInput, RoleUpdateWithoutRoleUsersInput>, RoleUncheckedUpdateWithoutRoleUsersInput>
  }

  export type UserUpdateOneRequiredWithoutRoleUsersNestedInput = {
    create?: XOR<UserCreateWithoutRoleUsersInput, UserUncheckedCreateWithoutRoleUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleUsersInput
    upsert?: UserUpsertWithoutRoleUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoleUsersInput, UserUpdateWithoutRoleUsersInput>, UserUncheckedUpdateWithoutRoleUsersInput>
  }

  export type DomainCreateNestedManyWithoutProductInput = {
    create?: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput> | DomainCreateWithoutProductInput[] | DomainUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProductInput | DomainCreateOrConnectWithoutProductInput[]
    createMany?: DomainCreateManyProductInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type ProductFeatureCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput> | ProductFeatureCreateWithoutProductInput[] | ProductFeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutProductInput | ProductFeatureCreateOrConnectWithoutProductInput[]
    createMany?: ProductFeatureCreateManyProductInputEnvelope
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
  }

  export type DomainUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput> | DomainCreateWithoutProductInput[] | DomainUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProductInput | DomainCreateOrConnectWithoutProductInput[]
    createMany?: DomainCreateManyProductInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type ProductFeatureUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput> | ProductFeatureCreateWithoutProductInput[] | ProductFeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutProductInput | ProductFeatureCreateOrConnectWithoutProductInput[]
    createMany?: ProductFeatureCreateManyProductInputEnvelope
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type DomainUpdateManyWithoutProductNestedInput = {
    create?: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput> | DomainCreateWithoutProductInput[] | DomainUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProductInput | DomainCreateOrConnectWithoutProductInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutProductInput | DomainUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DomainCreateManyProductInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutProductInput | DomainUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutProductInput | DomainUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type ProductFeatureUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput> | ProductFeatureCreateWithoutProductInput[] | ProductFeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutProductInput | ProductFeatureCreateOrConnectWithoutProductInput[]
    upsert?: ProductFeatureUpsertWithWhereUniqueWithoutProductInput | ProductFeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFeatureCreateManyProductInputEnvelope
    set?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    disconnect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    delete?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    update?: ProductFeatureUpdateWithWhereUniqueWithoutProductInput | ProductFeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFeatureUpdateManyWithWhereWithoutProductInput | ProductFeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
  }

  export type DomainUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput> | DomainCreateWithoutProductInput[] | DomainUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutProductInput | DomainCreateOrConnectWithoutProductInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutProductInput | DomainUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DomainCreateManyProductInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutProductInput | DomainUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutProductInput | DomainUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type ProductFeatureUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput> | ProductFeatureCreateWithoutProductInput[] | ProductFeatureUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutProductInput | ProductFeatureCreateOrConnectWithoutProductInput[]
    upsert?: ProductFeatureUpsertWithWhereUniqueWithoutProductInput | ProductFeatureUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFeatureCreateManyProductInputEnvelope
    set?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    disconnect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    delete?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    update?: ProductFeatureUpdateWithWhereUniqueWithoutProductInput | ProductFeatureUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFeatureUpdateManyWithWhereWithoutProductInput | ProductFeatureUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutDomainsInput = {
    create?: XOR<ProductCreateWithoutDomainsInput, ProductUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDomainsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductFeatureCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput> | ProductFeatureCreateWithoutDomainInput[] | ProductFeatureUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutDomainInput | ProductFeatureCreateOrConnectWithoutDomainInput[]
    createMany?: ProductFeatureCreateManyDomainInputEnvelope
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
  }

  export type EntityCreateNestedManyWithoutDomainInput = {
    create?: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput> | EntityCreateWithoutDomainInput[] | EntityUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutDomainInput | EntityCreateOrConnectWithoutDomainInput[]
    createMany?: EntityCreateManyDomainInputEnvelope
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
  }

  export type EntityFieldCreateNestedManyWithoutDomainInput = {
    create?: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput> | EntityFieldCreateWithoutDomainInput[] | EntityFieldUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutDomainInput | EntityFieldCreateOrConnectWithoutDomainInput[]
    createMany?: EntityFieldCreateManyDomainInputEnvelope
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
  }

  export type ProductFeatureUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput> | ProductFeatureCreateWithoutDomainInput[] | ProductFeatureUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutDomainInput | ProductFeatureCreateOrConnectWithoutDomainInput[]
    createMany?: ProductFeatureCreateManyDomainInputEnvelope
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
  }

  export type EntityUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput> | EntityCreateWithoutDomainInput[] | EntityUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutDomainInput | EntityCreateOrConnectWithoutDomainInput[]
    createMany?: EntityCreateManyDomainInputEnvelope
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
  }

  export type EntityFieldUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput> | EntityFieldCreateWithoutDomainInput[] | EntityFieldUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutDomainInput | EntityFieldCreateOrConnectWithoutDomainInput[]
    createMany?: EntityFieldCreateManyDomainInputEnvelope
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
  }

  export type ProductUpdateOneWithoutDomainsNestedInput = {
    create?: XOR<ProductCreateWithoutDomainsInput, ProductUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDomainsInput
    upsert?: ProductUpsertWithoutDomainsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDomainsInput, ProductUpdateWithoutDomainsInput>, ProductUncheckedUpdateWithoutDomainsInput>
  }

  export type ProductFeatureUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput> | ProductFeatureCreateWithoutDomainInput[] | ProductFeatureUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutDomainInput | ProductFeatureCreateOrConnectWithoutDomainInput[]
    upsert?: ProductFeatureUpsertWithWhereUniqueWithoutDomainInput | ProductFeatureUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProductFeatureCreateManyDomainInputEnvelope
    set?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    disconnect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    delete?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    update?: ProductFeatureUpdateWithWhereUniqueWithoutDomainInput | ProductFeatureUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProductFeatureUpdateManyWithWhereWithoutDomainInput | ProductFeatureUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
  }

  export type EntityUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput> | EntityCreateWithoutDomainInput[] | EntityUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutDomainInput | EntityCreateOrConnectWithoutDomainInput[]
    upsert?: EntityUpsertWithWhereUniqueWithoutDomainInput | EntityUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EntityCreateManyDomainInputEnvelope
    set?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    disconnect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    delete?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    update?: EntityUpdateWithWhereUniqueWithoutDomainInput | EntityUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EntityUpdateManyWithWhereWithoutDomainInput | EntityUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EntityScalarWhereInput | EntityScalarWhereInput[]
  }

  export type EntityFieldUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput> | EntityFieldCreateWithoutDomainInput[] | EntityFieldUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutDomainInput | EntityFieldCreateOrConnectWithoutDomainInput[]
    upsert?: EntityFieldUpsertWithWhereUniqueWithoutDomainInput | EntityFieldUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EntityFieldCreateManyDomainInputEnvelope
    set?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    disconnect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    delete?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    update?: EntityFieldUpdateWithWhereUniqueWithoutDomainInput | EntityFieldUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EntityFieldUpdateManyWithWhereWithoutDomainInput | EntityFieldUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ProductFeatureUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput> | ProductFeatureCreateWithoutDomainInput[] | ProductFeatureUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: ProductFeatureCreateOrConnectWithoutDomainInput | ProductFeatureCreateOrConnectWithoutDomainInput[]
    upsert?: ProductFeatureUpsertWithWhereUniqueWithoutDomainInput | ProductFeatureUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: ProductFeatureCreateManyDomainInputEnvelope
    set?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    disconnect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    delete?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    connect?: ProductFeatureWhereUniqueInput | ProductFeatureWhereUniqueInput[]
    update?: ProductFeatureUpdateWithWhereUniqueWithoutDomainInput | ProductFeatureUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: ProductFeatureUpdateManyWithWhereWithoutDomainInput | ProductFeatureUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
  }

  export type EntityUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput> | EntityCreateWithoutDomainInput[] | EntityUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityCreateOrConnectWithoutDomainInput | EntityCreateOrConnectWithoutDomainInput[]
    upsert?: EntityUpsertWithWhereUniqueWithoutDomainInput | EntityUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EntityCreateManyDomainInputEnvelope
    set?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    disconnect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    delete?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    connect?: EntityWhereUniqueInput | EntityWhereUniqueInput[]
    update?: EntityUpdateWithWhereUniqueWithoutDomainInput | EntityUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EntityUpdateManyWithWhereWithoutDomainInput | EntityUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EntityScalarWhereInput | EntityScalarWhereInput[]
  }

  export type EntityFieldUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput> | EntityFieldCreateWithoutDomainInput[] | EntityFieldUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutDomainInput | EntityFieldCreateOrConnectWithoutDomainInput[]
    upsert?: EntityFieldUpsertWithWhereUniqueWithoutDomainInput | EntityFieldUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: EntityFieldCreateManyDomainInputEnvelope
    set?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    disconnect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    delete?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    update?: EntityFieldUpdateWithWhereUniqueWithoutDomainInput | EntityFieldUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: EntityFieldUpdateManyWithWhereWithoutDomainInput | EntityFieldUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductFeaturesInput = {
    create?: XOR<ProductCreateWithoutProductFeaturesInput, ProductUncheckedCreateWithoutProductFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductFeaturesInput
    connect?: ProductWhereUniqueInput
  }

  export type DomainCreateNestedOneWithoutProductFeaturesInput = {
    create?: XOR<DomainCreateWithoutProductFeaturesInput, DomainUncheckedCreateWithoutProductFeaturesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProductFeaturesInput
    connect?: DomainWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutProductFeaturesNestedInput = {
    create?: XOR<ProductCreateWithoutProductFeaturesInput, ProductUncheckedCreateWithoutProductFeaturesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductFeaturesInput
    upsert?: ProductUpsertWithoutProductFeaturesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductFeaturesInput, ProductUpdateWithoutProductFeaturesInput>, ProductUncheckedUpdateWithoutProductFeaturesInput>
  }

  export type DomainUpdateOneWithoutProductFeaturesNestedInput = {
    create?: XOR<DomainCreateWithoutProductFeaturesInput, DomainUncheckedCreateWithoutProductFeaturesInput>
    connectOrCreate?: DomainCreateOrConnectWithoutProductFeaturesInput
    upsert?: DomainUpsertWithoutProductFeaturesInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutProductFeaturesInput, DomainUpdateWithoutProductFeaturesInput>, DomainUncheckedUpdateWithoutProductFeaturesInput>
  }

  export type DomainCreateNestedOneWithoutEntityInput = {
    create?: XOR<DomainCreateWithoutEntityInput, DomainUncheckedCreateWithoutEntityInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEntityInput
    connect?: DomainWhereUniqueInput
  }

  export type EntityFieldCreateNestedManyWithoutEntityInput = {
    create?: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput> | EntityFieldCreateWithoutEntityInput[] | EntityFieldUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutEntityInput | EntityFieldCreateOrConnectWithoutEntityInput[]
    createMany?: EntityFieldCreateManyEntityInputEnvelope
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
  }

  export type EntityFieldUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput> | EntityFieldCreateWithoutEntityInput[] | EntityFieldUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutEntityInput | EntityFieldCreateOrConnectWithoutEntityInput[]
    createMany?: EntityFieldCreateManyEntityInputEnvelope
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
  }

  export type DomainUpdateOneRequiredWithoutEntityNestedInput = {
    create?: XOR<DomainCreateWithoutEntityInput, DomainUncheckedCreateWithoutEntityInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEntityInput
    upsert?: DomainUpsertWithoutEntityInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutEntityInput, DomainUpdateWithoutEntityInput>, DomainUncheckedUpdateWithoutEntityInput>
  }

  export type EntityFieldUpdateManyWithoutEntityNestedInput = {
    create?: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput> | EntityFieldCreateWithoutEntityInput[] | EntityFieldUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutEntityInput | EntityFieldCreateOrConnectWithoutEntityInput[]
    upsert?: EntityFieldUpsertWithWhereUniqueWithoutEntityInput | EntityFieldUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: EntityFieldCreateManyEntityInputEnvelope
    set?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    disconnect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    delete?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    update?: EntityFieldUpdateWithWhereUniqueWithoutEntityInput | EntityFieldUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: EntityFieldUpdateManyWithWhereWithoutEntityInput | EntityFieldUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
  }

  export type EntityFieldUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput> | EntityFieldCreateWithoutEntityInput[] | EntityFieldUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: EntityFieldCreateOrConnectWithoutEntityInput | EntityFieldCreateOrConnectWithoutEntityInput[]
    upsert?: EntityFieldUpsertWithWhereUniqueWithoutEntityInput | EntityFieldUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: EntityFieldCreateManyEntityInputEnvelope
    set?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    disconnect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    delete?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    connect?: EntityFieldWhereUniqueInput | EntityFieldWhereUniqueInput[]
    update?: EntityFieldUpdateWithWhereUniqueWithoutEntityInput | EntityFieldUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: EntityFieldUpdateManyWithWhereWithoutEntityInput | EntityFieldUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
  }

  export type EntityCreateNestedOneWithoutEntityFieldInput = {
    create?: XOR<EntityCreateWithoutEntityFieldInput, EntityUncheckedCreateWithoutEntityFieldInput>
    connectOrCreate?: EntityCreateOrConnectWithoutEntityFieldInput
    connect?: EntityWhereUniqueInput
  }

  export type DomainCreateNestedOneWithoutEntityFieldInput = {
    create?: XOR<DomainCreateWithoutEntityFieldInput, DomainUncheckedCreateWithoutEntityFieldInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEntityFieldInput
    connect?: DomainWhereUniqueInput
  }

  export type EntityUpdateOneWithoutEntityFieldNestedInput = {
    create?: XOR<EntityCreateWithoutEntityFieldInput, EntityUncheckedCreateWithoutEntityFieldInput>
    connectOrCreate?: EntityCreateOrConnectWithoutEntityFieldInput
    upsert?: EntityUpsertWithoutEntityFieldInput
    disconnect?: EntityWhereInput | boolean
    delete?: EntityWhereInput | boolean
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutEntityFieldInput, EntityUpdateWithoutEntityFieldInput>, EntityUncheckedUpdateWithoutEntityFieldInput>
  }

  export type DomainUpdateOneWithoutEntityFieldNestedInput = {
    create?: XOR<DomainCreateWithoutEntityFieldInput, DomainUncheckedCreateWithoutEntityFieldInput>
    connectOrCreate?: DomainCreateOrConnectWithoutEntityFieldInput
    upsert?: DomainUpsertWithoutEntityFieldInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutEntityFieldInput, DomainUpdateWithoutEntityFieldInput>, DomainUncheckedUpdateWithoutEntityFieldInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RoleUserCreateWithoutUserInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleUsersInput
  }

  export type RoleUserUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    roleId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserCreateOrConnectWithoutUserInput = {
    where: RoleUserWhereUniqueInput
    create: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput>
  }

  export type RoleUserCreateManyUserInputEnvelope = {
    data: RoleUserCreateManyUserInput | RoleUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUserUpsertWithWhereUniqueWithoutUserInput = {
    where: RoleUserWhereUniqueInput
    update: XOR<RoleUserUpdateWithoutUserInput, RoleUserUncheckedUpdateWithoutUserInput>
    create: XOR<RoleUserCreateWithoutUserInput, RoleUserUncheckedCreateWithoutUserInput>
  }

  export type RoleUserUpdateWithWhereUniqueWithoutUserInput = {
    where: RoleUserWhereUniqueInput
    data: XOR<RoleUserUpdateWithoutUserInput, RoleUserUncheckedUpdateWithoutUserInput>
  }

  export type RoleUserUpdateManyWithWhereWithoutUserInput = {
    where: RoleUserScalarWhereInput
    data: XOR<RoleUserUpdateManyMutationInput, RoleUserUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleUserScalarWhereInput = {
    AND?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
    OR?: RoleUserScalarWhereInput[]
    NOT?: RoleUserScalarWhereInput | RoleUserScalarWhereInput[]
    id?: BigIntFilter<"RoleUser"> | bigint | number
    roleId?: BigIntFilter<"RoleUser"> | bigint | number
    userId?: BigIntFilter<"RoleUser"> | bigint | number
    createBy?: BigIntFilter<"RoleUser"> | bigint | number
    createAt?: DateTimeFilter<"RoleUser"> | Date | string
    updateBy?: BigIntFilter<"RoleUser"> | bigint | number
    updateAt?: DateTimeFilter<"RoleUser"> | Date | string
  }

  export type RoleMenuCreateWithoutRoleInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    menu: MenuCreateNestedOneWithoutRoleMenuInput
  }

  export type RoleMenuUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    menuId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuCreateOrConnectWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuCreateManyRoleInputEnvelope = {
    data: RoleMenuCreateManyRoleInput | RoleMenuCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleUserCreateWithoutRoleInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutRoleUsersInput
  }

  export type RoleUserUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    userId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserCreateOrConnectWithoutRoleInput = {
    where: RoleUserWhereUniqueInput
    create: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput>
  }

  export type RoleUserCreateManyRoleInputEnvelope = {
    data: RoleUserCreateManyRoleInput | RoleUserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutRoleInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuScalarWhereInput = {
    AND?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    OR?: RoleMenuScalarWhereInput[]
    NOT?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    id?: BigIntFilter<"RoleMenu"> | bigint | number
    roleId?: BigIntFilter<"RoleMenu"> | bigint | number
    menuId?: BigIntFilter<"RoleMenu"> | bigint | number
    createBy?: BigIntFilter<"RoleMenu"> | bigint | number
    createAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updateBy?: BigIntFilter<"RoleMenu"> | bigint | number
    updateAt?: DateTimeFilter<"RoleMenu"> | Date | string
  }

  export type RoleUserUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleUserWhereUniqueInput
    update: XOR<RoleUserUpdateWithoutRoleInput, RoleUserUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleUserCreateWithoutRoleInput, RoleUserUncheckedCreateWithoutRoleInput>
  }

  export type RoleUserUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleUserWhereUniqueInput
    data: XOR<RoleUserUpdateWithoutRoleInput, RoleUserUncheckedUpdateWithoutRoleInput>
  }

  export type RoleUserUpdateManyWithWhereWithoutRoleInput = {
    where: RoleUserScalarWhereInput
    data: XOR<RoleUserUpdateManyMutationInput, RoleUserUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuCreateWithoutMenuInput = {
    id?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleMenusInput
  }

  export type RoleMenuUncheckedCreateWithoutMenuInput = {
    id?: bigint | number
    roleId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuCreateOrConnectWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuCreateManyMenuInputEnvelope = {
    data: RoleMenuCreateManyMenuInput | RoleMenuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutMenuInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type RoleCreateWithoutRoleMenusInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleUsers?: RoleUserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoleMenusInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleUsers?: RoleUserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoleMenusInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoleMenusInput, RoleUncheckedCreateWithoutRoleMenusInput>
  }

  export type MenuCreateWithoutRoleMenuInput = {
    id?: bigint | number
    menuCode: string
    menuName: string
    menuType: string
    pid?: bigint | number
    icon?: string | null
    route?: string | null
    menuSort?: number
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutRoleMenuInput = {
    id?: bigint | number
    menuCode: string
    menuName: string
    menuType: string
    pid?: bigint | number
    icon?: string | null
    route?: string | null
    menuSort?: number
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutRoleMenuInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRoleMenuInput, MenuUncheckedCreateWithoutRoleMenuInput>
  }

  export type RoleUpsertWithoutRoleMenusInput = {
    update: XOR<RoleUpdateWithoutRoleMenusInput, RoleUncheckedUpdateWithoutRoleMenusInput>
    create: XOR<RoleCreateWithoutRoleMenusInput, RoleUncheckedCreateWithoutRoleMenusInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoleMenusInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoleMenusInput, RoleUncheckedUpdateWithoutRoleMenusInput>
  }

  export type RoleUpdateWithoutRoleMenusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleUsers?: RoleUserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoleMenusInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleUsers?: RoleUserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type MenuUpsertWithoutRoleMenuInput = {
    update: XOR<MenuUpdateWithoutRoleMenuInput, MenuUncheckedUpdateWithoutRoleMenuInput>
    create: XOR<MenuCreateWithoutRoleMenuInput, MenuUncheckedCreateWithoutRoleMenuInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutRoleMenuInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutRoleMenuInput, MenuUncheckedUpdateWithoutRoleMenuInput>
  }

  export type MenuUpdateWithoutRoleMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutRoleMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuCode?: StringFieldUpdateOperationsInput | string
    menuName?: StringFieldUpdateOperationsInput | string
    menuType?: StringFieldUpdateOperationsInput | string
    pid?: BigIntFieldUpdateOperationsInput | bigint | number
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    menuSort?: IntFieldUpdateOperationsInput | number
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateWithoutRoleUsersInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleMenus?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoleUsersInput = {
    id?: bigint | number
    roleCode: string
    roleName: string
    enabledFlag?: boolean
    remark?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoleUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoleUsersInput, RoleUncheckedCreateWithoutRoleUsersInput>
  }

  export type UserCreateWithoutRoleUsersInput = {
    id?: bigint | number
    username: string
    displayName: string
    lang: string
    locale: string
    email: string
    phone: string
    sex: string
    avatar?: string | null
    password: string
    effectiveStartDate?: Date | string
    effectiveEndDate?: Date | string | null
    activedFlag?: boolean
    lockedTime?: Date | string | null
    enabledFlag?: boolean
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRoleUsersInput = {
    id?: bigint | number
    username: string
    displayName: string
    lang: string
    locale: string
    email: string
    phone: string
    sex: string
    avatar?: string | null
    password: string
    effectiveStartDate?: Date | string
    effectiveEndDate?: Date | string | null
    activedFlag?: boolean
    lockedTime?: Date | string | null
    enabledFlag?: boolean
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRoleUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleUsersInput, UserUncheckedCreateWithoutRoleUsersInput>
  }

  export type RoleUpsertWithoutRoleUsersInput = {
    update: XOR<RoleUpdateWithoutRoleUsersInput, RoleUncheckedUpdateWithoutRoleUsersInput>
    create: XOR<RoleCreateWithoutRoleUsersInput, RoleUncheckedCreateWithoutRoleUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoleUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoleUsersInput, RoleUncheckedUpdateWithoutRoleUsersInput>
  }

  export type RoleUpdateWithoutRoleUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleMenus?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoleUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleCode?: StringFieldUpdateOperationsInput | string
    roleName?: StringFieldUpdateOperationsInput | string
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserUpsertWithoutRoleUsersInput = {
    update: XOR<UserUpdateWithoutRoleUsersInput, UserUncheckedUpdateWithoutRoleUsersInput>
    create: XOR<UserCreateWithoutRoleUsersInput, UserUncheckedCreateWithoutRoleUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoleUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoleUsersInput, UserUncheckedUpdateWithoutRoleUsersInput>
  }

  export type UserUpdateWithoutRoleUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRoleUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    lang?: StringFieldUpdateOperationsInput | string
    locale?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    effectiveStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activedFlag?: BoolFieldUpdateOperationsInput | boolean
    lockedTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enabledFlag?: BoolFieldUpdateOperationsInput | boolean
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateWithoutProductInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureCreateNestedManyWithoutDomainInput
    Entity?: EntityCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutProductInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutDomainInput
    Entity?: EntityUncheckedCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutProductInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput>
  }

  export type DomainCreateManyProductInputEnvelope = {
    data: DomainCreateManyProductInput | DomainCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductFeatureCreateWithoutProductInput = {
    id?: bigint | number
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domain?: DomainCreateNestedOneWithoutProductFeaturesInput
  }

  export type ProductFeatureUncheckedCreateWithoutProductInput = {
    id?: bigint | number
    domainId?: bigint | number | null
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureCreateOrConnectWithoutProductInput = {
    where: ProductFeatureWhereUniqueInput
    create: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput>
  }

  export type ProductFeatureCreateManyProductInputEnvelope = {
    data: ProductFeatureCreateManyProductInput | ProductFeatureCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithWhereUniqueWithoutProductInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutProductInput, DomainUncheckedUpdateWithoutProductInput>
    create: XOR<DomainCreateWithoutProductInput, DomainUncheckedCreateWithoutProductInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutProductInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutProductInput, DomainUncheckedUpdateWithoutProductInput>
  }

  export type DomainUpdateManyWithWhereWithoutProductInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutProductInput>
  }

  export type DomainScalarWhereInput = {
    AND?: DomainScalarWhereInput | DomainScalarWhereInput[]
    OR?: DomainScalarWhereInput[]
    NOT?: DomainScalarWhereInput | DomainScalarWhereInput[]
    id?: BigIntFilter<"Domain"> | bigint | number
    productId?: BigIntNullableFilter<"Domain"> | bigint | number | null
    name?: StringFilter<"Domain"> | string
    desc?: StringNullableFilter<"Domain"> | string | null
    versionNum?: BigIntFilter<"Domain"> | bigint | number
    createBy?: BigIntFilter<"Domain"> | bigint | number
    createAt?: DateTimeFilter<"Domain"> | Date | string
    updateBy?: BigIntFilter<"Domain"> | bigint | number
    updateAt?: DateTimeFilter<"Domain"> | Date | string
  }

  export type ProductFeatureUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductFeatureWhereUniqueInput
    update: XOR<ProductFeatureUpdateWithoutProductInput, ProductFeatureUncheckedUpdateWithoutProductInput>
    create: XOR<ProductFeatureCreateWithoutProductInput, ProductFeatureUncheckedCreateWithoutProductInput>
  }

  export type ProductFeatureUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductFeatureWhereUniqueInput
    data: XOR<ProductFeatureUpdateWithoutProductInput, ProductFeatureUncheckedUpdateWithoutProductInput>
  }

  export type ProductFeatureUpdateManyWithWhereWithoutProductInput = {
    where: ProductFeatureScalarWhereInput
    data: XOR<ProductFeatureUpdateManyMutationInput, ProductFeatureUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductFeatureScalarWhereInput = {
    AND?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
    OR?: ProductFeatureScalarWhereInput[]
    NOT?: ProductFeatureScalarWhereInput | ProductFeatureScalarWhereInput[]
    id?: BigIntFilter<"ProductFeature"> | bigint | number
    productId?: BigIntFilter<"ProductFeature"> | bigint | number
    domainId?: BigIntNullableFilter<"ProductFeature"> | bigint | number | null
    title?: StringFilter<"ProductFeature"> | string
    desc?: StringNullableFilter<"ProductFeature"> | string | null
    event?: StringFilter<"ProductFeature"> | string
    command?: StringFilter<"ProductFeature"> | string
    role?: StringFilter<"ProductFeature"> | string
    versionNum?: BigIntFilter<"ProductFeature"> | bigint | number
    createBy?: BigIntFilter<"ProductFeature"> | bigint | number
    createAt?: DateTimeFilter<"ProductFeature"> | Date | string
    updateBy?: BigIntFilter<"ProductFeature"> | bigint | number
    updateAt?: DateTimeFilter<"ProductFeature"> | Date | string
  }

  export type ProductCreateWithoutDomainsInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDomainsInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDomainsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDomainsInput, ProductUncheckedCreateWithoutDomainsInput>
  }

  export type ProductFeatureCreateWithoutDomainInput = {
    id?: bigint | number
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    Product: ProductCreateNestedOneWithoutProductFeaturesInput
  }

  export type ProductFeatureUncheckedCreateWithoutDomainInput = {
    id?: bigint | number
    productId: bigint | number
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureCreateOrConnectWithoutDomainInput = {
    where: ProductFeatureWhereUniqueInput
    create: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput>
  }

  export type ProductFeatureCreateManyDomainInputEnvelope = {
    data: ProductFeatureCreateManyDomainInput | ProductFeatureCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type EntityCreateWithoutDomainInput = {
    id?: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    EntityField?: EntityFieldCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutDomainInput = {
    id?: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutDomainInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput>
  }

  export type EntityCreateManyDomainInputEnvelope = {
    data: EntityCreateManyDomainInput | EntityCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type EntityFieldCreateWithoutDomainInput = {
    id?: bigint | number
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    entity?: EntityCreateNestedOneWithoutEntityFieldInput
  }

  export type EntityFieldUncheckedCreateWithoutDomainInput = {
    id?: bigint | number
    entityId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldCreateOrConnectWithoutDomainInput = {
    where: EntityFieldWhereUniqueInput
    create: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput>
  }

  export type EntityFieldCreateManyDomainInputEnvelope = {
    data: EntityFieldCreateManyDomainInput | EntityFieldCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutDomainsInput = {
    update: XOR<ProductUpdateWithoutDomainsInput, ProductUncheckedUpdateWithoutDomainsInput>
    create: XOR<ProductCreateWithoutDomainsInput, ProductUncheckedCreateWithoutDomainsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDomainsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDomainsInput, ProductUncheckedUpdateWithoutDomainsInput>
  }

  export type ProductUpdateWithoutDomainsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDomainsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductFeatureUpsertWithWhereUniqueWithoutDomainInput = {
    where: ProductFeatureWhereUniqueInput
    update: XOR<ProductFeatureUpdateWithoutDomainInput, ProductFeatureUncheckedUpdateWithoutDomainInput>
    create: XOR<ProductFeatureCreateWithoutDomainInput, ProductFeatureUncheckedCreateWithoutDomainInput>
  }

  export type ProductFeatureUpdateWithWhereUniqueWithoutDomainInput = {
    where: ProductFeatureWhereUniqueInput
    data: XOR<ProductFeatureUpdateWithoutDomainInput, ProductFeatureUncheckedUpdateWithoutDomainInput>
  }

  export type ProductFeatureUpdateManyWithWhereWithoutDomainInput = {
    where: ProductFeatureScalarWhereInput
    data: XOR<ProductFeatureUpdateManyMutationInput, ProductFeatureUncheckedUpdateManyWithoutDomainInput>
  }

  export type EntityUpsertWithWhereUniqueWithoutDomainInput = {
    where: EntityWhereUniqueInput
    update: XOR<EntityUpdateWithoutDomainInput, EntityUncheckedUpdateWithoutDomainInput>
    create: XOR<EntityCreateWithoutDomainInput, EntityUncheckedCreateWithoutDomainInput>
  }

  export type EntityUpdateWithWhereUniqueWithoutDomainInput = {
    where: EntityWhereUniqueInput
    data: XOR<EntityUpdateWithoutDomainInput, EntityUncheckedUpdateWithoutDomainInput>
  }

  export type EntityUpdateManyWithWhereWithoutDomainInput = {
    where: EntityScalarWhereInput
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyWithoutDomainInput>
  }

  export type EntityScalarWhereInput = {
    AND?: EntityScalarWhereInput | EntityScalarWhereInput[]
    OR?: EntityScalarWhereInput[]
    NOT?: EntityScalarWhereInput | EntityScalarWhereInput[]
    id?: BigIntFilter<"Entity"> | bigint | number
    domainId?: BigIntFilter<"Entity"> | bigint | number
    name?: StringFilter<"Entity"> | string
    desc?: StringFilter<"Entity"> | string
    versionNum?: BigIntFilter<"Entity"> | bigint | number
    createBy?: BigIntFilter<"Entity"> | bigint | number
    createAt?: DateTimeFilter<"Entity"> | Date | string
    updateBy?: BigIntFilter<"Entity"> | bigint | number
    updateAt?: DateTimeFilter<"Entity"> | Date | string
  }

  export type EntityFieldUpsertWithWhereUniqueWithoutDomainInput = {
    where: EntityFieldWhereUniqueInput
    update: XOR<EntityFieldUpdateWithoutDomainInput, EntityFieldUncheckedUpdateWithoutDomainInput>
    create: XOR<EntityFieldCreateWithoutDomainInput, EntityFieldUncheckedCreateWithoutDomainInput>
  }

  export type EntityFieldUpdateWithWhereUniqueWithoutDomainInput = {
    where: EntityFieldWhereUniqueInput
    data: XOR<EntityFieldUpdateWithoutDomainInput, EntityFieldUncheckedUpdateWithoutDomainInput>
  }

  export type EntityFieldUpdateManyWithWhereWithoutDomainInput = {
    where: EntityFieldScalarWhereInput
    data: XOR<EntityFieldUpdateManyMutationInput, EntityFieldUncheckedUpdateManyWithoutDomainInput>
  }

  export type EntityFieldScalarWhereInput = {
    AND?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
    OR?: EntityFieldScalarWhereInput[]
    NOT?: EntityFieldScalarWhereInput | EntityFieldScalarWhereInput[]
    id?: BigIntFilter<"EntityField"> | bigint | number
    entityId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    domainId?: BigIntNullableFilter<"EntityField"> | bigint | number | null
    name?: StringFilter<"EntityField"> | string
    type?: StringFilter<"EntityField"> | string
    defaultValue?: StringNullableFilter<"EntityField"> | string | null
    isRequired?: BoolFilter<"EntityField"> | boolean
    dict?: StringNullableFilter<"EntityField"> | string | null
    desc?: StringFilter<"EntityField"> | string
    versionNum?: BigIntFilter<"EntityField"> | bigint | number
    createBy?: BigIntFilter<"EntityField"> | bigint | number
    createAt?: DateTimeFilter<"EntityField"> | Date | string
    updateBy?: BigIntFilter<"EntityField"> | bigint | number
    updateAt?: DateTimeFilter<"EntityField"> | Date | string
  }

  export type ProductCreateWithoutProductFeaturesInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domains?: DomainCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductFeaturesInput = {
    id?: bigint | number
    code: string
    name: string
    desc?: string | null
    data?: Buffer | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductFeaturesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductFeaturesInput, ProductUncheckedCreateWithoutProductFeaturesInput>
  }

  export type DomainCreateWithoutProductFeaturesInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    product?: ProductCreateNestedOneWithoutDomainsInput
    Entity?: EntityCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutProductFeaturesInput = {
    id?: bigint | number
    productId?: bigint | number | null
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    Entity?: EntityUncheckedCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutProductFeaturesInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutProductFeaturesInput, DomainUncheckedCreateWithoutProductFeaturesInput>
  }

  export type ProductUpsertWithoutProductFeaturesInput = {
    update: XOR<ProductUpdateWithoutProductFeaturesInput, ProductUncheckedUpdateWithoutProductFeaturesInput>
    create: XOR<ProductCreateWithoutProductFeaturesInput, ProductUncheckedCreateWithoutProductFeaturesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductFeaturesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductFeaturesInput, ProductUncheckedUpdateWithoutProductFeaturesInput>
  }

  export type ProductUpdateWithoutProductFeaturesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductFeaturesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DomainUpsertWithoutProductFeaturesInput = {
    update: XOR<DomainUpdateWithoutProductFeaturesInput, DomainUncheckedUpdateWithoutProductFeaturesInput>
    create: XOR<DomainCreateWithoutProductFeaturesInput, DomainUncheckedCreateWithoutProductFeaturesInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutProductFeaturesInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutProductFeaturesInput, DomainUncheckedUpdateWithoutProductFeaturesInput>
  }

  export type DomainUpdateWithoutProductFeaturesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutDomainsNestedInput
    Entity?: EntityUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutProductFeaturesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Entity?: EntityUncheckedUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateWithoutEntityInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    product?: ProductCreateNestedOneWithoutDomainsInput
    productFeatures?: ProductFeatureCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutEntityInput = {
    id?: bigint | number
    productId?: bigint | number | null
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutDomainInput
    EntityField?: EntityFieldUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutEntityInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutEntityInput, DomainUncheckedCreateWithoutEntityInput>
  }

  export type EntityFieldCreateWithoutEntityInput = {
    id?: bigint | number
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domain?: DomainCreateNestedOneWithoutEntityFieldInput
  }

  export type EntityFieldUncheckedCreateWithoutEntityInput = {
    id?: bigint | number
    domainId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldCreateOrConnectWithoutEntityInput = {
    where: EntityFieldWhereUniqueInput
    create: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput>
  }

  export type EntityFieldCreateManyEntityInputEnvelope = {
    data: EntityFieldCreateManyEntityInput | EntityFieldCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithoutEntityInput = {
    update: XOR<DomainUpdateWithoutEntityInput, DomainUncheckedUpdateWithoutEntityInput>
    create: XOR<DomainCreateWithoutEntityInput, DomainUncheckedCreateWithoutEntityInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutEntityInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutEntityInput, DomainUncheckedUpdateWithoutEntityInput>
  }

  export type DomainUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutDomainsNestedInput
    productFeatures?: ProductFeatureUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type EntityFieldUpsertWithWhereUniqueWithoutEntityInput = {
    where: EntityFieldWhereUniqueInput
    update: XOR<EntityFieldUpdateWithoutEntityInput, EntityFieldUncheckedUpdateWithoutEntityInput>
    create: XOR<EntityFieldCreateWithoutEntityInput, EntityFieldUncheckedCreateWithoutEntityInput>
  }

  export type EntityFieldUpdateWithWhereUniqueWithoutEntityInput = {
    where: EntityFieldWhereUniqueInput
    data: XOR<EntityFieldUpdateWithoutEntityInput, EntityFieldUncheckedUpdateWithoutEntityInput>
  }

  export type EntityFieldUpdateManyWithWhereWithoutEntityInput = {
    where: EntityFieldScalarWhereInput
    data: XOR<EntityFieldUpdateManyMutationInput, EntityFieldUncheckedUpdateManyWithoutEntityInput>
  }

  export type EntityCreateWithoutEntityFieldInput = {
    id?: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    domain: DomainCreateNestedOneWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutEntityFieldInput = {
    id?: bigint | number
    domainId: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityCreateOrConnectWithoutEntityFieldInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutEntityFieldInput, EntityUncheckedCreateWithoutEntityFieldInput>
  }

  export type DomainCreateWithoutEntityFieldInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    product?: ProductCreateNestedOneWithoutDomainsInput
    productFeatures?: ProductFeatureCreateNestedManyWithoutDomainInput
    Entity?: EntityCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutEntityFieldInput = {
    id?: bigint | number
    productId?: bigint | number | null
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
    productFeatures?: ProductFeatureUncheckedCreateNestedManyWithoutDomainInput
    Entity?: EntityUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutEntityFieldInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutEntityFieldInput, DomainUncheckedCreateWithoutEntityFieldInput>
  }

  export type EntityUpsertWithoutEntityFieldInput = {
    update: XOR<EntityUpdateWithoutEntityFieldInput, EntityUncheckedUpdateWithoutEntityFieldInput>
    create: XOR<EntityCreateWithoutEntityFieldInput, EntityUncheckedCreateWithoutEntityFieldInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutEntityFieldInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutEntityFieldInput, EntityUncheckedUpdateWithoutEntityFieldInput>
  }

  export type EntityUpdateWithoutEntityFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutEntityFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUpsertWithoutEntityFieldInput = {
    update: XOR<DomainUpdateWithoutEntityFieldInput, DomainUncheckedUpdateWithoutEntityFieldInput>
    create: XOR<DomainCreateWithoutEntityFieldInput, DomainUncheckedCreateWithoutEntityFieldInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutEntityFieldInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutEntityFieldInput, DomainUncheckedUpdateWithoutEntityFieldInput>
  }

  export type DomainUpdateWithoutEntityFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutDomainsNestedInput
    productFeatures?: ProductFeatureUpdateManyWithoutDomainNestedInput
    Entity?: EntityUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutEntityFieldInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutDomainNestedInput
    Entity?: EntityUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type RoleUserCreateManyUserInput = {
    id?: bigint | number
    roleId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleUsersNestedInput
  }

  export type RoleUserUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateManyRoleInput = {
    id?: bigint | number
    menuId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleUserCreateManyRoleInput = {
    id?: bigint | number
    userId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutRoleMenuNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    menuId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoleUsersNestedInput
  }

  export type RoleUserUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUserUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateManyMenuInput = {
    id?: bigint | number
    roleId: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type RoleMenuUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleMenusNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    roleId?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateManyProductInput = {
    id?: bigint | number
    name: string
    desc?: string | null
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureCreateManyProductInput = {
    id?: bigint | number
    domainId?: bigint | number | null
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type DomainUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUpdateManyWithoutDomainNestedInput
    Entity?: EntityUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productFeatures?: ProductFeatureUncheckedUpdateManyWithoutDomainNestedInput
    Entity?: EntityUncheckedUpdateManyWithoutDomainNestedInput
    EntityField?: EntityFieldUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneWithoutProductFeaturesNestedInput
  }

  export type ProductFeatureUncheckedUpdateWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureUncheckedUpdateManyWithoutProductInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureCreateManyDomainInput = {
    id?: bigint | number
    productId: bigint | number
    title: string
    desc?: string | null
    event: string
    command: string
    role: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityCreateManyDomainInput = {
    id?: bigint | number
    name: string
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldCreateManyDomainInput = {
    id?: bigint | number
    entityId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type ProductFeatureUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutProductFeaturesNestedInput
  }

  export type ProductFeatureUncheckedUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFeatureUncheckedUpdateManyWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    productId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    event?: StringFieldUpdateOperationsInput | string
    command?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EntityField?: EntityFieldUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EntityField?: EntityFieldUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateManyWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: EntityUpdateOneWithoutEntityFieldNestedInput
  }

  export type EntityFieldUncheckedUpdateWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldUncheckedUpdateManyWithoutDomainInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    entityId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldCreateManyEntityInput = {
    id?: bigint | number
    domainId?: bigint | number | null
    name: string
    type: string
    defaultValue?: string | null
    isRequired: boolean
    dict?: string | null
    desc: string
    versionNum?: bigint | number
    createBy: bigint | number
    createAt?: Date | string
    updateBy: bigint | number
    updateAt?: Date | string
  }

  export type EntityFieldUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneWithoutEntityFieldNestedInput
  }

  export type EntityFieldUncheckedUpdateWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntityFieldUncheckedUpdateManyWithoutEntityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    domainId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    dict?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: StringFieldUpdateOperationsInput | string
    versionNum?: BigIntFieldUpdateOperationsInput | bigint | number
    createBy?: BigIntFieldUpdateOperationsInput | bigint | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateBy?: BigIntFieldUpdateOperationsInput | bigint | number
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainCountOutputTypeDefaultArgs instead
     */
    export type DomainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityCountOutputTypeDefaultArgs instead
     */
    export type EntityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleMenuDefaultArgs instead
     */
    export type RoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleMenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleUserDefaultArgs instead
     */
    export type RoleUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainDefaultArgs instead
     */
    export type DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductFeatureDefaultArgs instead
     */
    export type ProductFeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductFeatureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityDefaultArgs instead
     */
    export type EntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityFieldDefaultArgs instead
     */
    export type EntityFieldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityFieldDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}