import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "@pisces/frontend";
import { MenuListComponent } from "../../view/menu/list/list.component";
import { TransferComponent } from "../../view/menu/transfer/transfer.component";
import { RoleListComponent } from "../../view/role/list/list.component";
import { RoleAuthorizationComponent } from "../../view/role/role-authorization/role-authorization.component";
import { UserAssignComponent } from "../../view/role/user-assign/user-assign.component";
import { UserCreateComponent } from "../../view/user/create/create.component";
import { UserEditComponent } from "../../view/user/edit/edit.component";
import { UserListComponent } from "../../view/user/list/list.component";
import { DesignerComponent } from "../../view/domain-designer/designer/designer.component";
import { ProductComponent } from "../../view/domain-designer/product/product.component";

const COMPONENTS = [
  UserListComponent,
  UserCreateComponent,
  UserEditComponent,
  MenuListComponent];

const iamFrontendRoutes: Route[] = [
  {
    path: "domain",
    children: [
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "designer/:id",
        component: DesignerComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "user",
        component: UserListComponent
      },
      {
        path: "role",
        component: RoleListComponent
      },
      {
        path: "menu",
        component: MenuListComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    SharedModule,
    DragDropModule,
    RouterModule.forChild(iamFrontendRoutes),
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    ...COMPONENTS,
    RoleListComponent,
    TransferComponent,
    RoleAuthorizationComponent,
    UserAssignComponent,
    ProductComponent,
    DesignerComponent,
  ]
})
export class IamModuleFrontend {
}
