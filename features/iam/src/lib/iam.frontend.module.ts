import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@pisces/shared';
import { UserListComponent } from './view/list/list.component';
import { CreateComponent } from './view/create/create.component';
import { EditComponent } from './view/edit/edit.component';

const COMPONENTS = [UserListComponent];

const iamFrontendRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserListComponent
      },
    ],
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(iamFrontendRoutes)],
  declarations: [...COMPONENTS, CreateComponent, EditComponent],
})
export class IamFrontendModule {}
