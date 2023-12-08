<template>
  <div class="order-description block">
    <div class="order-details">
      <p><span class="title">Фотосессия ID</span>: {{ props.order.psid }}</p>
      <p>
        <span class="title">Статус</span>: <span class="green">{{ props.order.ps_type && "открыта" }}</span>
      </p>
      <p>
        <span class="title">{{ props.order.type_data }}</span
        >: {{ props.order.value }}, {{ props.order.s_group }}
      </p>
      <p>
        <span class="title">Телефон</span>: <a href="tel:{{ props.order.phone }}">{{ props.order.phone }}</a>
      </p>
      <p>
        <span class="title">Email</span>:
        <a href="mailto:{{ props.order.email_payer }}"> {{ props.order.email_payer }}</a>
      </p>
      <p><span class="title">Адрес</span>: {{ props.order.address }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrderType } from "./types";

const props = defineProps({
  order: {
    type: Object as PropType<OrderType>,
    required: true
  }
});
</script>

<style scoped lang="scss">
.order-description {
  width: 100%;
  font-size: 0.9rem;
  background-color: var(--bg_row_table_order);
}

.title {
  font-weight: bold;
}

.order-details {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  width: fit-content;
  padding: 4px 4px 4px 0;
  max-height: 75px;

  p {
    padding-left: 8px;
  }
}
</style>
