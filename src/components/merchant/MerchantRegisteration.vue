<template>
  <div class="merchant_registration">
    <h3>Merchant Registration</h3>
    <LoadingSpinner v-if="loading" />
    <form
      v-else
      class="merchant_registration_form"
      @submit.prevent="registerMerchant"
    >
      <div class="form-group">
        <label for="businessname">Business Name</label>
        <input
          v-model.trim="businessName"
          type="text"
          name="businessname"
          placeholder="Business Name"
        >
      </div>
      <div class="form-group">
        <label for="description">Brief description</label>
        <input
          v-model.trim="description"
          type="text"
          name="description"
          placeholder="eg. We are a software solutions company"
        >
      </div>
      <div class="form-group">
        <label for="tin">Tin Number</label>
        <input
          v-model.trim="tinNumber"
          type="text"
          name="tin"
          placeholder="Tin Number"
        >
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          v-model.trim="address"
          type="text"
          name="address"
          placeholder="Business address"
        >
      </div>
      <div class="form-group">
        <label for="contact">Contact Number</label>
        <input
          v-model.trim="contact"
          type="text"
          name="contact"
          placeholder="Contact number"
        >
      </div>
      <div class="form-group">
        <label for="email">Business email</label>
        <input
          v-model.trim="email"
          type="email"
          name="email"
          placeholder="An email we will use for all business communication"
        >
      </div>
      <div class="form-group">
        <label for="type">Business type</label>
        <v-select
          v-model="businessType"
          :items="BuzTypes"
          name="type"
          item-value="_id"
          item-title="name"
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
import { State } from "@/store";
import validator from "validator";

import LoadingSpinner from "@/components/generics/LoadingSpinner.vue";

export default defineComponent({
  name: "MerchantRegisteration",
  components: {
    LoadingSpinner,
  },
  setup() {
    const store = useStore<State>();
    const BuzTypes = computed(
      () => store.state.app.businessTypes
    );
    const userAccount = computed(() => store.state.auth.user);
    const loading = computed(() => store.state.merchant.loading);

    const businessName = ref<string>("");
    const address = ref<string>("");
    const description = ref<string>("");
    const tinNumber = ref<string>("");
    const contact = ref<string>("");
    const email = ref<string>("");
    const businessType = ref<string>("");

    const isValidForm = computed(() => {
      return (
        validator.isLength(businessName.value, { min: 3 }) &&
        validator.isLength(tinNumber.value, { min: 3 }) &&
        validator.isLength(address.value, { min: 3 }) &&
        validator.isLength(contact.value, { min: 3 }) &&
        validator.isEmail(email.value) &&
        validator.isLength(businessType.value, { min: 3 })
      );
    });

    const registerMerchant = async () => {
      if (isValidForm.value === false || !userAccount.value) return;
      const payload = {
        email: email.value,
        businessName: businessName.value,
        businessType: businessType.value,
        address: address.value,
        certificateOfRegistration: "",
        contactNumber: contact.value,
        description: description.value,
        tinNumber: tinNumber.value,
      };
      await store.dispatch("merchant/registerMerchantAccount", payload);
    };

    return {
      businessName,
      email,
      description,
      tinNumber,
      address,
      contact,
      businessType,
      BuzTypes,
      isValidForm,
      userAccount,
      loading,
      registerMerchant,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.merchant_registration {
  --bs-body-color-rgb: 33, 37, 41;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: $white;
  box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075);
  border-radius: 0.375rem;

  &_form {
    margin-top: 1.5rem;

    :deep(.form-group) {
      margin-bottom: 0.8rem;
    }
  }
}
</style>
