import { NgModule } from '@angular/core';
import { SharedModule } from '@pisces/shared';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './view/list/list.component';

const COMPONENTS: any[] = [UserListComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class UserModule { }
