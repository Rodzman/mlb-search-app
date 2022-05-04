import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import { ItemsList } from '../../components/items-list';
import { ItemsService } from '../../services';

const Items: NextPage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <ItemsList data={data} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const search = query.search;
  const data = await ItemsService(search);
  return {
    props: {
      data
    }
  };
};

export default Items;
