import { apiKeys, masterFirebaseConfig } from '../../.env.js'

export const environment = {
  production: false,
  api: apiKeys,
  firebase: masterFirebaseConfig
};

