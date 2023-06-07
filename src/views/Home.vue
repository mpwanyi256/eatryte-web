<template>
  <Page>
    <CompanyCategories />
    <Promos />
    <CompanyListing />
    <MostPopular :route-info="mostPopularInfo">
      <template #route>
        <router-link :to="{ name: mostPopularInfo.path.name }"
          >View all >></router-link
        >
      </template>
    </MostPopular>
  </Page>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { routeInfo } from "@/types/generics";
import Page from "@/components/generics/Page.vue";
import CompanyCategories from "@/components/home/categories/CompanyCategories.vue";
import CompanyListing from "@/components/home/listings/CompanyListing.vue";
import MostPopular from "@/components/home/listings/MostPopular.vue";
import Promos from "@/components/home/categories/Promos.vue";

export default defineComponent({
  name: "Home-page",

  components: {
    Page,
    Promos,
    CompanyListing,
    CompanyCategories,
    MostPopular,
  },
  setup() {
    const mostPopularInfo = ref<routeInfo>({
      title: "Most popular",
      path: {
        name: "listing",
        query: {
          filter: "most-popular",
        },
      },
    });

    return {
      mostPopularInfo,
    };
  },
});
</script>
<style lang="scss" scoped></style>
