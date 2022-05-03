import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { ItemDetails } from '../../../components/item-details';
import { Main } from '../../../components/main';

const Item: NextPage = ({data}: any) => {
  return (
    <Main>
      <section>Breadcrumb</section>
      <ItemDetails item={data} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;
  const itemDetails = await ItemService(id);
  const itemDescription = await ItemDescriptionService(id);
  const categories = await CategoriesService(itemDetails.category_id);
  const item = { ...itemDetails, description: itemDescription };
  const data = await item;
  return {
    props: {
      data,
      categories
    }
  };
};


const ItemDescriptionService = async (id: string | string[] | undefined) => {
  try {
    const item = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const itemDescription = await item.json();
    return itemDescription;
  } catch (error) {
    console.log(error);
  }
};

const ItemService = async (id: string | string[] | undefined) => {
  try {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await item.json();
    return itemData;
  } catch (error) {
    console.log(error);
  }
};

const CategoriesService = async (id: string | string[] | undefined) => {
  try {
    const category = await fetch(`https://api.mercadolibre.com/categories/${id}`);
    const data = await category.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export default Item;
