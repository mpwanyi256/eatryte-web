<template>
  <div class="location">
    <div class="location_icon">
      <v-icon
        size="x-small"
        icon="mdi-map-marker"
        class="location_icon_map mr-2"
      />
    </div>
    <div class="location_set">
      <p class="location_set_text">
        Select location
      </p>
      <p class="location_set_address">
        {{ selectedCountry?.name }} ({{ selectedCountry?.code }})
      </p>
    </div>
    <div class="location_icon_down">
      <v-icon
        size="x-small"
        class="location_icon_map"
      >
        mdi-menu-down
      </v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "@/store";

export default defineComponent({
  name: "SelectLocation",
  setup() {
    const Store = useStore<State>();
    const selectedCountry = computed(() => Store.state.app.selectedCountry);

    return {
      selectedCountry,
    };
  },
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
      font-size: 0.688rem;
      font-weight: 500;
      color: rgba(33, 37, 41, 0.75);
    }

    &_address {
      margin: 0;
      padding: 0;
      font-size: 0.813rem;
      font-weight: 500;
      color: $black;
      width: 7.5rem;
    }
  }
}
</style>
