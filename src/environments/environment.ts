// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://sukhpinder-sfin624:9093/pws-api/',
  baseUrl: 'https://auth.pingone.asia/',
  environmentId: '30168365-9897-4b5b-a112-01b97ebe170b',
  clientId: '1ee458aa-75b4-43dd-9661-5091122387d0',
  clientSecret: '',
  //redirectUri: 'http://localhost:4200',
  redirectUri:'https://sukhpinder-sfin624:9093/pws-ui',
  scope: 'openid profile p1:read:user'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
