<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavigationDrawer",

  setup() {
    const store = useStore();
    const drawer = computed({
      get: () => store.state.drawer,
      set: (value) => store.commit("app/toggleDrawer", value),
    });

    return {
      drawer,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.drawer {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  gap: 0;
  margin: 0;
  width: 250px;
  height: 100vh;
  padding: 0.5rem;
  background-color: red;
}
</style>
