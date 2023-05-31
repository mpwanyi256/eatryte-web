<template>
  <div class="home">
    <CompanyCategories />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CompanyCategories from "@/components/home/CompanyCategories.vue";

export default defineComponent({
  name: "Home-page",

  components: {
    CompanyCategories,
  },
});
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
}
</style>
