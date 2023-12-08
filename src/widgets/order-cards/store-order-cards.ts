import type { OrderType } from "~/components/card/types";

import { getAllOrderCards } from "~/composables/orderCards/getAll";

export const useOrderCards = defineStore("orderCards", () => {
  const orderCards: Ref<OrderType[]> = ref([]);

  const setCards = (cards: OrderType[], query?: string) => {
    orderCards.value = cards;

    if (query) {
      const cards = orderCards.value.find(card => card.id.startsWith(query));
      orderCards.value = cards ? [cards] : [];
    }
  };

  const searchByIdCard = (query: string) => {
    history.pushState("", "", "/manager/orders/?card_id=" + query);
    const cards = orderCards.value.find(card => card.id.startsWith(query));

    if (!query) {
      getAllOrderCards().then(cards => {
        orderCards.value = cards;
      });
    }

    orderCards.value = cards ? [cards] : [];
  };

  return { orderCards, setCards, searchByIdCard };
});
