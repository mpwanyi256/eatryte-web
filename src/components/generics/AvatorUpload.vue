<template>
  <div class="logo">
    <div
      ref="AppLogoUploaddropFileDiv"
      class="logo_upload"
      :data-active="active"
      @drop.prevent="onFileDropped"
      @click="triggerFileInput"
    >
      <template v-if="!file || !url.length">
        <span class="logo_upload_label">
          {{
            `Drag and drop or click to upload. Minimum size: ${minimumFileWidth}X${minimumFileWidth} pixels file not more than ${maxFileSize}.`
          }}
        </span>
      </template>
    </div>
    <input
      ref="imageInput"
      type="file"
      accept="image/*"
      @change="onFileChange"
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onDeactivated, watch } from "vue";

export default defineComponent({
  name: "AvatorUpload",
  props: {
    description: {
      type: String,
      default: "Upload your app icon",
    },
    projectName: {
      type: String,
      default: "Project Name",
    },
    maximumFileSize: {
      type: Number,
      default: () => 2000000,
    },
    minimumFileWidth: {
      type: Number,
      default: () => 400,
    },
    minimumFileHeight: {
      type: Number,
      default: () => 400,
    },
    url: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const AppLogoUploaddropFileDiv = ref<HTMLElement | null>(null);
    const imageInput = ref<HTMLInputElement | null>(null);
    const events = ref<string[]>([
      "dragenter",
      "dragover",
      "dragleave",
      "drop",
    ]);
    const active = ref<boolean>(false);
    const file = ref<File | null | boolean>(null);

    // Methods
    const setAppBackgroundImage = (file: string) => {
      if (!AppLogoUploaddropFileDiv.value) return;
      AppLogoUploaddropFileDiv.value.style.backgroundImage = `url(${file})`;
    };

    // Set a watcher to url prop
    watch(
      () => props.url,
      (url) => {
        if (!url) return;
        setAppBackgroundImage(url);
        file.value = true;
      }
    );

    const onFileChange = (e: any) => {
      const fileSelected = e.target.files[0];
      loadSelectedFile(fileSelected);
    };

    const onFileDropped = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      const fileDropped = e.dataTransfer.files[0];
      loadSelectedFile(fileDropped);
    };

    const triggerFileInput = () => {
      imageInput.value?.click();
    };

    const loadSelectedFile = (filePicked: File) => {
      if (!filePicked) return;
      if (!filePicked.type.match("image.*")) {
        alert("Please select an image file");
        return;
      }
      if (filePicked.size > props.maximumFileSize) {
        alert("File size too large");
        return;
      }
      const img = new Image();
      img.onload = async () => {
        // check if image is atleast 400 pixes wide and 400 pixels tall
        if (
          img.width < props.minimumFileWidth ||
          img.height < props.minimumFileHeight
        ) {
          alert(new Error("App image must be atleast 400x400 pixels"));
          return;
        } else {
          file.value = filePicked;
          setAppBackgroundImage(img.src);
          emit("selected", filePicked);
        }
      };
      img.src = URL.createObjectURL(filePicked);
    };

    onMounted(() => {
      events.value.forEach((eventName) => {
        document.body.addEventListener(eventName, (e) => e.preventDefault());
      });
      if (props.url) setAppBackgroundImage(props.url);
    });

    onDeactivated(() => {
      events.value.forEach((eventName) => {
        document.body.removeEventListener(eventName, (e) => e.preventDefault());
      });
    });

    return {
      AppLogoUploaddropFileDiv,
      imageInput,
      active,
      file,
      maxFileSize: `${props.maximumFileSize / 1000000}MB`,
      triggerFileInput,
      onFileChange,
      onFileDropped,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/styles/constants.scss";
$onHoverBGColor: #c8dadf;

.logo {
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &_description {
    color: $grey900;
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
  }

  &_app_name {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: $grey900;
  }

  input {
    display: none;
  }

  &_upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    gap: 12.66px;
    margin: 1rem auto;
    width: 11rem;
    height: 11rem;
    background: $avatorBG;
    border-spacing: 1rem;
    border-radius: 2.9rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:hover {
      background-color: $onHoverBGColor;
    }

    &_label {
      font-family: "Nunito Sans";
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: $grey900;
    }
  }
}
</style>
