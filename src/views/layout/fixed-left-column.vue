<template>
  <main class="main" data-fixed="fixed">
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
.main__content {
  flex: 1;
}
</style>
