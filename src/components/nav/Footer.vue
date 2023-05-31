<template>
  <div class="footer">
    <div class="footer_wrapper">
      <div
        v-for="{ title, icon, path, style } in quickLinks"
        :class="{
          active: isActiveRoute(path),
          footer_wrapper_link: true,
          hide_on_mobile: style === 'hide-on-mobile',
        }"
        :key="icon"
      >
        <v-icon size="large" :icon="icon" />
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Footer-nav",

  setup() {
    const store = useStore();
    const router = useRoute();
    const activeRoute = computed(() => router.name);
    const quickLinks = computed(() => store.state.app.quickLinks);

    // Functions
    const isActiveRoute = (route: string) => {
      return activeRoute.value === route;
    };
    return {
      quickLinks,
      activeRoute,
      isActiveRoute,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.footer {
  height: 3.625rem;
  background: $white;
  border-radius: 0;
  box-shadow: 0.625rem -0.063rem 0.625rem rgba(0, 0, 0, 0.075);
  text-align: center;

  &_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    .hide_on_mobile {
      @media #{$mobile} {
        visibility: hidden;
      }
    }

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-weight: 600;
        line-height: 1.2;
        font-size: 0.8rem;
        letter-spacing: 0.013rem;
      }
    }

    .active {
      color: $menuRed !important;
      background: #f8f9fa;
    }
  }
}
</style>
