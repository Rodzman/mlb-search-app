import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Item: NextPage = () => {
  const { id } = useRouter().query;
  return <div>Details Page - {id}</div>;
};

export default Item;
