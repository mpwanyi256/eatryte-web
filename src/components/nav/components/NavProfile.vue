<template>
  <div class="nav_profile">
    <router-link
      v-for="link in accountLinks"
      :key="link.name"
      class="nav_profile_item"
      :to="link.name"
      @click.prevent="goTo(link.name)"
    >
      {{ link.title }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NavProfile",
  components: {},
  setup() {
    const Store = useStore();
    const Router = useRouter();
    const accountLinks = ref<any[]>([
      {
        name: "profile-info",
        title: "My Account",
      },
      {
        name: "profile-info",
        title: "Delivery Support",
      },
      {
        name: "logout",
        title: "Logout",
      },
    ]);

    const goTo = (route: string) => {
      if (route === "logout") {
        Store.dispatch("auth/signoutUser");
      } else {
        Router.push({ name: route });
      }
    };

    return {
      accountLinks,
      goTo,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";
@import "../scss/nav.scss";

.nav_profile {
  @include showOnHover();
  width: inherit;
  height: auto;
  padding: 0.5rem;
  overflow: hidden;

  &_item {
    font-size: 13px;
    border-radius: 6px;
    margin: 1px 0;
    padding: 6px 10px;
    display: block;
    width: 100%;
    clear: both;
    font-weight: 400;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: $quaternary;
    }
  }
}
</style>
