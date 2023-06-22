<template>
  <div class="profile">
    <UserProfileCard :user="userAccount" />
    <div class="profile_ordersCount">
      <p class="profile_ordersCount_title">
        Notifications
      </p>
      <h2 class="profile_ordersCount_count">
        {{ ordersCount }}
      </h2>
    </div>
    <ProfileLink :links="links" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { NavRoute } from "@/types/generics";
import { useRouter } from "vue-router";
import UserProfileCard from "@/components/profile/UserProvileCard.vue";
import ProfileLink from "@/components/profile/ProfileLink.vue";

export default defineComponent({
  name: "MerchantNavLinks",
  components: {
    UserProfileCard,
    ProfileLink,
  },
  setup() {
    const Store = useStore();
    const userAccount = computed(() => Store.state.auth.user);

    const ordersCount = computed(() => {
      return 50;
    });

    const activeRoute = computed(() => useRouter().currentRoute.value.name);

    const links = ref<NavRoute[]>([
      {
        title: "Profile",
        name: "profile-info",
        description: "Manage your profile",
        icon: "mdi-account-outline",
      },
      {
        title: "Dashboard",
        name: "merchant-dashboard",
        description: "Manage & Register a Business on Eatryte.",
        icon: "mdi-cart-outline",
      },
      {
        title: "Orders",
        name: "",
        description: "Track all orders",
        icon: "mdi-shopping-outline",
      },
      {
        title: "Menus",
        name: "",
        description: "Manage your outlet menus",
        icon: "mdi-menu",
      },
      {
        title: "Customers",
        name: "",
        description: "All customers information",
        icon: "mdi-account-group-outline",
      },
      {
        title: "Analytics",
        name: "",
        description: "Manage your settings",
        icon: "mdi-google-analytics",
      },
      {
        title: "Outlets",
        name: "",
        description: "Manage all your outlets",
        icon: "mdi-store-marker",
      },
    ]);

    return {
      links,
      activeRoute,
      userAccount,
      ordersCount,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.profile {
  position: sticky;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: $white !important;

  &_ordersCount {
    height: 56px;
    padding: 1rem;
    align-items: center;
    display: flex;
    background-color: $pageBgColor;

    &_title {
      color: #424242;
      letter-spacing: 0.2px;
    }

    &_count {
      color: #e23744 !important;
      text-decoration: none !important;
      font-size: 1.25rem;
      margin-left: auto !important;
    }
  }
}
</style>
