import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { buildRoutes, AppComponent, AdminLayoutComponent, environment, authGuard, CoreFrontendModule } from '@pisces/frontend';
import { initStandard } from '@pisces/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';


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
export class RoutesRoutingModule {}

@NgModule({
  imports: [CoreFrontendModule, RoutesRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class IamAppModule {}

initStandard();
platformBrowserDynamic()
  .bootstrapModule(IamAppModule)
  .catch((err) => console.error(err));
