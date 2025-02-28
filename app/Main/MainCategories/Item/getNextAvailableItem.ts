import { useSelector } from "react-redux";
import { CartDataState } from "./ItemClient";
import { itemsCustomData } from "./ItemsCustomData";
import { RootState } from "@/app/redux/store";

let nextAvailableItemIndex = 0;
export function getNextAvailableItem(
  cartItems: CartDataState[]
): CartDataState {
  const cartData = useSelector((state: RootState) => state.cart);

  const cartIds = cartItems.map((item) => item.id);
  for (let i = nextAvailableItemIndex; i < itemsCustomData.length; i++) {
    if (!cartIds.includes(itemsCustomData[i].id)) {
      nextAvailableItemIndex = i + 1; // advance pointer for next call
      return itemsCustomData[i];
    }
  }
  // If all items are in the cart, reset pointer and return the first item.
  nextAvailableItemIndex = 1;
  return itemsCustomData[0];
}
