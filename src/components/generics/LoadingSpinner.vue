<template>
  <div class="loading">
    <v-progress-circular
      indeterminate
      color="primary"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingSpinner",
});
</script>
<style scoped lang="scss">
.loading {
  height: 100%;
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
