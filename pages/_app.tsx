import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>ML - Search App</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="HandheldFriendly" content="True" />
        <meta httpEquiv="cleartype" content="on" />
        <meta name="browser-support" content="samesite=true" />
        <meta
          name="csrf-token"
          content="t2b2cYTP-ENnskgHkbS645RaGFN0s1FA5M0A"
        />
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-head-react="true"
        />
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-head-react="true"
        />
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          data-head-react="true"
        />
        <meta
          name="description"
          content="Frete grátis no dia ✓ Compre parcelado sem juros! Saiba mais sobre nossas incríveis ofertas e promoções em milhões de produtos."
        />
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/navigation-desktop.css"
          rel="stylesheet"
          type="text/css"
          media="(min-width: 1024px)"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
