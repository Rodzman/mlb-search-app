interface Item {
  id: string;
  title: string;
}

interface Data {
  results: Item[];
}

export type Props = {
  data: Data;
};
