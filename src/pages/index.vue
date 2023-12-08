<template>
  <FixedLeftColumn>
    <template #fixed>
      <Panel />
    </template>
    <template #default>
      <OrderCards />
      <DeleteConfirm
        v-if="storeDeleteConfirm.isDelete"
        title="Delete"
        @delete="() => storeDeleteConfirm.deleteConfirm()"
        @close="() => storeDeleteConfirm.deleteConfirm()"
      />
    </template>
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import DeleteConfirm from "~/components/shared/delete-confirm.vue";

import { useDeleteConfirm } from "~/components/card/store-card";
import Panel from "~/components/panel/index.vue";

import FixedLeftColumn from "~/views/layout/fixed-left-column.vue";
import OrderCards from "~/widgets/order-cards/index.vue";

import { useOrderCards } from "../widgets/order-cards/store-order-cards";
import { getAllOrderCards } from "../composables/orderCards/getAll";

const storeDeleteConfirm = useDeleteConfirm();
const storeCards = useOrderCards();

const getAll = async () => {
  storeCards.setCards(await getAllOrderCards(), useRoute().query?.card_id as string);
};

onMounted(getAll);
</script>
