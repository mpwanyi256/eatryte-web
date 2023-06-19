<template>
  <Page>
    <div class="page_wrapper">
      <div class="page_wrapper_nav">
        <MerchantNavLinks />
      </div>
      <div class="page_wrapper_content">
        <router-view :merchant="merchantAccount" />
      </div>
    </div>
  </Page>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";
import Page from "@/components/generics/Page.vue";
import MerchantNavLinks from "@/components/merchant/MerchantNavLinks.vue";

export default defineComponent({
  name: "MerchantHomePage",
  components: {
    Page,
    MerchantNavLinks,
  },
  setup() {
    const Store = useStore<State>();
    const userAccount = computed(() => Store.state.auth.user);
    const merchantAccount = computed(() => Store.getters.merchantAccount);

    watch(userAccount, () => {
      getMerchantAccount();
    });

    const getMerchantAccount = async () => {
      if (userAccount.value?.id)
        await Store.dispatch(
          "merchant/getMerchantAccount",
          userAccount.value.id
        );
    };

    onMounted(async () => {
      getMerchantAccount();
    });

    return {
      userAccount,
      merchantAccount,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

::v-deep .page {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $pageBgColor;
  overflow-y: auto;
  overflow-x: hidden;
  @include scrollbar-thin();

  &_wrapper {
    @include page-flex();
    display: grid;
    grid-template-columns: 35% 65%;
    height: auto;
    color: $black;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media #{$allSmallScreens} {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 0;
      padding-bottom: 0;
    }

    > div {
      display: block;
      --bs-body-color-rgb: 33, 37, 41;
      border: 0.2px solid $pageBgColor;
      border-radius: 0.375rem;
      box-shadow: 0 0.125rem 0.25rem rgba(var(--bs-body-color-rgb), 0.075) !important;
      margin: 1rem;
      overflow: hidden;
      background-color: $white !important;
      height: fit-content;
    }

    &_nav {
      position: sticky;
    }

    &_content {
      padding: 1.5rem;
    }
  }
}
</style>
