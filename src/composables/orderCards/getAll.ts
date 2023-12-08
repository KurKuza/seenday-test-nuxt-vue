import type { OrderType } from "~/components/card/types";

export const getAllOrderCards = async () => {
  await nextTick();
  const request = await useAPIFetch("https://api.dev-cabinet.seenday.com/method/orders.getTest");
  const orders = JSON.parse(request?.data?.value as any).response?.data.orders;
  console.log("🚀  orders:", orders);

  return orders as OrderType[];
};
