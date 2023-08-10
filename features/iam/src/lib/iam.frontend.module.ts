import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '@pisces/shared';
import { UserListComponent } from './view/list/list.component';

const COMPONENTS = [UserListComponent];

const iamFrontendRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'user',
        children: [
          { path: 'list', component: UserListComponent }
        ]
      }
    ],
  },
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(iamFrontendRoutes)],
  declarations: [...COMPONENTS],
})
export class IamFrontendModule {}
