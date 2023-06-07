<template>
  <Page>
    <CompanyCategories />
    <Promos />
    <CompanyListing />
    <MostPopular />
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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
});
</script>
<style lang="scss" scoped></style>
