<template>
  <div class="auth">
    <button
      class="btn"
      loading="white"
      type="submit"
      @click="signInWithGoogle()"
    >
      <v-icon class="mr-1">mdi-google</v-icon>
      <span>Sign in with Google</span>
    </button>
    <!-- <button
      class="btn"
      loading="white"
      type="submit"
      @click="signInWithFacebook()"
    >
      <v-icon left>mdi-facebook</v-icon>
      <span>Sign in with Facebook</span>
    </button> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

export default defineComponent({
  components: {},
  props: {
    authType: {
      type: String,
      default: "signin",
    },
  },
  name: "AuthProviderUI",
  setup() {
    const openPopUpWindow = async (provider: FacebookAuthProvider) => {
      await signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // const signUpWithGoogle = async () => {
    //   const provider = new GoogleAuthProvider();
    //   await signuUpWithPopup(getAuth(), provider);
    // };

    const signInWithGoogle = async () => {
      // if (props.authType === "signup") {
      //   signUpWithGoogle();
      //   return;
      // }
      openPopUpWindow(new GoogleAuthProvider());
    };

    const signInWithFacebook = async () => {
      openPopUpWindow(new FacebookAuthProvider());
    };

    return {
      signInWithGoogle,
      signInWithFacebook,
    };
  },
});
</script>
<style scopped lang="scss">
@import "@/assets/styles/constants.scss";

.auth {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;

  ::v-deep .btn {
    background-color: white;
    color: $red;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }
}
</style>
