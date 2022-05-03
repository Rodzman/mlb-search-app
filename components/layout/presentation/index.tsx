import Head from 'next/head';
import { Header } from '../../header';
import { Main } from '../../main';
import type { Props } from '../types';
import styles from './styles.module.scss';

const LayoutPresentation = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ML - Search App</title>
        <meta
          name="description"
          content="Página de buscas de produtos do Mercado Livre."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default LayoutPresentation;
