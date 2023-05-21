import config from "@/config/appConfig";

export interface AppModuleState {
  baseUrl: string;
  name: string;
}

export default {
  namespaced: true,
  state: (): AppModuleState => ({
    baseUrl: config.app.baseUrl,
    name: config.app.name,
  }),
};
