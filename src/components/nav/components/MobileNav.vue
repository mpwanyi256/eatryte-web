<template>
  <div class="nav_mobile">
    <div class="nav_mobile_actions">
      <div class="nav_mobile_actions_humberg">
        <v-icon
          @click="$emit('toggle-drawer')"
          class="mr-1"
          size="x-large"
          icon="mdi-menu"
        ></v-icon>
        <h1>Browse</h1>
      </div>
      <h3 class="nav_mobile_actions_filter">Filter</h3>
    </div>
    <div class="nav_mobile_search">
      <v-icon
        class="nav_mobile_search_icon ml-1"
        icon="mdi-magnify"
        size="small"
      />
      <input
        class="nav_mobile_search_input"
        type="text"
        placeholder="Enter your location"
        v-model="search"
      />
      <SelectLocation :search-filter="search" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import SelectLocation from "@/components/nav/components/SelectLocation.vue";

export default defineComponent({
  name: "Nav-Mobile",
  components: {
    SelectLocation,
  },
  setup() {
    const store = useStore();

    const search = ref("");
    const drawer = computed(() => store.state.app.drawer);

    return {
      search,
      drawer,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.nav_mobile {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  &_actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 3rem;
    left: 0;
    top: 0;

    &_humberg {
      display: contents;
      align-items: center;
      width: 100%;

      h1 {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    &_filter {
      position: absolute;
      right: 0;
      margin-right: 1rem;
      font-size: 0.8rem;
    }
  }

  &_search {
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 0;
    height: 36px;
    width: 100%;
    overflow: hidden;
    background-color: $white;
    border: 0.5px solid $white;
    border-radius: 4px;
    align-content: center;
    line-height: 1.5;
    color: #212529;
    font-weight: 400;

    &_icon {
      color: #212529;
    }

    &_input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 1rem;
      margin-left: 0.5rem;
    }

    &:hover {
      ::v-deep .location_select {
        display: block;
        opacity: 1;
        transform: translateY(0px);
        transition: 0.5s ease all;
        visibility: visible;

        .location_select_search {
          display: none;
        }
      }
    }
  }
}
</style>
