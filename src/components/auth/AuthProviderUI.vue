<template>
  <div id="firebaseui-auth-container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import firebaseui from "firebaseui";
// import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "@/main";

export default defineComponent({
  name: "AuthProviderUI",
  setup() {
    // const ui = ref<any | null>(null);

    onMounted(() => {
      // ui.value = new firebaseui.auth.AuthUI(auth);
      // ui.value.start("#firebaseui-auth-container", {
      //   signInOptions: [
      //     EmailAuthProvider.PROVIDER_ID,
      //     GoogleAuthProvider.PROVIDER_ID,
      //   ],
      // });
    });

    return {};
  },
});
</script>
<style></style>
