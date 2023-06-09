import { AuthModuleState } from "./authModule";

const toggleAlert = (state: AuthModuleState, message: string) => {
  state.alertMessage = message;

  setTimeout(() => {
    state.alertMessage = "";
  }, 3000);
};

const setUser = (state: AuthModuleState, user: any) => {
  state.user = user;
};

export default {
  toggleAlert,
  setUser,
};
