import { ActionContext } from "vuex";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

import { AuthModuleState } from "./authModule";
import { State } from "../../index";
import { UpdateProfilePayload } from "@/store/types";
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

const emailAuthentication = (context: Context, payload: EmailAuthPayload) => {
  try {
    context.commit("toggleLoading", true);
    const auth = getAuth();
    const { email, password } = payload;
    signInWithEmailAndPassword(auth, email, password).catch(() => {
      showAlert(context, "Invalid email or password");
    });
  } finally {
    context.commit("toggleLoading", false);
  }
};

const toggleUserState = (context: Context, user: any) => {
  context.commit("setUser", user);
};

const updateProfile = async (
  context: Context,
  payload: UpdateProfilePayload
) => {
  try {
    const { id, firstName, lastName, mobileNumber } = payload;
    context.commit("toggleLoading", true);

    const loggedInUser = context.state.user;
    if (!loggedInUser || !db) {
      showAlert(context, "Please login to update profile");
      return;
    }

    // Update user profile
    const profileDocRef = doc(db, COLLECTION_NAME, id);
    updateDoc(profileDocRef, {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
    })
      .then(() => {
        context.commit("updateProfile", {
          firstName,
          lastName,
          mobileNumber,
        });
        showAlert(context, "Profile updated successfully");
      })
      .catch(() => {
        showAlert(context, "Failed to update profile");
      });
  } catch (e) {
    console.log(e);
  } finally {
    context.commit("toggleLoading", false);
  }
};

const signoutUser = (context: Context) => {
  const auth = getAuth();
  signOut(auth).then(() => {
    context.commit("setUser", null);
    Router.replace({ name: "home" });
  });
};

export default {
  emailAuthentication,
  toggleUserState,
  updateProfile,
  signoutUser,
};
