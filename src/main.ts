import "firebaseui";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeFirebase } from "@/config/db";

// Initialize axios
import "@/plugins/axiosConfig";

// Initialize firebase
const DB = initializeFirebase();
export const db = DB;

// Set all App data
import "@/config/appData";

// material design icons
import "@mdi/font/css/materialdesignicons.css";
import "@mdi/font/scss/materialdesignicons.scss";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Global styles
import "@/assets/styles/main.scss";

// eCharts
import * as echarts from "echarts/core";
import Echarts, { THEME_KEY } from "vue-echarts";
import {
  BarChart,
  LineChart,
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // Dataset
  DatasetComponent,
  // Built-in transform (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import type {
  // The series option types are defined with the SeriesOption suffix
  BarSeriesOption, 
  LineSeriesOption,
} from 'echarts/charts';
import type {
  // The component option types are defined with the ComponentOption suffix
  TitleComponentOption, 
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption
} from 'echarts/components';
import type { 
  ComposeOption, 
} from 'echarts/core';
// Create an Option type with only the required components and charts via ComposeOption
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// Echarts.registerTheme('my_theme', {
//   backgroundColor: '#ffffff'
// });

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.component('Vchart', Echarts);
app.mount("#app");
