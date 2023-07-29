import { Observable } from "rxjs";
import { UserService } from "./remote/musubi.remote";

export type Consumer<T> = {
  [P in keyof T]: T[P] extends (...args: infer A) => infer R ? (...args: A) => Observable<R> : any;
}

export type Provider<T> = T;

export type UserServiceConsumer = Consumer<UserService>;

export type UserServiceProvider = Provider<UserService>;
