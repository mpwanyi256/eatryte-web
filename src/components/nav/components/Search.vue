<template>
  <div class="search">
    <div class="search_link">
      <v-icon left size="x-small" icon="mdi-magnify"></v-icon>
      <p>Search</p>
    </div>
    <div class="search_offers">
      <v-btn small class="search_offers_btn">
        <v-icon left size="small" icon="mdi-disc"></v-icon>
        Offers
      </v-btn>
    </div>
    <div class="search_link">
      <v-icon left size="x-small" icon="mdi-account-outline"></v-icon>
      <p>Sign in</p>
    </div>
    <div class="search_link">
      <v-icon class="mr-1" size="x-small" icon="mdi-cart-outline"></v-icon>
      <p>Cart</p>
    </div>
    <div class="search_link profile">
      <v-avatar
        image="https://i.pravatar.cc/300"
        size="32"
        class="mr-3"
      ></v-avatar>
      <p>Samuel</p>
      <v-icon x-small class="location_icon_map">mdi-menu-down</v-icon>
    </div>
    <div class="search_link justify-center" @click="$emit('toggle-drawer')">
      <v-icon class="mr-1" size="x-large" icon="mdi-menu"></v-icon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Nav-Search",
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.search {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  font-size: 1rem;

  > div {
    width: 100%;
  }

  .profile {
    width: 250px;
  }

  &_link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;

    &_icon {
      display: flex;
      i {
        color: rgb(177, 177, 178);
        height: 8px;
        width: 8px;
      }
    }

    p {
      line-height: 1.5;
      font-size: 1rem;
    }
  }

  &_offers {
    background-color: $white;
    display: block;
    align-content: center;

    &_btn {
      height: 38px;
      width: 95px;
      padding: 0 4px;
      background: linear-gradient(45deg, #d92662 0%, #e23744 100%);
      color: $white;
      border-radius: 4px;
      cursor: pointer;
      text-transform: capitalize;
      font-size: 1rem;
    }
  }
}
</style>