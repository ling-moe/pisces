
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServiceConsumer } from '../musubi.types';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserServiceConsumer {

  constructor(protected http: HttpClient) {
  }

  hello(person: string): Observable<string> {
    throw new Error("Method need implementation")
  }

}
  