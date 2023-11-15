import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, buildRoutes, AppComponent, AdminLayoutComponent, environment } from '@pisces/frontend';
import { initStandard } from '@pisces/common';
import { NgModule } from '@angular/core';
import { authGuard } from '@pisces/core';
import { RouterModule } from '@angular/router';

const routes = buildRoutes([
  {
    path: 'iam',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('./app/iam.frontend.module').then((m) => m.IamFrontendModule),
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
class RoutesRoutingModule {}

@NgModule({
  imports: [AppModule, RoutesRoutingModule],
  bootstrap: [AppComponent],
})
class IamAppModule {}

initStandard();
platformBrowserDynamic()
  .bootstrapModule(IamAppModule)
  .catch((err) => console.error(err));
