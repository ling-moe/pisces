import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class RequestCacheHelper {
  private readonly storage = new Map<string, unknown>();

  setValue(key: string, value: unknown) {
    this.storage.set(key, value);
  }

  getValue(key: string): unknown {
    return this.storage.get(key);
  }
}
