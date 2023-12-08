<script setup lang="ts">
import { StatusCard } from "~/ui/status-card";
import { Button } from "~/ui/button";

import OrderDescription from "./order-description.vue";
import OrderHeader from "./order-header.vue";
import type { OrderType } from "./types";

const props = defineProps({
  order: {
    type: Object as PropType<OrderType>,
    required: true
  }
});

const getStatus = (): string => {
  return props.order.c_date_pay ? "green" : "";
};
</script>

<template>
  <StatusCard :status="getStatus()" class="order-card">
    <div class="order-blocks">
      <div class="order-content">
        <OrderHeader :order="props.order" />
        <OrderDescription :order="props.order" />
      </div>
      <div class="order-buttons">
        <Button size="small" color="purple">Просмотр</Button>
        <Button size="small" color="green">Оплачен</Button>
        <Button size="small" color="red">Закртыть</Button>
      </div>
    </div>
  </StatusCard>
</template>

<style scoped lang="scss">
.order-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  margin-bottom: 15px;
}
.order-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}
.order-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.order-blocks {
  display: flex;
  gap: 16px;
}
.green {
  color: green;
}
</style>
