<template>
  <div class="nav">
    <div class="nav_wrapper">
      <div
        class="nav_wrapper_logo"
        @click="gotTopage('home')"
      />
      <div class="nav_wrapper_location">
        <Location @toggle-drawer="toggleDrawer" />
        <SelectLocation />
      </div>
      <div class="nav_wrapper_search">
        <NavSearch @toggle-drawer="toggleDrawer" />
      </div>
    </div>
    <div class="nav_wrapper_mobile">
      <NavMobile @toggle-drawer="toggleDrawer" />
    </div>
  </div>
  <v-navigation-drawer
    v-model="drawer"
    :temporary="true"
  >
    <NavigationDrawer />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { NavRoute } from "@/types/generics";
import { State } from "@/store";
import Location from "./components/Location.vue";
import SelectLocation from "./components/SelectLocation.vue";
import NavSearch from "./components/Search.vue";
import NavMobile from "./components/MobileNav.vue";
import NavigationDrawer from "@/components/nav/components/NavigationDrawer.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    Location,
    NavSearch,
    NavMobile,
    SelectLocation,
    NavigationDrawer,
  },
  setup() {
    const store = useStore<State>();
    const route = useRoute();
    const router = useRouter();
    // Define your routes here
    const routes: NavRoute[] = [
      {
        icon: "mdi mdi-home",
        name: "home",
      },
      {
        icon: "mdi mdi-account",
        name: "assigned",
      },
    ];

    // Compute the active route dynamically
    const activeRoute = computed(() => route.name);
    const appName = computed(() => store.state.app.name);
    const drawer = computed({
      get: () => store.state.app.drawer,
      set: (value) => store.commit("app/toggleDrawer", value),
    });

    // Filter routes excluding the active route
    const navRoutes = computed(() =>
      routes.filter((r) => r.name !== activeRoute.value)
    );

    // Get the home route separately for the logo link
    const homeRoute = computed(() => routes.find((r) => r.name === "home"));

    const isActiveRoute = (routeName: string) => {
      return routeName === activeRoute.value;
    };

    const toggleDrawer = () => {
      store.commit("app/toggleDrawer");
    };

    const gotTopage = (route: string) => {
      router.push({ name: route });
    };

    const performLogout = () => {
      console.log("Logout");
    };

    return {
      navRoutes,
      homeRoute,
      activeRoute,
      appName,
      drawer,
      isActiveRoute,
      gotTopage,
      performLogout,
      toggleDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.nav {
  top: 0;
  left: 0;
  width: 100%;
  height: 4.25rem;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  pointer-events: auto;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 1.063rem;
  line-height: 1.47059;
  background-color: $white;
  border-bottom: 0.019rem solid $nav-border;
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: center;
  z-index: 999;

  &_wrapper_mobile {
    visibility: hidden;
    display: none;
    background: linear-gradient(45deg, #d92662 0%, #e23744 100%);
    color: $white;
    width: 100%;
    height: 100%;

    @media #{$tablet} {
      visibility: visible;
      display: flex;
      height: 6.953rem;
    }

    @media #{$mobile} {
      visibility: visible;
      display: flex;
      height: 6.953rem;
    }
  }

  &_wrapper {
    display: inherit;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;

    @media #{$laptop-large} {
      width: 70%;
    }

    @media #{$laptop-medium} {
      width: 95%;
    }

    @media #{$laptop} {
      width: 100%;
    }

    @media #{$tablet} {
      display: none;
    }

    @media #{$mobile} {
      display: none;
    }

    @media #{$mobile-small} {
      display: none;
    }

    &_logo {
      width: 10%;
      height: 100%;
      background-image: url("@/assets/images/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: relative;
      cursor: pointer;
    }

    &_search {
      width: 70%;
      height: 100%;
    }

    &_location {
      width: 20%;
      height: 100%;
      position: relative;

      &:hover {
        :deep(.location_select) {
          display: block;
          opacity: 1;
          transform: translateY(0px);
          transition: 0.5s ease all;
          visibility: visible;
        }
      }
    }
  }
}
</style>
