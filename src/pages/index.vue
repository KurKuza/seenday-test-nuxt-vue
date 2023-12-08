<script setup lang="ts">
import type { OrderType } from "~/components/card/types";
import Panel from "~/components/panel/index.vue";

import FixedLeftColumn from "~/views/layout/fixed-left-column.vue";
import OrderCards from "~/widgets/order-cards/index.vue";

import { useAPIFetch } from "../composables/useAPIFetch";

const allItems = ref<OrderType[]>([]);

const getAll = async () => {
  await nextTick();
  const request = await useAPIFetch("https://api.dev-cabinet.seenday.com/method/orders.getTest");
  const parsed = JSON.parse(request?.data?.value as any);
  allItems.value = parsed?.response?.data.orders || [];
};

onMounted(getAll);
</script>

<template>
  <FixedLeftColumn>
    <template #fixed>
      <Panel />
    </template>
    <template #default>
      <OrderCards :orders="allItems" />
    </template>
  </FixedLeftColumn>
</template>
