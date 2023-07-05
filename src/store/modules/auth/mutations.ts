import { AuthModuleState } from "./authModule";
import { UserProfile, User } from "@/store/types";

const toggleLoading = (state: AuthModuleState, status: boolean) => {
  state.loading = status;
};

const toggleAlert = (state: AuthModuleState, message: string) => {
  state.alertMessage = message;

  setTimeout(() => {
    state.alertMessage = "";
  }, 3000);
};

const setUpdatedProfile = (state: AuthModuleState, profile: UserProfile) => {
  const { firstName, lastName, mobileNumber } = profile;
  if (!state.user) return;
  state.user.profile = profile;
};

const setUser = (state: AuthModuleState, user: User | null) => {
  state.user = user;
};

const resetStore = (state: AuthModuleState) => {
  state.user = null;
  state.loading = false;
  state.alertMessage = "";
};

export default {
  toggleAlert,
  setUser,
  setUpdatedProfile,
  toggleLoading,
  resetStore,
};
