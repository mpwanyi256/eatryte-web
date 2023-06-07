import { RouteRecordRaw } from "vue-router";

export interface NavRoute {
  icon: string;
  name: string;
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
  };
  app: {
    name: string;
    baseUrl: string;
    version: string;
  };
}
