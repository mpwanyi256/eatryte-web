<template>
  <div class="profile_links">
    <router-link
      v-for="link in links"
      :key="link.name"
      class="profile_links_link"
      :class="{ profile_links_link_active: activeRoute === link.name }"
      :to="link.name"
      @click.prevent="moveTo(link.name)"
    >
      <v-btn icon size="x-small" class="profile_links_link_iconBtn">
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <div class="profile_links_link_title">
        <h6>{{ link.title }}</h6>
        <p>{{ link.description }}</p>
      </div>
      <div class="profile_links_link_icon">
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { NavRoute } from "@/types/generics";

export default defineComponent({
  name: "ProfileLinks",
  props: {
    links: {
      type: Array as PropType<NavRoute[]>,
      required: true,
    },
  },
  setup() {
    const Router = useRouter();
    const Store = useStore();
    const activeRoute = computed(() => Router.currentRoute.value.name);

    const moveTo = (route: string) => {
      if (!route.length) return;
      if (route === "logout") {
        Store.dispatch("auth/signoutUser");
      } else {
        Router.push({ name: route });
      }
    };

    return {
      activeRoute,
      moveTo,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.profile_links {
  display: block;
  width: 100% !important;

  &_link {
    --bs-dark-rgb: 33, 37, 41;
    display: flex;
    color: rgba(var(--bs-dark-rgb), 1);
    align-items: center;
    padding: 1rem !important;
    text-decoration: none !important;
    outline: none !important;
    border-bottom: 1px solid #dee2e6;

    &:last-child {
      border-bottom: none;
    }

    &_active {
      color: #e23744 !important;
    }

    &_iconBtn {
      box-shadow: none !important;
      background-color: #e23744;
      color: $white;
      margin-right: 0.5rem;
    }

    &_title {
      margin-right: 1rem;
      display: block;
      text-align: left;

      h6 {
        font-weight: 600 !important;
        margin-bottom: 0.25rem !important;
        font-size: 1rem;
      }

      p {
        font-size: 11px;
        margin: 0;
        letter-spacing: 0.2px;
      }
    }

    &_icon {
      margin-left: auto;
    }
  }
}
</style>
