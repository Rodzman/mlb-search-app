export interface Categories {
  id: string;
  name: string;
  path_from_root: Array<Category>;
}

interface Category {
  id: string;
  name: string;
}

export type Props = {
  categories: Categories;
};
