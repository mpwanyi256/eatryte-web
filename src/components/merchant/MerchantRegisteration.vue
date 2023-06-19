<template>
  <div class="merchant_registration">
    <h3>Merchant Registration</h3>
    <form class="merchant_registration_form" @submit.prevent="registerMerchant">
      <div class="form-group">
        <label for="businessname">Business Name</label>
        <input
          type="text"
          name="businessname"
          v-model.trim="businessName"
          placeholder="Business Name"
        />
      </div>
      <div class="form-group">
        <label for="tin">Tin Number</label>
        <input
          type="text"
          name="tin"
          v-model.trim="tinNumber"
          placeholder="Tin Number"
        />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          name="address"
          v-model.trim="address"
          placeholder="Business address"
        />
      </div>
      <div class="form-group">
        <label for="contact">Contact Number</label>
        <input
          type="text"
          name="contact"
          v-model.trim="contact"
          placeholder="Contact number"
        />
      </div>
      <div class="form-group">
        <label for="type">Business type</label>
        <v-select
          v-model="businessType"
          :items="BusinessTypes"
          name="type"
          density="compact"
          variant="outlined"
          placeholder="Select business type"
        />
      </div>
      <div class="form-group">
        <button
          class="btn"
          loading="white"
          type="submit"
          :disabled="!isValidForm"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import validator from "validator";
import { State } from "@/store";
import { CreateMerchantAccountPayload } from "@/store/types";
import { BusinessType } from "@/store/enum";

export default defineComponent({
  name: "MerchantRegisteration",
  setup() {
    const store = useStore<State>();
    const BusinessTypes = computed<BusinessType[]>(
      () => store.state.merchant.businessTypes
    );
    const userAccount = computed(() => store.state.auth.user);

    const businessName = ref<string>("");
    const tinNumber = ref<string>("");
    const address = ref<string>("");
    const contact = ref<string>("");
    // const email = ref<string>("");
    const businessType = ref<BusinessType>(BusinessType.SOLE_PROPRIETORSHIP);

    const isValidForm = computed(() => {
      return (
        // validator.isEmail(email.value) &&
        validator.isLength(businessName.value, { min: 3 }) &&
        validator.isLength(tinNumber.value, { min: 3 }) &&
        validator.isLength(address.value, { min: 3 }) &&
        validator.isLength(contact.value, { min: 3 }) &&
        validator.isLength(businessType.value, { min: 3 })
      );
    });

    const registerMerchant = async () => {
      if (isValidForm.value === false) return;
      const payload: CreateMerchantAccountPayload = {
        userId: userAccount.value!.id,
        businessName: businessName.value,
        tinNumber: tinNumber.value,
        address: address.value,
        contact: contact.value,
        businessType: businessType.value,
        isVerified: false,
        certificateOfRegistration: "",
        identification: "",
      };
      await store.dispatch("merchant/registerMerchantAccount", payload);
    };

    return {
      businessName,
      tinNumber,
      address,
      contact,
      businessType,
      BusinessTypes,
      isValidForm,
      userAccount,
      registerMerchant,
    };
  },
});
</script>
<style lang="scss" scoped>
.merchant_registration {
  display: flex;
  flex-direction: column;

  &_form {
    margin-top: 1.5rem;

    ::v-deep .form-group {
      margin-bottom: 0.8rem;
    }
  }
}
</style>
