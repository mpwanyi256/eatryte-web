import { ActionContext } from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { AuthModuleState } from "./authModule";
import { State } from "../../index";

type Context = ActionContext<AuthModuleState, State>;

export interface EmailAuthPayload {
  email: string;
  password: string;
}

export interface AuthModuleActions {
  emailAuthentication(context: Context, payload: EmailAuthPayload): void;
}

const emailAuthentication = (context: Context, payload: EmailAuthPayload) => {
  console.log("emailAuthentication in progress...");
  const auth = getAuth();
  const { email, password } = payload;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Found user", user);
      // ...
    })
    .catch(() => {
      context.commit("toggleAlert", "Invalid email or password");
    });
};

const toggleUserState = (context: Context, user: any) => {
  context.commit("setUser", user);
};

export default {
  emailAuthentication,
};
