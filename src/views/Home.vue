<template>
  <Page>
    <CompanyCategories />
  </Page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/generics/Page.vue";
import CompanyCategories from "@/components/home/categories/CompanyCategories.vue";

export default defineComponent({
  name: "Home-page",

  components: {
    Page,
    CompanyCategories,
  },
});
</script>
<style lang="scss" scoped></style>
