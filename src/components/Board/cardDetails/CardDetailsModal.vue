<template>
  <Modal :title="cardTitle" @close="closeModal" :size="1000">
    <div v-if="cardDetails">
      <!-- <Header :card="cardDetails" /> -->
      <div class="justify-left align-left h-100">
        <h3>Card details {{ cardId }}</h3>
        {{ cardDetails }}
      </div>
    </div>
  </Modal>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Modal from "@/components/generics/Modal.vue";
import router from "@/router";
import { useStore } from "vuex";

// import Header from "./cardHeader.vue";

export default defineComponent({
  name: "CardDetails-component",
  components: {
    // Header,
    Modal,
  },
  setup() {
    const store = useStore();
    const drawer = ref(true);

    const cardId = computed(() => {
      return router.currentRoute.value.params.id;
    });

    const cardDetails = computed(() => {
      return store.state.board.selectedCard;
    });

    const cardTitle = computed(() => {
      return cardDetails.value?.title || "";
    });

    const fetchCardDetails = async () => {
      await store.dispatch("board/fetchCardDetails", cardId.value);
    };

    const closeModal = async () => {
      await store.dispatch("board/resetSelectedCard");
      router.replace({
        name: "board",
      });
    };

    onMounted(async () => {
      await fetchCardDetails();
      console.log("Card details mounted");
    });

    return {
      drawer,
      cardId,
      cardTitle,
      cardDetails,
      closeModal,
    };
  },
});
</script>
