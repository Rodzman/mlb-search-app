interface Item {
  id: string;
  title: string;
  thumbnail: string;
  price: any;
  free_shipping: any;
  shipping?: Shipping;
}

interface Shipping {
  free_shipping: boolean;
}

export type Props = {
  item: Item;
};
