import { AppConfig } from "@/types/generics";

const appConfig: AppConfig = {
  api: {
    baseURL: process.env.VUE_APP_API_URL,
    port: 3020,
  },
  app: {
    name: process.env.VUE_APP_NAME,
    baseUrl: "/",
    version: "1.0.0",
  },
};

export default appConfig;
