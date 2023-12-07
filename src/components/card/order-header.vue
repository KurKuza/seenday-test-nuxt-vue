<script setup lang="ts">
import type { OrderType } from "./types";

const props = defineProps({
  order: {
    type: Object as PropType<OrderType>,
    required: true
  }
});

const isPayed = computed(() => {
  return props.order.c_date_pay ? props.order.c_date_pay : "Не оплачен";
});
</script>

<template>
  <div class="order-header padding">
    <div class="order-header__info">
      <div class="order-header__ids">
        <p class="order-id">
          №: <span class="bold"> {{ props.order.id }}</span>
        </p>
        <p class="order-uid">Клиент ID: {{ props.order.uid }}</p>
      </div>
      <div>
        <p>
          Сумма: <span class="bold"> {{ props.order.sum }}</span> руб.
        </p>
        <p>
          Статус:
          <span :class="props.order.c_date_pay && 'green'">
            {{ props.order.c_date_pay ? "Оплачен" : "Не оплачен" }}
          </span>
        </p>
      </div>
      <div>
        <p>
          <span class="bold">{{ isPayed }}</span>
        </p>
        <p>
          Создан: <span class="bold">{{ props.order.c_date }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-header__info {
  display: flex;
  width: 100%;
  gap: 15px;
}
</style>
