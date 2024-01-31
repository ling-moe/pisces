import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent, AppComponent, CoreFrontendModule, LOCAL_STORAGE, NAVIGATOR, authGuard, buildRoutes, environment } from '@pisces/frontend';

const routes = buildRoutes([
  {
    path: 'iam',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('./iam.module.frontend').then((m) => m.IamModuleFrontend),
  },
]);

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}

@NgModule({
  imports: [CoreFrontendModule, RoutesRoutingModule],
  providers: [
    { provide: LOCAL_STORAGE, useFactory: () => window?.localStorage },
    { provide: NAVIGATOR, useFactory: () => window?.navigator },
  ],
  bootstrap: [AppComponent],
})
export class AppModuleFrontend {}
