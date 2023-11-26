import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';

import { AppComponent, LOCAL_STORAGE, NAVIGATOR } from '@pisces/frontend';
import { IamAppModule } from './iam-app.module';

@NgModule({
  imports: [
    IamAppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideClientHydration(),
    { provide: LOCAL_STORAGE, useValue: {getItem() {},setItem() {},removeItem() {},clear() {} } },
    { provide: NAVIGATOR, useValue: { language: 'zh-CN' } },
  ],
})
export class AppServerModule { }
