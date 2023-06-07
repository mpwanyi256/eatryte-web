<template>
  <Page>
    <MostPopular :route-info="routeInfo">
      <template #route>
        <router-link :to="{ name: routeInfo.path.name }">{{
          routeInfo.path.linkTitle
        }}</router-link>
        <v-btn size="small" class="ml-2 btn_filter">Filter</v-btn>
      </template>
    </MostPopular>
  </Page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { routeInfo } from "@/types/generics";
import Page from "@/components/generics/Page.vue";
import MostPopular from "@/components/home/listings/MostPopular.vue";

export default defineComponent({
  name: "CompanyListing",

  components: {
    Page,
    MostPopular,
  },
  setup() {
    const routeInfo = ref<routeInfo>({
      title: "Most popular",
      path: {
        name: "home",
        linkTitle: "<< Home",
      },
    });

    return {
      routeInfo,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.btn_filter {
  background-color: $menuRed;
  color: $white;
  box-shadow: none;
}
</style>
