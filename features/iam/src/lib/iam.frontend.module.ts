import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

const iamFrontendRoutes: Route[] = [
  {
    path: '',
    children: [{ path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) }],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(iamFrontendRoutes), RouterModule],
})
export class IamFrontendModule {}
