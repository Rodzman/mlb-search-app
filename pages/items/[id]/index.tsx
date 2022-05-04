import type {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps
} from 'next';
import { Breadcrumb } from '../../../components/breadcrumb';
import { ItemDetails } from '../../../components/item-details';
import {
  ItemService,
  DescriptionService,
  CategoriesService
} from '../../../services';

const Item: NextPage = ({
  data,
  categories
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Breadcrumb categories={categories} />
      <ItemDetails item={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id;
  const itemDetails = await ItemService(id);
  const itemDescription = await DescriptionService(id);
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

export default Item;
