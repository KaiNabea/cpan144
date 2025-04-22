'use client'

import React from "react";
import styles from "./page.module.css"
import Link from "next/link"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className = {styles.page} style={{ margin: '24px' }}>
      <h1 style = {{textShadow: '2px 2px black', fontSize: '60px', textAlign: 'center', padding: '4px' }}>DOJI'S</h1>
      <h2 style = {{textShadow: '2px 2px black', fontSize: '24px', textAlign: 'center', padding: '4px'}}><i>Bold, Exquisite, Marvelous</i></h2>
      <h3 style = {{textShadow: '2px 2px black', fontSize: '20px', textAlign: 'center', padding: '4px'}}>
        <Link href = "/Menu">
          Menu
        </Link>
        <br/><br/>
        <Link href = "/About">
          About
        </Link>
        <br/><br/>
        <Link href = "/Contact">
          Book Now
        </Link>
      </h3>
      <Footer />
    </div>
  );
}