<template>
  <div class="panel">
    <div class="panel__content" :class="isLg ? 'panel__pc' : ''">
      <DateRange />
      <Search placeholder="Поиск заказа" @update:search-query="getQuery" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DateRange } from "~/ui/date-range";

import Search from "~/components/search.vue";

import { useOrderCards } from "../../widgets/order-cards/store-order-cards";

const storeCards = useOrderCards();
const isLg = useBreakpointMatcher("lg");

const getQuery = async (query: string) => {
  await storeCards.searchByIdCard(query);
};
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 270px;
  height: 100%;
}
.panel__content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 16px;

  background-color: #fff;
  border-radius: 4px;
}
.panel__pc {
  position: fixed;
  width: 270px;
}
</style>
