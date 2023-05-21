<template>
  <v-app>
    <NavBar />
    <router-view />
  </v-app>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/nav/NavBar.vue";

@Options({
  components: {
    NavBar,
  },
})
export default class HomeView extends Vue {}
</script>
