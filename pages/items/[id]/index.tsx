import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Main } from '../../../components/main';

const Item: NextPage = () => {
  const { id } = useRouter().query;
  return (
    <Main>
      <div>Details Page - {id}</div>
    </Main>
  );
};

export default Item;
