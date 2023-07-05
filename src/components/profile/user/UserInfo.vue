<template>
  <div class="info">
    <h5 class="info_header">
      My Profile
    </h5>

    <LoadingSpinner v-if="loading" />
    <div
      v-show="!loading"
      class="info_details"
    >
      <AvatorUpload
        :url="userProfileAvator"
        @selected="uploadAvator"
      />
      <div class="form-group">
        <label for="username">First name</label>
        <input
          v-model="firstName"
          type="email"
          placeholder="First Name"
        >
      </div>
      <div class="form-group">
        <label for="username">Last name</label>
        <input
          v-model="lastName"
          type="email"
          placeholder="Last Name"
        >
      </div>
      <div class="form-group">
        <label for="username">Mobile Number</label>
        <input
          v-model="mobileNumber"
          type="email"
          placeholder="Mobile Number"
        >
      </div>
      <div class="form-group">
        <btn
          class="btn"
          type="submit"
          @click="updateProfile"
        >
          Update Profile
        </btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { User, UpdateProfilePayload, FirebaseFileUploafPayload } from "@/store/types";
import LoadingSpinner from "@/components/generics/LoadingSpinner.vue";
import AvatorUpload from "@/components/generics/AvatorUpload.vue";

export default defineComponent({
  name: "UserInfo",
  components: {
    AvatorUpload,
    LoadingSpinner,
  },
  setup() {
    const store = useStore();
    const userAccount = computed<User>(() => store.state.auth.user);
    const userProfileAvator = computed<string>(
      () => store.state.auth.user?.profile?.profilePictureURL || ""
    );
    const loading = computed(() => store.state.auth.loading);

    const setProfile = (user: User) => {
      if (!user || !user.profile) return;
      const userProfile = user.profile;
      firstName.value = userProfile.firstName;
      lastName.value = userProfile.lastName;
      mobileNumber.value = userProfile.mobileNumber;
    };

    watch(userAccount, (user) => {
      if (!user || !user.profile) return;
      setProfile(user);
    });

    const firstName = ref<string | undefined>("");
    const lastName = ref<string | undefined>("");
    const mobileNumber = ref<string | undefined>("");

    // Methods
    const updateProfile = async () => {
      if (!userAccount.value || !userAccount.value.profile) return;
      if (!firstName.value || !lastName.value || !mobileNumber.value) return;
      const userProfile: UpdateProfilePayload = {
        firstName: firstName.value,
        lastName: lastName.value,
        mobileNumber: mobileNumber.value,
      };
      await store.dispatch("auth/updateProfile", userProfile);
    };

    const updateProfilePicture = async (downloadUrl: string) => {
      console.log("updating profile picture::", downloadUrl)
      if (!userAccount.value || !userAccount.value.profile) return;
      const userProfile: UpdateProfilePayload = {
        profilePictureURL: downloadUrl,
      };
      await store.dispatch("auth/updateProfile", userProfile);
    };

    const uploadAvator = async (file: File) => {
      const uploadPayload: FirebaseFileUploafPayload = {
        file,
        bucketName: "profilePictures",
        uniquePath: userAccount.value._id,
        cb: updateProfilePicture,
      };
      await store.dispatch("app/uploadFile", uploadPayload);
    };

    onMounted(() => {
      if (!userAccount.value || !userAccount.value.profile) return;
      setProfile(userAccount.value);
    });

    return {
      firstName,
      lastName,
      mobileNumber,
      loading,
      userProfileAvator,
      updateProfile,
      uploadAvator,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

.info {
  display: block;
  color: $black;
  min-height: 6rem;

  &_header {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.2;
  }

  &_details {
    display: block;
  }
}
</style>
