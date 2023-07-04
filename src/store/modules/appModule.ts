import axios from "axios";
import { ActionContext } from "vuex";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import config from "@/config/appConfig";
import { State } from "../";
import { Country, BusinessType, FirebaseFileUploafPayload } from "../types";

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
  businessTypes: Array<BusinessType>;
  uploading: boolean;
  uploadProgress: number;
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
    businessTypes: [],
    uploading: false,
    uploadProgress: 0,
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
    setBusinessTypes(state: AppModuleState, businessTypes: Array<BusinessType>) {
      state.businessTypes = businessTypes;
    },
    setUploading(state: AppModuleState, uploading: boolean) {
      state.uploading = uploading;
    },
    setUploadProgress(state: AppModuleState, uploadProgress: number) {
      state.uploadProgress = uploadProgress;
    }
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
    },
    getBusinessTypes({ commit }: Context) {
      axios.get('/business-types')
        .then((response) => {
          commit("setBusinessTypes", response.data.data);
        });
    },
    uploadFile({ commit }: Context, payload: FirebaseFileUploafPayload) {
      try {
        commit("setUploading", true);
        const { file, uniquePath, bucketName, cb } = payload;
        const storage = getStorage();
        const storageRef = ref(storage, `${bucketName}/${uniquePath}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const setError = (error: string) => {
          commit("toggleAlert", error);
          commit("setUploading", false);
        }

        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            commit("setUploadProgress", Math.round(progress));
            switch (snapshot.state) {
              case 'paused':
                setError('Upload is paused');
                break;
              case 'running':
                setError('Upload is running');
                break;
            }
          }, 
          (error) => {
            switch (error.code) {
              case 'storage/unauthorized':
                setError('User does not have permission to access the object');
                break;
              case 'storage/canceled':
                setError('User canceled the upload');
                break;
              case 'storage/unknown':
                setError('Unknown error occurred, upload failed');
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              // check if url is valid
              if(!downloadURL) {
                setError('Upload failed, please try again');
                return;
              }
              cb(downloadURL);
            });
          }
        );
      } catch(e) {
        console.log(e);
      } finally {
        commit("setUploading", false);
      }
    },
  },
  getters: {
    countrySet: (state: AppModuleState) => {
      return state.selectedCountry !== null;
    },
  },
};
