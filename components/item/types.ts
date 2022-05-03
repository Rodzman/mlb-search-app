interface Item {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  freeShipping: boolean;
  shipping: Shipping;
}

interface Shipping {
  free_shipping: boolean;
}

export type Props = {
  item: Item;
};
