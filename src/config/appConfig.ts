import { AppConfig } from "@/types/generics";

const appConfig: AppConfig = {
  api: {
    baseURL: process.env.VUE_APP_API_BASE_URL || "http://localhost",
    port: process.env.VUE_APP_PORT || 3000,
    apiKey: process.env.VUE_APP_API_KEY || "",
  },
  app: {
    name: process.env.VUE_APP_NAME || "Eatryte",
    baseUrl: "/",
    version: "1.0.0",
  },
  fb: {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY || "",
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN || "",
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL || "",
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.VUE_APP_FIREBASE_APP_ID || "",
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID || "",
  },
};

export default appConfig;
