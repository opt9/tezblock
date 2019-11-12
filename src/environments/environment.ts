// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mainnet: {
    rpc: 'https://tezos-node.prod.gke.papers.tech',
    conseil: 'https://conseil-prod.cryptonomic-infra.tech'
  },
  carthagenet: {
    rpc: 'https://tezos-carthagenet-node-1.kubernetes.papers.tech',
    conseil: 'https://tezos-carthagenet-conseil-1.kubernetes.papers.tech'
  },

  babylonnet: {
    rpc: 'https://tezos-dev.cryptonomic-infra.tech',
    conseil: 'https://conseil-dev.cryptonomic-infra.tech'
  },
  conseilBaseUrl: 'CONSEIL_BASE_URL',
  conseilApiKey: 'CONSEIL_API_KEY',
  proFontAwesomeAvailable: false
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
