<template>
  <div class="search">
    <div class="search_link">
      <v-icon
        left
        size="x-small"
        icon="mdi-magnify"
      />
      <p>Search</p>
    </div>
    <div class="search_offers">
      <v-btn
        small
        class="search_offers_btn"
      >
        <v-icon
          left
          size="small"
          icon="mdi-disc"
        />
        Offers
      </v-btn>
    </div>
    <div
      v-if="!isLoggedIn"
      class="search_link"
      :class="{ active: isActiveRoute('login') }"
      @click="goToLoginPage"
    >
      <v-icon
        left
        size="x-small"
        icon="mdi-lock-outline"
      />
      <p>Sign in</p>
    </div>
    <template v-else>
      <div class="search_link">
        <v-icon
          class="mr-1"
          size="x-small"
          icon="mdi-cart-outline"
        />
        <p>Cart</p>
      </div>
      <div class="search_link profile">
        <v-avatar
          :image="userProfile.profile?.profilePictureURL || `@/assets/images/avator.png`"
          size="32"
          class="mr-3"
        />
        <p>{{ userLastName }}</p>
        <v-icon
          x-small
          class="location_icon_map"
        >
          mdi-menu-down
        </v-icon>
        <NavProfile />
      </div>
      <div
        class="search_link justify-center"
        @click="$emit('toggle-drawer')"
      >
        <v-icon
          class="mr-1"
          size="x-large"
          icon="mdi-menu"
        />
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import NavProfile from "./NavProfile.vue";
import { User } from "@/store/types";

export default defineComponent({
  name: "NavSearch",
  components: {
    NavProfile,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const userProfile = computed<User>(() => store.state.auth.user);

    const isLoggedIn = computed<User>(() => store.state.auth.user);
    const goToLoginPage = () => {
      router.push({ name: "login" });
    };

    const userLastName = computed<string>(() => {
      const user = store.state.auth.user;
      if (user) {
        return user.profile.lastName;
      }
      return "Account";
    });

    const isActiveRoute = (routeName: string) => {
      return router.currentRoute.value.name === routeName;
    };

    return {
      isLoggedIn,
      userLastName,
      userProfile,
      goToLoginPage,
      isActiveRoute,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.active {
  @include active();
}

.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  justify-content: end;

  > div {
    width: auto;
  }

  .profile {
    position: relative;
    height: 100%;

    &:hover {
      :deep(.nav_profile) {
        display: block;
        opacity: 1;
        transform: translateY(0px);
        transition: 0.5s ease all;
        visibility: visible;
      }
    }
  }

  &_link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;

    &_icon {
      display: flex;
      i {
        color: rgb(177, 177, 178);
        height: 8px;
        width: 8px;
      }
    }

    p {
      line-height: 1.5;
      font-size: 1rem;
    }
  }

  &_offers {
    background-color: $white;
    display: block;
    align-content: center;

    &_btn {
      height: 38px;
      width: 95px;
      padding: 0 4px;
      background: linear-gradient(45deg, #d92662 0%, #e23744 100%);
      color: $white;
      border-radius: 4px;
      cursor: pointer;
      text-transform: capitalize;
      font-size: 1rem;
    }
  }
}
</style>
