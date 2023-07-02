import { ActionContext } from "vuex";
import axios, { AxiosResponse } from "axios";
import {
  getAuth,
} from "firebase/auth";
import router from "@/router";

import { AuthModuleState } from "./authModule";
import { State } from "../../index";
import {
  UpdateProfilePayload,
  createAccountPayload,
  User,
} from "@/store/types";
import Router from "@/router";
import { db } from "@/main";

const COLLECTION_NAME = "profiles";

type Context = ActionContext<AuthModuleState, State>;

export interface EmailAuthPayload {
  email: string;
  password: string;
}

export interface AuthModuleActions {
  emailAuthentication(context: Context, payload: EmailAuthPayload): void;
}

const showAlert = (context: Context, message: string) => {
  context.commit("app/toggleAlert", message, {
    root: true,
  });
};

const emailAuthentication = async (context: Context, payload: EmailAuthPayload) => {
  try {
    context.commit("toggleLoading", true);
    const { email, password } = payload;
    const response = (await axios.post("/login/basic", {
      email,
      password,
      })) as AxiosResponse<any>;

    if (response.status === 200) {
      const currentPath = router.currentRoute.value.name as string;
      const { user, tokens } = response.data.data;
      localStorage.setItem('token', tokens.accessToken)
      localStorage.setItem('refreshToken', tokens.refreshToken)
      context.commit("setUser", user);

      if (currentPath === "login" || currentPath === "signup") {
        router.replace({ name: "home" });
      }
    }
  } catch(e: any) {
    showAlert(context, e.message);
  } finally {
    context.commit("toggleLoading", false);
  }
};

const getUser = async (context: Context) => {
  try {
    context.commit("toggleLoading", true);
    if (localStorage.getItem('token') === null) {
      if (!['login', 'signup'].includes(router.currentRoute.value.name as string)) {
        router.replace({ name: "home" });
      }
      return;
    }
    const response = (await axios.get("/profile/me")) as AxiosResponse<any>;

    if (response.status === 200) {
      const currentPath = router.currentRoute.value.name as string;
      const { user } = response.data.data;
      context.commit("setUser", user);

      if (currentPath === "login" || currentPath === "signup") {
        router.replace({ name: "home" });
      }
    } else {
      router.replace({ name: "home" });
    }
  } catch(e: any) {
    showAlert(context, e.message);
  } finally {
    context.commit("toggleLoading", false);
  }
};

const toggleUserState = (context: Context, user: User) => {
  context.commit("setUser", user);
};

const updateProfile = async (
  context: Context,
  payload: UpdateProfilePayload
) => {
  try {
    const { firstName, lastName, mobileNumber } = payload;
    context.commit("toggleLoading", true);

    const loggedInUser = context.state.user;
    if (!loggedInUser || !db) {
      showAlert(context, "Please login to update profile");
      return;
    }

    const response = (await axios.put("/profile", {
      firstName,
      lastName,
      mobileNumber,
    })) as AxiosResponse<any>;

    if(response.status === 200) {
      const updatedProfile = response.data.data;
      context.commit("setUpdatedProfile", updatedProfile);
      showAlert(context, "Profile updated successfully");
    } else {
      showAlert(context, "Failed to update profile");
    }
  } catch (e) {
    showAlert(context, "Failed to update profile");
  } finally {
    context.commit("toggleLoading", false);
  }
};

const signUpUserWithEmailAndPassword = async (
  context: Context,
  payload: createAccountPayload
) => {
  try {
    context.commit("toggleLoading", true);
    const auth = getAuth();
    const { email, password, firstName, lastName } = payload;

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const { email, uid, emailVerified, photoURL } = userCredential.user;
    //     const userProfile = {
    //       email,
    //       firstName,
    //       lastName,
    //       photoURL,
    //       mobileNumber: "",
    //       type: UserTypes.USER,
    //     };
    //     setDoc(doc(db, "profiles", uid), userProfile)
    //       .then(() => {
    //         const user: User = {
    //           email,
    //           id: uid,
    //           emailVerified,
    //           type: UserTypes.USER,
    //           profile: {
    //             firstName,
    //             lastName,
    //             mobileNumber: "",
    //             photoURL,
    //           },
    //         };
    //         toggleUserState(context, user);
    //       })
    //       .catch((error) => {
    //         showAlert(context, error.message);
    //       });
    //   })
    //   .catch(() => {
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     showAlert(context, "Something went wrong");
    //   });

    showAlert(context, "Account created successfully");
  } catch (e) {
    console.log(e);
  } finally {
    context.commit("toggleLoading", false);
  }
};

const signoutUser = async(context: Context) => {
  try {
    const response = (await axios.delete("/logout")) as AxiosResponse<any>;
    console.log("logout response", response.data);
    if (response.status === 200) {
      context.commit("setUser", null);
      if (Router.currentRoute.value.name === "login") return;
      Router.replace({ name: "home" });
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    }
  } catch(e: any) {
    showAlert(context, e.message);
  }
};

export default {
  emailAuthentication,
  toggleUserState,
  updateProfile,
  signoutUser,
  signUpUserWithEmailAndPassword,
  getUser,
};
