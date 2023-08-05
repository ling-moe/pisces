import { ModuleMetadata, RequestMethod, Type, assignMetadata } from '@nestjs/common';
import { CONTROLLER_WATERMARK, HOST_METADATA, METHOD_METADATA, PATH_METADATA, ROUTE_ARGS_METADATA, SCOPE_OPTIONS_METADATA, VERSION_METADATA } from '@nestjs/common/constants';
import { validateModuleKeys } from '@nestjs/common/utils/validate-module-keys.util';
import { RouteParamtypes } from '@nestjs/common/enums/route-paramtypes.enum';
import { extractMethodParams, methodToHttp } from '../method-sigature.util';

export type MusubiModuleMetadata = ModuleMetadata & {
  alias?: string;
}
// ! TODO 可能还需要一个可远程化注入的注解，用来代替module的service字段，标记可远程化的service

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
  const propsKeys = Object.keys(metadata);
  validateModuleKeys(propsKeys);
  return (target: Function) => {
    // 设置模块名
    if (!metadata.alias) {
      metadata.alias = toPath(target.name);
    }
    // 加载controller
    Reflect.defineMetadata('controllers', createController(metadata).concat(metadata.controllers??[]), target);
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, (metadata as any)[property], target);
      }
    }
  };
}
function createController(metadata: MusubiModuleMetadata) {
  const result = [];
  for(const provider of metadata.providers??[]){
    const proxyController = provider as any;
    Reflect.defineMetadata(CONTROLLER_WATERMARK, true, proxyController);
    Reflect.defineMetadata(PATH_METADATA, metadata.alias, proxyController);
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
    defineMappingParamsMatedata(obj[property].value, (obj.constructor as any).value, RouteParamtypes[paramType], property);
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
    Reflect.defineMetadata(
      ROUTE_ARGS_METADATA,
      assignMetadata({}, paramType, i, params[i], ...[]),
      classConstructor,
      property
    );
  }
}

function toPath(str: string) {
  let path = str;
  if(path.endsWith('Module')){
    path = path.slice(0,-6)
  }
  return path
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .slice(1);
}
