<template>
  <Page>
    <CompanyCategories />
    <CompanyListing />
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";
import CompanyCategories from "@/components/home/categories/CompanyCategories.vue";
import CompanyListing from "@/components/home/listings/CompanyListing.vue";

export default defineComponent({
  name: "Home-page",

  components: {
    Page,
    CompanyListing,
    CompanyCategories,
  },
});
</script>
<style lang="scss" scoped></style>
