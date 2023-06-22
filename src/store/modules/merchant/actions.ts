import { ActionContext } from "vuex";
import { State } from "../../index";
import { doc, collection, getDoc, setDoc } from "firebase/firestore";

import { MerchantModuleState } from "./merchantModule";
import { db } from "@/main";
import { CreateMerchantAccountPayload } from "@/store/types";

const MERCHANT = "merchants";
type Context = ActionContext<MerchantModuleState, State>;

const getMerchantAccount = async (context: Context, userId: string) => {
  try {
    context.commit("toggleLoading", true);
    // get UserMerchant Account
    const colRef = collection(db, MERCHANT);
    const accountDocRef = doc(colRef, userId);
    const docSnap = await getDoc(accountDocRef);

    if (docSnap.exists()) {
      context.commit("setMerchantAccount", docSnap.data());
    }
  } finally {
    context.commit("toggleLoading", false);
  }
};

const registerMerchantAccount = async (
  context: Context,
  payload: CreateMerchantAccountPayload
) => {
  try {
    context.commit("toggleLoading", true);
    // get UserMerchant Account
    const colRef = collection(db, MERCHANT);
    const accountDocRef = doc(colRef, payload.userId);
    await setDoc(accountDocRef, payload);

    context.commit("setMerchantAccount", payload);
  } finally {
    context.commit("toggleLoading", false);
  }
};

export default {
  getMerchantAccount,
  registerMerchantAccount,
};
