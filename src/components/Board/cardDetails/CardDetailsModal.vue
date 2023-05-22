<template>
  <Modal @close="closeModal" :size="1000">
    <div class="card-info">
      <LoadingSpinner v-if="loading" />
      <template v-else-if="!loading && cardDetails">
        <Header :card="cardDetails" @close="closeModal" />
        <div class="card-info-details">
          <div class="card-info-details-description">
            <CardDescription :card="cardDetails" />
          </div>
          <div class="card-info-details-info">
            <CardAssigneeInfo :card="cardDetails" />
          </div>
        </div>
      </template>
    </div>
  </Modal>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Modal from "@/components/generics/Modal.vue";
import router from "@/router";
import { useStore } from "vuex";
import LoadingSpinner from "@/components/generics/LoadingSpinner.vue";
import CardDescription from "@/components/Board/cardDetails/CardDescription.vue";
import CardAssigneeInfo from "@/components/Board/cardDetails/CardAssigneeInfo.vue";

import Header from "./cardHeader.vue";

export default defineComponent({
  name: "CardDetails-component",
  components: {
    Header,
    CardDescription,
    LoadingSpinner,
    CardAssigneeInfo,
    Modal,
  },
  setup() {
    const store = useStore();
    const loading = ref(true);

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
      loading.value = false;
    };

    const closeModal = async () => {
      await store.dispatch("board/resetSelectedCard");
      router.replace({
        name: "home",
      });
    };

    onMounted(async () => {
      await fetchCardDetails();
    });

    return {
      loading,
      cardId,
      cardTitle,
      cardDetails,
      closeModal,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.card-info {
  height: 80vh;
  width: 100%;
  height: 80vh;

  &-details {
    height: calc(80vh - 52px);
    @include scrollbar-thin();
    overflow-y: auto;

    // Desktop view
    @media screen and (min-width: 770px) {
      display: grid;
      grid-template-columns: 60% 40%;
    }

    // Small view
    @media screen and (max-width: 770px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
