interface Item {
  id: string;
  title: string;
}

export type Props = {
  items: Array<Item>;
};
