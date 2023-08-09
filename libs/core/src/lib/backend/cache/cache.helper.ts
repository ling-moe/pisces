import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Optional } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheHelper {
  constructor(
    @Optional()
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async set(key: string, value: unknown, ttl: number):Promise<void> {
    return await this.cacheManager.set(key, value, ttl);
  }

  async get<T>(key: string): Promise<T | undefined> {
    return this.cacheManager.get(key);
  }
}
