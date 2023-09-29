import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@pisces/shared';
import { UserListComponent } from './view/user/list/list.component';
import { UserCreateComponent } from './view/user/create/create.component';
import { UserEditComponent } from './view/user/edit/edit.component';
import { RoleListComponent } from './view/role/list/list.component';
import { MenuListComponent } from './view/menu/list/list.component';
import { TransferComponent } from './view/menu/transfer/transfer.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

const COMPONENTS = [UserListComponent, UserCreateComponent, UserEditComponent, MenuListComponent];

const iamFrontendRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserListComponent,
      },
      {
        path: 'role',
        component: RoleListComponent,
      },
      {
        path: 'menu',
        component: MenuListComponent,
      },
    ],
  },
];
@NgModule({
  imports: [SharedModule, DragDropModule, RouterModule.forChild(iamFrontendRoutes)],
  declarations: [...COMPONENTS, RoleListComponent, TransferComponent],
})
export class IamFrontendModule {}
