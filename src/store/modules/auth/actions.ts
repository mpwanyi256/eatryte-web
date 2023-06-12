import { ActionContext } from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, updateDoc, setDoc } from "firebase/firestore";

import { AuthModuleState } from "./authModule";
import { State } from "../../index";
import {
  UpdateProfilePayload,
  createAccountPayload,
  User,
} from "@/store/types";
import { UserTypes } from "@/store/enum";
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

const toggleUserState = (context: Context, user: User) => {
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

const signUpUserWithEmailAndPassword = async (
  context: Context,
  payload: createAccountPayload
) => {
  try {
    context.commit("toggleLoading", true);
    const auth = getAuth();
    const { email, password, firstName, lastName } = payload;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { email, uid, emailVerified, photoURL } = userCredential.user;
        const userProfile = {
          email,
          firstName,
          lastName,
          photoURL,
          mobileNumber: "",
          type: UserTypes.USER,
        };
        setDoc(doc(db, "profiles", uid), userProfile)
          .then(() => {
            const user: User = {
              email,
              id: uid,
              emailVerified,
              type: UserTypes.USER,
              profile: {
                firstName,
                lastName,
                mobileNumber: "",
                photoURL,
              },
            };
            toggleUserState(context, user);
          })
          .catch((error) => {
            showAlert(context, error.message);
          });
      })
      .catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        showAlert(context, "Something went wrong");
      });

    showAlert(context, "Account created successfully");
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
  signUpUserWithEmailAndPassword,
};
