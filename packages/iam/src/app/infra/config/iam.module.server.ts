import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';

import { AppComponent, LOCAL_STORAGE, NAVIGATOR } from '@pisces/frontend';
import { AppModuleFrontend } from './app.module.frontend';

@NgModule({
  imports: [
    AppModuleFrontend,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideClientHydration(),
    { provide: LOCAL_STORAGE, useValue: {getItem() {},setItem() {},removeItem() {},clear() {} } },
    { provide: NAVIGATOR, useValue: { language: 'zh-CN' } },
  ],
})
export default class AppServerModule { }
