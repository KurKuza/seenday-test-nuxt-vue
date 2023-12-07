<script setup lang="ts">
import { DateRange } from "~/ui/date-range";
</script>

<template>
  <div class="panel">
    <div class="panel__content">
      <DateRange />
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 100%;
}
.panel__content {
  position: fixed;
}
</style>
