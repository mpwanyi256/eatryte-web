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

const updateProfile = (state: AuthModuleState, profile: UserProfile) => {
  const { firstName, lastName, mobileNumber } = profile;
  if (!state.user) return;
  state.user.profile.firstName = firstName;
  state.user.profile.lastName = lastName;
  state.user.profile.mobileNumber = mobileNumber;
};

const setUser = (state: AuthModuleState, user: User | null) => {
  state.user = user;
};

export default {
  toggleAlert,
  setUser,
  updateProfile,
  toggleLoading,
};
