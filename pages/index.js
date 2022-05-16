import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Simplest Company</title>
        <meta name="description" content="The Simplest Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Simplest Company
        </h1>

        <p className={styles.description}>
          Simple does not mean easy
        </p>
      </main>
    </div>
  )
}
