<template>
  <div class="drawer">
    <h2>Nav drawer</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { useStore } from "vuex";

export default defineComponent({
  name: "NavigationDrawer",

  setup() {
    // const store = useStore();

    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.drawer {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  gap: 0;
  margin: 0;
  width: 250px;
  height: 100vh;
  padding: 0.5rem;
  background-color: $white;
}
</style>
