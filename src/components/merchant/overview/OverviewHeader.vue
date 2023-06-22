<template>
    <div class="overview_header">
        <div class="overview_header_title">
            <h3>Overview</h3>
        </div>
        <div class="overview_header_actions">
            <button class="btn btn-primary">Add Product</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "OverviewHeader",
});
</script>
<style lang="scss" scoped>
.overview_header {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}
</style>