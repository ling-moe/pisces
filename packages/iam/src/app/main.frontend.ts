import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initStandard } from '@pisces/common';

import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent, AppComponent, CoreFrontendModule, LOCAL_STORAGE, NAVIGATOR, authGuard, buildRoutes, environment } from '@pisces/frontend';

const routes = buildRoutes([
  {
    path: 'iam',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('./infra/config/iam.module.frontend').then((m) => m.IamModuleFrontend),
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

export let INJECTOR: Injector;

initStandard();
platformBrowserDynamic()
  .bootstrapModule(AppModuleFrontend)
  .then(app => {
    INJECTOR = app.injector;
  })
  .catch((err) => console.error(err));
