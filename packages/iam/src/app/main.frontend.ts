import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initStandard } from '../../../../libs/common/src';
import { AppModuleFrontend } from './infra/config/app.module.frontend';

initStandard();
platformBrowserDynamic()
  .bootstrapModule(AppModuleFrontend)
  .catch((err) => console.error(err));
