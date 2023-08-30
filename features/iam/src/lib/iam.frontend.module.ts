import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@pisces/shared';
import { UserListComponent } from './view/user/list/list.component';
import { UserCreateComponent } from './view/user/create/create.component';
import { UserEditComponent } from './view/user/edit/edit.component';
import { RoleListComponent } from './view/role/list/list.component';
import { MenuListComponent } from './view/menu/list/list.component';

const COMPONENTS = [UserListComponent,UserCreateComponent, UserEditComponent, MenuListComponent];

const iamFrontendRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserListComponent
      },
      {
        path: 'role',
        component: RoleListComponent
      },
      {
        path: 'menu',
        component: MenuListComponent
      },
    ],
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(iamFrontendRoutes)],
  declarations: [...COMPONENTS, RoleListComponent],
})
export class IamFrontendModule {}
