<template>
  <div class="nav">
    <div class="wrapper">
      <div class="nav-content">
        <div class="title">
          <div class="menu_icons">
            <p>
              {{ appName }} |
              <small class="user_name">Samuel</small>
            </p>
          </div>
        </div>
        <div class="menu">
          <div class="tray">
            <div
              :class="isActiveRoute(link.name) ? 'active' : 'item'"
              v-for="(link, index) in navRoutes"
              :key="index"
              @click="gotTopage(link)"
            >
              <v-icon small class="icon" left>
                {{ link.icon }}
              </v-icon>
              {{ link.name }}
            </div>
            <div class="auth" @click="performLogout">
              <v-icon small class="icon" dark> mdi-lock </v-icon>
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { NavRoute } from "@/types/generics";
import { State } from "@/store";

export default defineComponent({
  name: "Nav-bar",
  setup() {
    const store = useStore<State>();
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

    const route = useRoute();

    // Compute the active route dynamically
    const activeRoute = computed(() => route.name);
    const appName = computed(() => store.state.app.name);

    // Filter routes excluding the active route
    const navRoutes = computed(() =>
      routes.filter((r) => r.name !== activeRoute.value)
    );

    // Get the home route separately for the logo link
    const homeRoute = computed(() => routes.find((r) => r.name === "home"));

    const isActiveRoute = (routeName: string) => {
      return routeName === activeRoute.value;
    };

    const gotTopage = (route: NavRoute) => {
      console.log(route);
    };

    const performLogout = () => {
      console.log("Logout");
    };

    return {
      navRoutes,
      homeRoute,
      activeRoute,
      appName,
      isActiveRoute,
      gotTopage,
      performLogout,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/constants.scss";

.nav {
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  font-family: $font-style;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  pointer-events: auto;
  letter-spacing: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 1.47059;
  background-color: $white;
  border-bottom: 0.3px solid $nav-border;

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: auto;
    min-height: inherit;
    z-index: 0;
    font-size: 1em;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-align: inherit;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    pointer-events: auto;
    letter-spacing: normal;
    color: #1d1d1f;
    font-style: normal;

    .nav-content {
      padding-left: calc(max(22px, env(safe-area-inset-left)));
      padding-right: calc(max(22px, env(safe-area-inset-right)));
      font-size: 1em;
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
      text-align: inherit;

      .title {
        color: #000;
        transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
        font-size: 21px;
        line-height: 1.14286;
        font-weight: 600;
        letter-spacing: 0.011em;
        font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
          "Helvetica", "Arial", sans-serif;
        cursor: default;
        display: block;
        justify-content: center;
        align-items: center;
        float: left;
        margin: 14px 0 -14px;
        padding: 0;
        height: 52px;
        white-space: nowrap;
        text-align: inherit;
        box-sizing: content-box;
        pointer-events: auto;
        width: auto;

        .menu_icons {
          display: flex;
          flex-direction: row;
          gap: 10px;

          .user_name {
            font-weight: normal;
            font-family: inherit;
            color: black;
          }
        }
      }

      .menu {
        // Desktop view
        @media screen and (max-width: 1135px) {
          display: none;
        }

        @media screen and (min-width: 1134px) {
          .toggle-btn {
            display: none !important;
          }

          height: 100%;
          font-size: 12px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: $font-style;
          float: right;
          margin-top: -3px;
          text-align: inherit;

          .tray {
            float: left;
            padding-top: 18px;
            display: flex;
            flex-direction: row;
            gap: 10px;

            .item {
              color: #000;
              cursor: pointer;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              font-size: 12px;
              line-height: 1.33337;
              font-weight: 400;
              letter-spacing: -0.01em;
              font-family: $font-style;
              min-width: 23px;
              padding-left: 11px;
              padding-right: 11px;
              padding-top: 4px;
              padding-bottom: 4px;
              border-radius: 12px;

              .icon {
                color: #000;
              }
            }

            .active {
              color: #000;
              cursor: pointer;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              font-size: 12px;
              line-height: 1.33337;
              font-weight: 400;
              letter-spacing: -0.01em;
              font-family: $font-style;
              min-width: 23px;
              padding-left: 11px;
              padding-right: 11px;
              padding-top: 4px;
              padding-bottom: 4px;
              border-radius: 12px;
              color: $white;
              opacity: 0.56;
              cursor: pointer;
              background: $black;
              border-color: $black;

              .icon {
                color: $white !important;
              }
            }

            .auth {
              border-color: $red !important;
              background-color: $red;
              color: $white !important;
              cursor: pointer;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
              font-size: 12px;
              line-height: 1.33337;
              font-weight: 400;
              letter-spacing: -0.01em;
              font-family: $font-style;
              min-width: 23px;
              padding-left: 11px;
              padding-right: 11px;
              padding-top: 4px;
              padding-bottom: 4px;
              border-radius: 12px;
            }

            .item:hover {
              color: $white;
              opacity: 0.56;
              cursor: pointer;
              background: $black;
              border-color: $black;

              .icon {
                color: $white !important;
              }
            }
          }
        }
      }

      .menu * {
        line-height: inherit;
        text-align: inherit;
      }
    }
  }
}
</style>
