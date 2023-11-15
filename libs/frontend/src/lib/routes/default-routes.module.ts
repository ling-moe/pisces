import { NgModule } from '@angular/core';
import { SharedModule } from '@pisces/shared';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { Routes } from '@angular/router';
import { AdminLayoutComponent, AuthLayoutComponent } from '../../theme';
import { authGuard } from '../authentication';

export function buildRoutes(routes: Routes): Routes{
  return [
    {
      path: '',
      component: AdminLayoutComponent,
      canActivate: [authGuard],
      canActivateChild: [authGuard],
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: '403', component: Error403Component },
        { path: '404', component: Error404Component },
        { path: '500', component: Error500Component },
      ],
    },
    {
      path: 'auth',
      component: AuthLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
      ],
    },
    ...routes,
    { path: '**', redirectTo: 'dashboard' },
  ];
}


const COMPONENTS: any[] = [
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class DefaultRoutesModule {}
