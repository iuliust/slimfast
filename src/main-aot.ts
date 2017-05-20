import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
try {
  const window = global;
  global['window'] = window;
} catch (e) {
  console.error(e);
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
