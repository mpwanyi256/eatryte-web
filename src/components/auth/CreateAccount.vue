<template>
  <div class="login_form">
    <div class="login_form_wrapper">
      <h1>Hello!</h1>
      <p>Create account to continue</p>
      <form @submit.prevent="createAccount">
        <div class="form-group">
          <label for="email">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            v-model="accountInfo.firstName"
          />
        </div>
        <div class="form-group">
          <label for="email">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            v-model="accountInfo.lastName"
          />
        </div>
        <div class="form-group">
          <label for="username">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            v-model="accountInfo.email"
          />
        </div>
        <div class="form-group">
          <label for="username">Password</label>
          <input
            type="password"
            placeholder="Password"
            v-model="accountInfo.password"
          />
        </div>
        <div class="form-group">
          <button :disabled="!isValidForm" class="btn" type="submit">
            CREATE ACCOUNT
          </button>
        </div>
      </form>
      <router-link :to="{ name: 'login' }"
        ><p>Already have an account? Signin</p></router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { createAccountPayload } from "@/store/types";
import { useStore } from "vuex";
import validator from "validator";

export default defineComponent({
  name: "CreateAccount",
  components: {},
  setup() {
    const Store = useStore();
    const accountInfo = ref<createAccountPayload>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    const isValidForm = computed(() => {
      if (
        validator.isEmpty(accountInfo.value.firstName) ||
        validator.isEmpty(accountInfo.value.lastName) ||
        validator.isEmpty(accountInfo.value.email) ||
        validator.isEmpty(accountInfo.value.password) ||
        validator.isEmail(accountInfo.value.email) === false
      ) {
        return false;
      }
      return true;
    });

    const createAccount = async () => {
      Store.dispatch("auth/signUpUserWithEmailAndPassword", accountInfo.value);
    };

    return {
      accountInfo,
      isValidForm,
      createAccount,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.login_form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
      margin: 0;
    }

    p {
      color: #424242;
      letter-spacing: 0.2px;
      margin: 0;
      margin-bottom: 1rem;
      display: block;
    }

    a {
      text-decoration: none;
      p {
        text-align: center !important;
        color: #424242;
        letter-spacing: 0.2px;
        margin-top: 0;
        margin-bottom: 1rem;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
}
</style>
