import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import UniqueTokenStrategy from "passport-unique-token";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenStrategy extends PassportStrategy(UniqueTokenStrategy) {
  constructor(private authService: AuthService) {
    super((token) => this.authService.getUser(token));
  }
}
