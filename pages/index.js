import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CustomForm from '@/components/form'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>QuickFit Home</title>
        <meta name="author" content="MDIA 2109_Sarah Sun" />
        <meta property="og:title" content="Assignment #2 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={styles.main} id="main">
        <Header />
        <div className={styles.para} id="para">
          Quickfit helps people on specific diets navigate fast-food restaurants 
          by providing information on suitable menu items 
          and recommended modifications. It also offers a daily calorie calculator 
          and suggests fast food options that fit your calorie limit.
        </div>
        <CustomForm />
      </main>
    </>
  )
}
