<template>
  <div
    v-if="user"
    class="info_card"
  >
    <div class="info_card_avator">
      <v-avatar
        image="https://i.pravatar.cc/300"
        size="60"
      />
    </div>
    <div class="info_card_details">
      <h6>
        {{ fullName }}
        <v-icon
          v-if="user.emailVerified"
          icon="mdi-check-circle-outline"
          size="x-small"
        />
      </h6>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { User } from "@/store/types";

export default defineComponent({
  name: "UserProfileCard",
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    const fullName = computed(() => {
      return props.user
        ? `${props.user.profile.firstName} ${props.user.profile.lastName}`
        : "Profile";
    });

    return {
      fullName,
    };
  },
});
</script>
<style lang="scss" scopped>
@import "@/assets/styles/constants.scss";

.info_card {
  background-color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  height: 92px;
  padding: 1rem;

  &_avator {
    margin-right: 1rem;
    display: block;
    cursor: pointer;
  }

  &_details {
    display: block;

    h6 {
      font-weight: 600;
      color: #e23744;
      margin-bottom: 0.25rem;
      font-size: 1rem;
      line-height: 1.2;

      .mdi {
        --bs-success-rgb: 25, 135, 84;
        --bs-text-opacity: 1;
        color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
      }
    }
    p {
      font-size: 11px;
      color: rgba(33, 37, 41, 0.75);
    }
  }
}
</style>
