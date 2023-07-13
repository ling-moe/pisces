import { Observable } from "rxjs";
/// <reference path="./musubi.ts"/>

export type Consumer<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ? (...args: A) => Observable<R> : any;
}

export type Provider<T> = T;

export type UserServiceConsumer = Consumer<a.b.UserService>;

export type UserServiceProvider = Provider<a.b.UserService>;
