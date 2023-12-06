<script setup lang="ts">
import Notice from "../notice/index.vue";

const props = defineProps<{ withoutImage?: boolean }>();
</script>

<template>
  <div class="empty">
    <img v-if="!props.withoutImage" src="~/assets/images/errors/no-photo-main.png" />

    <Notice>
      <slot />
    </Notice>
  </div>
</template>

<style lang="scss">
@import "~/assets/styles/components/empty.scss";
</style>
