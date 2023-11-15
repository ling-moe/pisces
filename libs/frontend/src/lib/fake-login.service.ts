import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from './authentication';

/**
 * You should delete this file in the real APP.
 */
@Injectable()
export class FakeLoginService extends LoginService {
  private token = { access_token: 'MW56YjMyOUAxNjMuY29tWm9uZ2Jpbg==', token_type: 'bearer' };

  override login() {
    console.log('在这停顿');
    return of(this.token);
  }

  override refresh() {
    return of(this.token);
  }

  override logout() {
    return of({});
  }

  override me() {
    console.log('在这停顿');
    return of(admin);
  }

  override menu() {
    return this.http
      .get<{ menu: Menu[] }>('assets/data/menu.json?_t=' + Date.now())
      .pipe(map(res => res.menu));
  }
}
