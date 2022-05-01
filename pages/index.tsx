import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ML - Search App</title>
        <meta
          name="description"
          content="Frete grátis no dia ✓ Compre parcelado sem juros! Saiba mais sobre nossas incríveis ofertas e promoções em milhões de produtos."
        />
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
      </Head>
      NNN
    </div>
  );
};

export default Home;
