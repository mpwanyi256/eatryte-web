<template>
  <div class="login_form">
    <div class="login_form_wrapper">
      <h1>Welcome</h1>
      <p>Signin to continue</p>
      <form @submit.prevent="loginUser()">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            v-model.trim="email"
            type="email"
            placeholder="Email"
          >
        </div>
        <div class="form-group">
          <label for="username">Password</label>
          <input
            v-model.trim="password"
            type="password"
            placeholder="Password"
          >
        </div>
        <div class="form-group">
          <p
            v-if="error"
            class="error text-center mb-3"
          >
            {{ error }}
          </p>
          <v-progress-linear
            v-if="loading"
            indeterminate
          />
          <button
            class="btn"
            loading="white"
            type="submit"
            :disabled="!isValidForm"
            @click="loginUser()"
          >
            SIGN IN
          </button>
          <AuthProviderUI />
        </div>
      </form>
      <router-link to="">
        <p>Forgot your password?</p>
      </router-link>
      <router-link :to="{ name: 'signup' }">
        <p>Don't have an account? Signup</p>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { EmailAuthPayload } from "@/store/modules/auth/actions";
import { State } from "@/store/index";
import AuthProviderUI from "@/components/auth/AuthProviderUI.vue";
import validator from "validator";

export default defineComponent({
  name: "LoginForm",
  components: {
    AuthProviderUI,
  },
  setup() {
    const store = useStore<State>();
    const email = ref<string>("");
    const password = ref<string>("");
    const error = computed(() => store.state.app.alertMessage);

    const loading = computed(() => store.state.auth.loading);

    const loginUser = async () => {
      const payload: EmailAuthPayload = {
        email: email.value,
        password: password.value,
      };
      await store.dispatch("auth/emailAuthentication", payload);
    };

    const isValidForm = computed(() => {
      return validator.isEmail(email.value) && password.value.length > 5;
    });

    return {
      email,
      password,
      error,
      loading,
      isValidForm,
      loginUser,
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
  background-color: $white !important;

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

    form {
      margin-bottom: 1.5rem !important;
      margin-top: 3rem !important;
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
