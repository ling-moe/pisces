import {
  ArgumentMetadata,
  Module,
  ModuleMetadata,
  Provider as NestProvider,
  PipeTransform,
  RequestMethod,
  Type,
  assignMetadata
} from "@nestjs/common";
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
import { extractMethodParams, methodToHttp } from "../method-sigature.util";
import { BigIntModule } from '@pisces/common';

const musubiMethods = new Set();

export type MusubiModuleMetadata = ModuleMetadata & {
  remotes?: Type<any>[];
  include?: RegExp;
};

export type Provider<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ?  (...args: A) => Promise<R> : any;
};
/**
 * 在原有module注解的情况下进行增强
 *
 * exclude 默认值为Within结尾的方法，正则为/^(.*?)Within$/
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
    // 加载controller
    const controllers = createController(
      metadata.include ?? /^[^$].*/,
      metadata.remotes ?? []
    ).concat(metadata.controllers ?? []);
    Reflect.defineMetadata('controllers', controllers, target);
    metadata.providers = metadata.providers ?? [];
    metadata.controllers = controllers;
    // 将service追加到service中
    metadata.remotes?.forEach((remote) => metadata.providers!.push(remote));
    // 移除增强的属性
    delete metadata.remotes;
    delete metadata.include;
    // 调用原本的module
    Module(metadata)(target);
  };
}
function createController(include: RegExp, remoteServices: NestProvider[]) {
  const result = [];
  for (const provider of remoteServices) {
    const proxyController = provider as any;
    Reflect.defineMetadata(CONTROLLER_WATERMARK, true, proxyController);
    Reflect.defineMetadata(PATH_METADATA, null, proxyController);
    Reflect.defineMetadata(HOST_METADATA, undefined, proxyController);
    Reflect.defineMetadata(SCOPE_OPTIONS_METADATA, undefined, proxyController);
    Reflect.defineMetadata(VERSION_METADATA, undefined, proxyController);
    // 加载mapping
    defineMappingMetadata(proxyController, include);
    result.push(proxyController);
  }

  return result;
}

function defineMappingMetadata(proxyController: Type<any>, exclude: RegExp) {
  const obj = Object.getOwnPropertyDescriptors(proxyController.prototype);
  for (const property in obj) {
    if (property === 'constructor' || !exclude.test(property)) {
      continue;
    }
    // 检查方法名是否已存在，存在则报错，不能出现同名的方法
    const methodName = obj[property].value.name;
    if(musubiMethods.has(methodName)){
      throw new Error(`存在重复方法名称! class: ${proxyController.name}, method：${methodName}`)
    }
    musubiMethods.add(methodName);
    const { method, path, paramType } = methodToHttp(methodName);
    Reflect.defineMetadata(PATH_METADATA, `${path}`, obj[property].value);
    Reflect.defineMetadata(METHOD_METADATA, RequestMethod[method], obj[property].value);
    // 方法参数标记
    defineMappingParamsMetadata(
      obj[property].value,
      (obj.constructor as any).value,
      RouteParamtypes[paramType],
      property
    );
  }
}

function defineMappingParamsMetadata(
  method: any,
  classConstructor: Function,
  paramType: RouteParamtypes,
  property: string
) {
  const params = extractMethodParams(method);
  let args = {};
  for (let i = 0; i < params.length; i++) {
    if (params[i] === 'req' || params[i] === 'res') {
      // TODO 接入request和response对象
    } else {
      args = assignMetadata(args, paramType, i, i, JsonPipe);
      Reflect.defineMetadata(ROUTE_ARGS_METADATA, args, classConstructor, property);
    }
  }
}

class JsonPipe implements PipeTransform {
  transform(value?: any, metadata?: ArgumentMetadata) {
    if (value) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return isJsonString(value[metadata!.data!])
          ? JSON.parse(value[metadata!.data!], BigIntModule)
          : value[metadata!.data!];
      } else {
        return isJsonString(value) ? JSON.parse(value, BigIntModule) : value;
      }
    }
    return value;
  }
}

function isJsonString(str: any) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
