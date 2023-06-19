import { MerchantModuleState } from "./merchantModule";
import { MerchantAccount } from "@/store/types";

const setMerchantAccount = (
  state: MerchantModuleState,
  account: MerchantAccount
) => {
  state.account = account;
};

const toggleLoading = (state: MerchantModuleState, status: boolean) => {
  state.loading = status;
};

export default {
  setMerchantAccount,
  toggleLoading,
};
