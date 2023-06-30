export interface NavRoute {
  icon: string;
  name: string;
  title?: string;
  description?: string;
}

// Listing
export interface routeInfo {
  path: {
    name: string;
    params?: any;
    query?: any;
    linkTitle?: string;
  };
  title: string;
}

// Global App config
export interface AppConfig {
  api: {
    baseURL: string;
    port: number;
    apiKey: string;
  };
  app: {
    name: string;
    baseUrl: string;
    version: string;
  };
  fb: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
}
