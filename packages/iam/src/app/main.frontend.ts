import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initStandard } from '@pisces/common';
import { AppModuleFrontend } from './infra/config/app.module.frontend';

initStandard();
platformBrowserDynamic()
  .bootstrapModule(AppModuleFrontend)
  .catch((err) => console.error(err));
