import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Main } from '../../components/main';
import { SearchBar } from '../../components/search-bar';

const Items: NextPage = () => {
  const { search } = useRouter().query;
  return (
    <div>
      <Head>
        <title>ML - Search App</title>
        <meta
          name="description"
          content="Página de buscas de produtos do Mercado Livre."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Main> */}
      Items - {search}
      <br />
      <Link href={'/items/18'}>Item 18</Link>
      <Link href={'/items/1'}>Item 1</Link>
      <Link href={'/items/3'}>Item 3</Link>
      {/* </Main> */}
    </div>
  );
};

export default Items;
