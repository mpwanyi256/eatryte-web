<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :temporary="false"
        location="right"
        width="500"
      >
        <template v-if="cardDetails">
          <Header :card="cardDetails" />
          <v-divider></v-divider>

          <v-main style="height: 250px">
            <div class="d-flex justify-left align-left h-100">
              <h3>Card details {{ cardId }}</h3>
              {{ cardDetails }}
            </div>
          </v-main>
        </template>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import router from "@/router";
import { useStore } from "vuex";

import Header from "./cardHeader.vue";

export default defineComponent({
  name: "CardDetails-component",
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    const drawer = ref(true);

    const cardId = computed(() => {
      return router.currentRoute.value.params.id;
    });

    watch(
      () => router.currentRoute.value.params.id,
      async () => {
        await fetchCardDetails();
      }
    );

    const cardDetails = computed(() => {
      return store.state.board.selectedCard;
    });

    const fetchCardDetails = async () => {
      await store.dispatch("board/fetchCardDetails", cardId.value);
    };

    onMounted(async () => {
      await fetchCardDetails();
      console.log("Card details mounted");
    });

    return {
      drawer,
      cardId,
      cardDetails,
    };
  },
});
</script>
