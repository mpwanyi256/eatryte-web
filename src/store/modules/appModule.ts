import axios from "axios";
import { ActionContext } from "vuex";

import config from "@/config/appConfig";
import { State } from "../";
import { Country } from "../types"

export interface QuickLink {
  title: string;
  icon: string;
  path: string;
  style: string;
}

export interface AppModuleState {
  baseUrl: string;
  name: string;
  drawer: boolean;
  quickLinks: Array<QuickLink>;
  alertMessage: string;
  countries: Array<Country>;
  selectedCountry: Country | null;
}

type Context = ActionContext<AppModuleState, State>;

export default {
  namespaced: true,
  state: (): AppModuleState => ({
    baseUrl: config.app.baseUrl,
    name: config.app.name,
    drawer: false,
    quickLinks: [
      {
        title: "Home",
        icon: "mdi-home-outline",
        path: "home",
        style: "",
      },
      {
        title: "Trending",
        icon: "mdi-map-marker-outline",
        path: "trending",
        style: "hide-on-mobile",
      },
      {
        title: "Cart",
        icon: "mdi-cart-outline",
        path: "cart",
        style: "",
      },
      {
        title: "Favorites",
        icon: "mdi-heart-outline",
        path: "favorites",
        style: "hide-on-mobile",
      },
      {
        title: "Profile",
        icon: "mdi-account-outline",
        path: "profile",
        style: "",
      },
    ],
    alertMessage: "",
    countries: [],
    selectedCountry: null,
  }),
  mutations: {
    toggleDrawer(state: AppModuleState) {
      state.drawer = !state.drawer;
    },
    toggleAlert(state: AppModuleState, message: string) {
      state.alertMessage = message;

      setTimeout(() => {
        state.alertMessage = "";
      }, 3000);
    },
    setCountries(state: AppModuleState, countries: Array<Country>) {
      state.countries = countries;
      const country = countries[0];
      const storedCountry = localStorage.getItem("country");
      if(!state.selectedCountry && storedCountry) {
        state.selectedCountry = JSON.parse(storedCountry);
      } else {
        state.selectedCountry = country;
        localStorage.setItem("country", JSON.stringify(country));
      }
    },
    setCountry(state: AppModuleState, country: Country) {
      const storedCountry = localStorage.getItem("country");
      if(!state.selectedCountry && storedCountry) {
        state.selectedCountry = JSON.parse(storedCountry);
      } else {
        state.selectedCountry = country;
        localStorage.setItem("country", JSON.stringify(country));
      }
    },
  },
  actions: {
    toggleDrawer({ commit }: Context) {
      commit("toggleDrawer");
    },
    alertUser({ commit }: Context, message: string) {
      commit("toggleAlert", message);
    },
    getCountries({ commit }: Context) {
      axios.get('/countries')
        .then((response) => {
          commit("setCountries", response.data.data);
        });
    }
  },
  getters: {
    countrySet: (state: AppModuleState) => {
      return state.selectedCountry !== null;
    },
  },
};
