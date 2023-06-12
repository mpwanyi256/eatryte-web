import "firebaseui";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import appConfig from "@/config/appConfig";
import { initializeFirebase } from "@/config/db";

axios.defaults.baseURL = `${appConfig.api.baseURL}:${appConfig.api.port}`;

// Initialize firebase
const DB = initializeFirebase();
export const db = DB;

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// material design icons
import "@mdi/font/css/materialdesignicons.css";
import "@mdi/font/scss/materialdesignicons.scss";
import "@mdi/font/css/materialdesignicons.css";

// Global styles
import "@/assets/styles/main.scss";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
