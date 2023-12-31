import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

import { init } from "../geometry.js";

export default function Home() {

  React.useEffect(init);

  return (
    <>
      <Head>
        <title>Geometry Playground</title>
        <meta name="description" content="Geometry Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <canvas id="demo" style={{width: "1200px", height: "600px"}} width="1200" height="600" />
      </main>
    </>
  )
}

