<template>
  <div class="categories">
    <h3>Categories</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CompanyCategories",
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.categories {
  position: relative;
  display: block;
  background: #146c43;
  height: 15rem;
}
</style>
