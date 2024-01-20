import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '../bootstrap/menu.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    protected http: HttpClient,
    ) {
  }

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>('/auth/login', { username, password, rememberMe });
  }

  refresh(params: Record<string, unknown>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<void>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>('/querySelfUser');
  }

  menu() {
    return this.http.get<Menu[]>('/querySelfMenu');
  }
}
