import { ActionContext } from "vuex";
import axios from "axios";
import { State } from "../../index";

import { MerchantModuleState } from "./merchantModule";
import { CreateMerchantAccountPayload } from "@/store/types";

const MERCHANT = "merchant";
type Context = ActionContext<MerchantModuleState, State>;

const getMerchantAccount = async (context: Context) => {
  try {
    context.commit("toggleLoading", true);
    // get UserMerchant Account
    const response = await axios.get('/merchant/account');
    if (response.status === 200) {
      context.commit("setMerchantAccount", response.data.data);
    }
  } catch {} finally {
    context.commit("toggleLoading", false);
  }
};

const registerMerchantAccount = async (
  context: Context,
  payload: CreateMerchantAccountPayload
) => {
  try {
    context.commit("toggleLoading", true);

    const response = await axios.post('/merchant/register', payload);

    context.commit("setMerchantAccount", response.data.data);
  } catch(e: any) {
    context.commit("app/toggleAlert", 'Sorry, you can only have one merchant Account.', {
      root: true,
    });
  } finally {
    context.commit("toggleLoading", false);
  }
};

export default {
  getMerchantAccount,
  registerMerchantAccount,
};
