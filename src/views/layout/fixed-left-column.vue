<script setup>
import { useBreakpointMatcher } from "../../composables/useBreakpointMatcher";

const isLg = useBreakpointMatcher("lg");
</script>

<template>
  <main :class="isLg ? 'main' : 'main__table'" data-fixed="fixed">
    <div>
      <slot name="fixed" />
    </div>
    <div class="main__content">
      <slot />
    </div>
  </main>
</template>

<style lang="scss">
@import "~/assets/styles/components/main/main.scss";

.main {
  display: flex;
}
.main__table {
  display: flex;
  flex-direction: column;
}
.main__content {
  flex: 1;
}
</style>
