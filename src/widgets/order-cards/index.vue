<script setup lang="ts">
import type { OrderType } from "~/components/card/types";

import OrderCard from "../../components/card/index.vue";

const props = defineProps({
  orders: {
    type: Object as PropType<OrderType[]>,
    required: true
  }
});
</script>

<template>
  <div v-for="order of props.orders" :key="order.uid">
    <OrderCard :order="order" />
  </div>
</template>

<style scoped lang="scss"></style>
