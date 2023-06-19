<template>
  <div class="logo">
    <div
      class="logo_upload"
      ref="AppLogoUploaddropFileDiv"
      :data-active="active"
      @drop.prevent="onFileDropped"
      @click="triggerFileInput"
    >
      <template v-if="!file">
        <h4 class="logo_upload_label">
          Drag and drop or click to upload a PNG of your app icon. Minimum size:
          400x400 pixels with a 1:1 aspect ratio.
        </h4>
      </template>
    </div>
    <p class="logo_appName">{{ projectName }}</p>
    <input
      ref="imageInput"
      type="file"
      accept="image/*"
      @change="onFileChange"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { apiError, apiSuccess } from "@/util/ErrorMessage.js";

export default {
  name: "AppLogoUpload",
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      file: null,
      active: false,
      appHasLogoSet: false,
      events: ["dragenter", "dragover", "dragleave", "drop"],
    };
  },
  computed: {
    ...mapState({
      project: (state) => state.app.project,
    }),
    projectId() {
      return this.project.id;
    },
  },
  methods: {
    ...mapActions("prd", ["uploadAppLogo", "getAppLogo", "updateAppLogo"]),

    setAppBackgroundImage(imageUrl) {
      this.$refs.AppLogoUploaddropFileDiv.style.backgroundImage = `url(${imageUrl})`;
    },

    async getAppLogoSet() {
      try {
        const response = await this.getAppLogo(this.projectId);
        const imageUrl = response.data.image;
        if (imageUrl) {
          this.setAppBackgroundImage(imageUrl);
          this.file = imageUrl;
          this.appHasLogoSet = true;
        }
      } catch (error) {
        apiError(error);
      }
    },

    async uploadSelectedFile() {
      try {
        if (!this.file) return;
        const payload = {
          projectId: this.projectId,
          imageFile: this.file,
        };
        let response;
        if (!this.appHasLogoSet) {
          response = await this.uploadAppLogo(payload);
        } else {
          response = await this.updateAppLogo(payload, true);
        }
        // Handle Upload response
        this.setAppBackgroundImage(response.data.image);
        apiSuccess("App Logo Uploaded");
      } catch (error) {
        apiError(error);
      }
    },
    triggerFileInput() {
      this.$refs.imageInput.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.file = file;
      this.loadSelectedFile(file);
    },
    onFileDropped(e) {
      const file = e.dataTransfer.files[0];
      this.file = file;
      this.loadSelectedFile(file);
    },
    loadSelectedFile(file) {
      if (!file || !file.type.match("image.*")) return;
      // check that file size doesn't exceed 4Mbs
      if (file.size > 2000000) {
        apiError(new Error("App image must be less than 2Mbs"));
        return;
      }
      const img = new Image();
      img.onload = async () => {
        // check if image is atleast 400 pixes wide and 400 pixels tall
        if (img.width < 400 || img.height < 400) {
          apiError(new Error("App image must be atleast 400x400 pixels"));
          return;
        } else {
          if (this.$refs.AppLogoUploaddropFileDiv) {
            this.$refs.AppLogoUploaddropFileDiv.style.backgroundImage = `url(${img.src})`;
          }
          this.uploadSelectedFile();
        }
      };
      img.src = URL.createObjectURL(file);
    },
  },
  async created() {
    this.events.forEach((eventName) => {
      document.body.addEventListener(eventName, (e) => e.preventDefault());
    });
    await this.getAppLogoSet();
  },
  beforeUnmount() {
    this.events.forEach((eventName) => {
      document.body.removeEventListener(eventName, (e) => e.preventDefault());
    });
  },
};
</script>
<style scoped lang="scss">
.logo {
  display: block;
  height: auto;
  margin: 1.5rem;

  &_appName {
    width: 100%;
    height: 34px;
    margin: 1rem 0;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #14161f;
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  input {
    display: none;
  }

  &_upload {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    gap: 12.66px;
    margin: auto;
    width: 178px;
    height: 178px;
    background: #f8f8fc;
    border: dashed 1.5px #7daff4;
    border-spacing: 1rem;
    border-radius: 47.4667px;
    flex: none;
    order: 1;
    flex-grow: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;

    &_label {
      font-family: "Nunito Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #14161f;
      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;
    }
  }
}
</style>
