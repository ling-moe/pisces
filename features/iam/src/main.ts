import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule, buildRoutes } from '@pisces/frontend';
import { initStandard } from '@pisces/common';
import { AppComponent } from 'packages/frontend/src/app/app.component';
import { NgModule } from '@angular/core';
import { authGuard } from '@pisces/core';
import { environment } from 'packages/frontend/src/environments/environment';
import { AdminLayoutComponent } from 'packages/frontend/src/theme';
import { RouterModule } from '@angular/router';


const routes = buildRoutes([
  {
    path: 'iam',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('@pisces/iam/iam.frontend.module').then((m) => m.IamFrontendModule)
  },
])

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
  imports: [
    AppModule,
    RoutesRoutingModule
  ],
  bootstrap: [AppComponent],
})
class IamAppModule {}

initStandard();
platformBrowserDynamic().bootstrapModule(IamAppModule)
  .catch(err => console.error(err));


