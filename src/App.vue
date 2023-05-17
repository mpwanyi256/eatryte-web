<template>
  <NavBar />
  <router-view />
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
