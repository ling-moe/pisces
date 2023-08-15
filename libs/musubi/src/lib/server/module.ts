import { Module, ModuleMetadata, Provider as NestProvider, RequestMethod, Type, assignMetadata } from '@nestjs/common';
import {
  CONTROLLER_WATERMARK,
  HOST_METADATA,
  METHOD_METADATA,
  PATH_METADATA,
  ROUTE_ARGS_METADATA,
  SCOPE_OPTIONS_METADATA,
  VERSION_METADATA,
} from '@nestjs/common/constants';
import { RouteParamtypes } from '@nestjs/common/enums/route-paramtypes.enum';
import { extractMethodParams, methodToHttp } from '../method-sigature.util';
import { debug } from 'console';

export declare const MUSUBI_REMOTABLE = '__musubi_remotable__';

export type MusubiModuleMetadata = ModuleMetadata & {
  alias?: string;
  remotes?: Type<any>[];
};

export type Provider<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ? (...args: A) => Promise<R | undefined> | R  | undefined : any;
};

/**
 * 在原有module注解的情况下进行增强
 *
 *
 * Decorator that marks a class as a [module](https://docs.nestjs.com/modules).
 *
 * Modules are used by Nest to organize the application structure into scopes. Controllers
 * and Providers are scoped by the module they are declared in. Modules and their
 * classes (Controllers and Providers) form a graph that determines how Nest
 * performs [Dependency Injection (DI)](https://docs.nestjs.com/providers#dependency-injection).
 *
 * @param metadata module configuration metadata
 *
 * @see [Modules](https://docs.nestjs.com/modules)
 *
 * @publicApi
 */
export function MusubiModule(metadata: MusubiModuleMetadata): ClassDecorator {

  return (target: Function) => {
      // 设置模块名
      if (!metadata.alias) {
        metadata.alias = toPath(target.name);
      }
      // 加载controller
      Reflect.defineMetadata('controllers', createController(metadata.alias, metadata.remotes ?? []).concat(metadata.controllers ?? []), target);
      // 将service追加到service中
      metadata.remotes?.forEach(remote => metadata.providers?.push(remote))
      // 移除增强的属性
      delete metadata.alias;
      delete metadata.remotes;
      // 调用原本的module
      Module(metadata)(target)
  };
}
function createController(module: string, remotableServices: NestProvider[]) {
  const result = [];
  for (const provider of remotableServices) {
    const proxyController = provider as any;
    Reflect.defineMetadata(CONTROLLER_WATERMARK, true, proxyController);
    Reflect.defineMetadata(PATH_METADATA, module, proxyController);
    Reflect.defineMetadata(HOST_METADATA, undefined, proxyController);
    Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, undefined, proxyController);
    Reflect.defineMetadata(VERSION_METADATA, undefined, proxyController);
    // 加载mapping
    defineMappingMatedata(proxyController);
    result.push(proxyController);
  }

  return result;
}

function defineMappingMatedata(proxyController: Type<any>) {
  const obj = Object.getOwnPropertyDescriptors(proxyController.prototype);
  for (const property in obj) {
    if (property === 'constructor') {
      continue;
    }
    const { method, path, paramType } = methodToHttp(obj[property].value.name);
    Reflect.defineMetadata(PATH_METADATA, path, obj[property].value);
    Reflect.defineMetadata(METHOD_METADATA, RequestMethod[method], obj[property].value);
    // 方法参数标记
    defineMappingParamsMatedata(
      obj[property].value,
      (obj.constructor as any).value,
      RouteParamtypes[paramType],
      property
    );
  }
}

function defineMappingParamsMatedata(
  method: any,
  classConstructor: Function,
  paramType: RouteParamtypes,
  property: string
) {
  const params = extractMethodParams(method);
  for (let i = 0; i < params.length; i++) {
    // 添加get方法用的query参数
    if(params[i] === 'req' || params[i] === 'res'){
      // TODO 接入request和response对象
    }else{
      Reflect.defineMetadata(
        ROUTE_ARGS_METADATA,
        assignMetadata({}, paramType, i, i.toString(), ...[]),
        classConstructor,
        property
      );
    }

  }
}

function toPath(str: string) {
  let path = str;
  if (path.endsWith('Module')) {
    path = path.slice(0, -6);
  }
  return path
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .slice(1);
}
