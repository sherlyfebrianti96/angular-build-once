// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {environment as prod} from './environment.prod';
import {environment as dev} from './environment.dev';

let config: any;

const req = new XMLHttpRequest();
req.open('GET', 'config.json', false);
req.onload = () => {
  config = JSON.parse(req.responseText.toString());
};
req.send(null);

let environment: any = {};
if (config) {
  switch (config.environment) {
    case 'prod':
      environment = prod;
      break;
    default:
      environment = dev;
      break;
  }
}

export {environment};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
