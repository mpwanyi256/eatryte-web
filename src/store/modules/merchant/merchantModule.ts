import { MerchantAccount } from "@/store/types";
import { BusinessType } from "@/store/enum";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export interface MerchantModuleState {
  account: MerchantAccount | null;
  loading: boolean;
  businessTypes: BusinessType[];
}

const state: MerchantModuleState = {
  account: null,
  loading: false,
  businessTypes: [
    BusinessType.SOLE_PROPRIETORSHIP,
    BusinessType.PARTNERSHIP,
    BusinessType.CORPORATION,
    BusinessType.COOPERATIVE,
  ],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
