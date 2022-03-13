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

        {/* <Book name="Book Name" returnDate="Test Date" status="In stock"></Book> */}
        <Book 
          name="The Queen of Paris: A Novel of Coco Chanel" 
          returnDate="Test Date" 
          status="In stock" 
          url="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781982546939&erroroverride=1" 
          description="Test description"
          height="300"
          width="200"
        />

      </main>

    </div>
  )
}
