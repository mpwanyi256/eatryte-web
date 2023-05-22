<template>
  <div class="card-details">
    <div class="card-details_title">
      <h2>{{ card.title }}</h2>
    </div>
    <div class="card-details_actions">
      <v-btn
        v-for="{ text, icon } in actions"
        :key="icon"
        class="card-details_actions_btn"
        rounded="0"
        size="small"
      >
        <v-icon class="mr-1">{{ icon }}</v-icon>
        {{ text }}
      </v-btn>
    </div>
    <div class="card-details_description">
      <p>Description</p>
      <p>{{ card.description }}</p>
    </div>
    <Comments :card="card" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { useStore } from "vuex";
import { Card } from "@/types/generics";
import Comments from "./Comments.vue";

export default defineComponent({
  name: "CardDetails-component",
  components: {
    Comments,
  },
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },
  setup() {
    const actions = ref([
      {
        icon: "mdi-attachment",
        text: "Attach",
      },
      {
        icon: "mdi-sitemap",
        text: "Add child issue",
      },
      {
        icon: "mdi-link-variant",
        text: "Link issue",
      },
    ]);

    return {
      actions,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";

.card-details {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;

  &_title {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      font-size: 1.2rem;
      margin: 0;
      font-weight: 700;
      color: $secondary;
    }
  }

  &_actions {
    display: flex;
    flex-direction: row;
    gap: 8px;

    &_btn {
      border: 1px solid $action-btn_color !important;
      border-radius: 4px !important;
      background-color: $action-btn_color;
      color: $black;
      font-weight: 700;
    }
  }

  &_description {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;

    p:first-child {
      font-size: 1rem;
      font-weight: 700;
      margin-top: 0.75rem;
    }

    p {
      color: $secondary;
      line-height: 1.714;
      font-weight: normal;
      margin: 0;
      letter-spacing: -0.005em;
    }
  }
}
</style>
