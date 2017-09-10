import { IAppConfig } from './app.config';
import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
  apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
  // apiEndpoint: 'http://114.198.172.94:8088/api'
  // apiEndpoint: 'http://192.168.66.10:8088/api'
  apiEndpoint: 'http://192.168.66.10:5000/api'
}

// export class AppSettings {
//   public static API_ENDPOINT='http://114.198.172.94:8088/api';
// }