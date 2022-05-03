interface Details {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  free_shipping: boolean;
  shipping: string;
  pictures: Array<Picture>;
  condition: string;
  sold_quantity: number;
  description: Description;
}

interface Description {
  plain_text: string;
  text: string;
  last_updated: string;
  date_created: string;
}

interface Picture {
  id: string;
  url: string;
  secure_url: string;
}

export type Props = {
  item: Details;
};
