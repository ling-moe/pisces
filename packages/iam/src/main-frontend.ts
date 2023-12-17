import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initStandard } from '@pisces/common';
import { IamAppModule } from './app/iam-app.module';

initStandard();
platformBrowserDynamic()
  .bootstrapModule(IamAppModule)
  .catch((err) => console.error(err));
