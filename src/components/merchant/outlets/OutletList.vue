<template>
  <div class="outlets-list">
    <v-table
      fixed-header
      height="40rem"
    >
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in [...desserts,...desserts]"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OutletList",
  setup() {
    const desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ];
    return {
        desserts,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.outlets-list {
    @include card();
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    padding: 0;
    
    :deep(.v-table__wrapper) {
        @include scrollbar-thin();
    }
}

</style>
