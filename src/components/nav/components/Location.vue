<template>
  <div class="location">
    <div class="location_icon">
      <v-icon
        size="x-small"
        icon="mdi-map-marker"
        class="location_icon_map mr-2"
      ></v-icon>
    </div>
    <div class="location_set">
      <p class="location_set_text">Select location</p>
      <p class="location_set_address">Kampala (Uganda)</p>
    </div>
    <div class="location_icon_down">
      <v-icon size="x-small" class="location_icon_map">mdi-menu-down</v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectLocation",
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.location {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  height: 100%;
  width: auto;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: 0;
  overflow: hidden;
  cursor: pointer;

  &_icon {
    display: flex;
    i {
      color: rgb(177, 177, 178);
    }
  }

  &_icon_down {
    display: flex;
    i {
      color: $black;
    }
  }

  &_set {
    display: flex;
    flex-direction: column;
    gap: 0;

    &_text {
      margin: 0;
      padding: 0;
      font-size: 11px;
      font-weight: 500;
      color: rgba(33, 37, 41, 0.75);
    }

    &_address {
      margin: 0;
      padding: 0;
      font-size: 13px;
      font-weight: 500;
      color: $black;
      width: 120px;
    }
  }
}
</style>
