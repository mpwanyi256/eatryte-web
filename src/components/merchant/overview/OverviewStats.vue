<template>
  <div class="dashboard-stats">
    <div
      v-for="{ label, icon, count } in items"
      :key="label"
      class="dashboard-stats_card"
    >
      <div class="dashboard-stats_card_icon">
        <v-icon>{{ icon }}</v-icon>
      </div>
      <div class="dashboard-stats_card_content">
        <p class="dashboard-stats_card_content_count">
          {{ count }}
        </p>
        <p class="dashboard-stats_card_content_label">
          {{ label }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DashboardStats",
    setup() {
        const items = [
            {
                icon: "mdi-store-marker",
                count: 3,
                label: "Outlets",
            },
            {
                icon: "mdi-currency-usd",
                count: `${234}K`,
                label: "Total Revenue",
            },
            {
                icon: "mdi-account",
                count: 56,
                label: "Total Orders",
            },
            {
                icon: "mdi-account-multiple-outline",
                count: 56,
                label: "Total Customers",
            },
        ];

        return {
            items,
        };
    },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.dashboard-stats {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 1rem 0;

    @media #{$tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media #{$mobile-small} {
        grid-template-columns: repeat(1, 1fr);
    }

    &_card {
        @include card();
        display: flex;
        height: 6rem;
        align-items: center;
        padding: 8px;

        &_icon {
            background-color: $pageBgColor;
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            display: inherit;
            align-items: center;
            justify-content: center;
            margin-right: 0.5rem;

            i {
                font-size: 1.78rem;
                color: $menuRed;
            }
        }

        &_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            &_count {
                font-size: 1.5rem;
                font-weight: 600;
            }

            &_label {
                font-size: 0.7rem;
                font-weight: 400;
                color: $gray-600;
            }
        }
    }
}
</style>
