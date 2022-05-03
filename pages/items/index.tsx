import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { ItemsList } from '../../components/items-list';

const Items: NextPage = ({ data }: any) => {
  return <ItemsList items={data} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const search = query.search;
  const items = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
  );
  const data = await items.json();
  return {
    props: {
      data
    }
  };
};

export default Items;
