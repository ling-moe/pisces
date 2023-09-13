import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { initStandard } from '@pisces/common';

initStandard();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


