<script setup lang="ts">
import { useOrderCards } from "./store-order-cards";

import OrderCard from "../../components/card/index.vue";

const storeCards = useOrderCards();
</script>

<template>
  <div v-for="order of storeCards.orderCards" :key="order.uid">
    <OrderCard :order="order" />
  </div>
</template>

<style scoped lang="scss"></style>
