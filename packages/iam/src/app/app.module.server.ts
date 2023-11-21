import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from '@pisces/frontend';
import { IamAppModule } from '../main-frontend';


@NgModule({
  imports: [
    IamAppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
