import { Inject, Injectable, Type, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';
import { RemoteService, Consumer, UserService } from '@pisces/musubi/client';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    protected http: HttpClient,
    @Inject(RemoteService) protected userService: Consumer<UserService>) {
      debugger
      console.log('qweqrew2');
      userService.hello('lily');
  }

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('/auth/login', { username, password, rememberMe });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/self');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/self/menu').pipe(map(res => res.menu));
  }
}
