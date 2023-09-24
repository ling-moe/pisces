
export type Perm = {
  desc: string,
  clazz: string,
  method: string,
  code: string,
  loginAccess: boolean,
  publicAccess: boolean,
};

/**
 * 声明当前方法被权限控制
 * @param desc 简单描述该方法用途
 * @param code 权限编码，可自动生成，如果填写则以填写为准
 * @param loginAccess 登录可用
 * @param publicAccess 公开可用
 * @returns MethodDecorator
 */
export function HasPermission(desc: string, code?: string, loginAccess?: boolean, publicAccess?: boolean): MethodDecorator {

  return (target: object, propertyKey: string | symbol) => {
    prems.push({
      desc: desc,
      clazz: target.constructor.name,
      method: propertyKey.toString(),
      code: `${target.constructor.name}.${propertyKey.toString()}`,
      loginAccess: loginAccess ?? false,
      publicAccess: publicAccess ?? false,
    });
  };
}

export const prems: Perm[] = [];
