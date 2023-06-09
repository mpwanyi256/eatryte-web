<template>
  <div class="nav_profile">
    <div class="nav_profile_item" v-for="link in accountLinks" :key="link.name">
      <router-link :to="link.name">{{ link.title }}</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavProfile",
  components: {},
  setup() {
    const accountLinks = ref<any[]>([
      {
        name: "profile",
        title: "My Account",
      },
      {
        name: "profile",
        title: "Delivery Support",
      },
      {
        name: "profile",
        title: "Delivery Support",
      },
    ]);

    return {
      accountLinks,
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

    a {
      text-decoration: none;
      color: inherit;
    }

    &:hover {
      background-color: $quaternary;
    }
  }
}
</style>
