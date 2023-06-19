import { MerchantModuleState } from "./merchantModule";

const busunsessTypes = (state: MerchantModuleState) => {
  return state.businessTypes;
};

const merchantAccount = (state: MerchantModuleState) => {
  return state.account;
};

const loading = (state: MerchantModuleState) => {
  return state.loading;
};

export default {
  merchantAccount,
  loading,
  busunsessTypes,
};
