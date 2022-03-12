import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Book from '../components/book'


export default function Book_Details() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Book Details
        </h1>

        {/* <Book name="Book Name" returnDate="Test Date" status="In stock"></Book> */}
        <Book name="Book Name" returnDate="Test Date" status="In stock" url="" description="Test description"/>

      </main>

    </div>
  )
}
