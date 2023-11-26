import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ThemeModule } from '../theme';
import { LOCAL_STORAGE, SharedModule } from './shared';
import { DefaultRoutesModule } from './routes/default-routes.module';
import { FormlyConfigModule } from './formly-config.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { musubiProvider } from '@pisces/musubi/client';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BASE_URL, httpInterceptorProviders } from './interceptors';
import { appInitializerProviders } from './initializers';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ThemeModule,
    DefaultRoutesModule,
    SharedModule,
    FormlyConfigModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseUrl },
    musubiProvider,
    httpInterceptorProviders,
    appInitializerProviders,
  ]
})
export class CoreFrontendModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreFrontendModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
