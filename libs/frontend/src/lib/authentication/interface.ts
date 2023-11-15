export interface User {
  [prop: string]: unknown;

  userId?: number | string | null;
  username?: string;
  email?: string;
  avatar?: string;
  roles?: string[];
  permissions?: string[];
}

export interface Token {
  [prop: string]: unknown;

  access_token: string;
  token_type?: string;
  expires_in?: number;
  exp?: number;
  refresh_token?: string;
}
