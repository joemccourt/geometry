import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

import { init, setConfig } from "../geometry.js";

import { useControls } from 'leva';

const configInit = {
  numPoints: { value: 50, min: 0, max: 500, step: 1 },
  numTriangles: { value: 1, min: 0, max: 50, step: 1 },
  numAABBs: { value: 0, min: 0, max: 25, step: 1 },
  numOBBs: { value: 0, min: 0, max: 25, step: 1 },
  numLines: { value: 0, min: 0, max: 25, step: 1 },
  showNotation: false,
  isStatic: false,
  enablePointPoint: false,
  shouldDrawAxes: false,
  drawAllComparsions: false,
  colorBy: { value: "closestDist", options: ['closestCost', 'totalCost', 'closestDist'] },
};

export default function Home() {

  React.useEffect(init, []);

  const config = useControls(configInit);

  React.useEffect(() => {
    setConfig(config);
  }, [JSON.stringify(config)]);

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

