import { Inject, Injectable, InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken('LOCAL_STORAGE');

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: Storage
  ){}
  get(key: string) {
    return JSON.parse(this.localStorage.getItem(key) || '{}') || {};
  }

  set(key: string, value: unknown): boolean {
    this.localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  has(key: string): boolean {
    return !!this.localStorage.getItem(key);
  }

  remove(key: string) {
    this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}

export class MemoryStorageService {
  private store: { [k: string]: string } = {};

  get(key: string) {
    return JSON.parse(this.store[key] || '{}') || {};
  }

  set(key: string, value: unknown): boolean {
    this.store[key] = JSON.stringify(value);
    return true;
  }

  has(key: string): boolean {
    return !!this.store[key];
  }

  remove(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}
