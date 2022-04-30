import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ML - Test</title>
        <meta name="description" content="Teste de criacao de app para o ML" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Teste pagina ML</h1>
        <p className={styles.description}>
          <Link href="/items">
            Items
          </Link>
        </p>
      </main> 
    </div>
  )
}

export default Home
