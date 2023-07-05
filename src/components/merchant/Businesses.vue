<template>
  <div class="outlets">
    <OverviewHeader
      title="Businesses"
      sub-title="Manage businesses"
    >
      <template #actions>
        <button class="outlets-create-btn">
          <v-icon left>
            mdi-plus
          </v-icon>Add business
        </button>
      </template>
    </OverviewHeader>
    <OutletList />
    <Pagination
      v-model="page"
      :count="15"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import OverviewHeader from "@/components/generics/OverviewHeader.vue";
import OutletList from "@/components/merchant/outlets/OutletList.vue";
import Pagination from "@/components/generics/Pagination.vue";

export default defineComponent({
  name: "MerchantOutlets",
  components: {
    OverviewHeader,
    OutletList,
    Pagination,
  },
  setup() {
    const page = ref(1);

    return {
      page,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.outlets {
  display: flex;
  flex-direction: column;
  width: 100%;

  &-create-btn {
    @include card();
    background-color: $gray-100;
    padding: 0.3rem;
  }
}
</style>
