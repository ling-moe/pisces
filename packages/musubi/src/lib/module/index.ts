import { MiddlewareConsumer, Module, ModuleMetadata } from '@nestjs/common';
import { validateModuleKeys } from '@nestjs/common/utils/validate-module-keys.util';
import { Router } from 'express';

export type MusubiModuleMetadata = ModuleMetadata & {
  alias?: string;
}

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
  console.log(metadata)
    // 一个处理方法签名的util
  const propsKeys = Object.keys(metadata);
  validateModuleKeys(propsKeys);

  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, [property], target);
      }
    }
    Reflect.defineMetadata('configure', (consumer: MiddlewareConsumer) => {
      // 注册路由
      const router = Router();
      // 调用service处理路由
      router.get('/example', (req, res) => 'hello example');

      consumer.apply(router).forRoutes(`/${metadata.alias??target.constructor.name}/*`);

    }, target)
  };

}
