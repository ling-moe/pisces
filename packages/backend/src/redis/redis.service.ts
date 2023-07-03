import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  cacheSet(key: string, value: string, ttl: number) {
    this.cacheManager.set(key, value, ttl);
  }

  async cacheGet(key: string): Promise<any> {
    return this.cacheManager.get(key);
  }
}
