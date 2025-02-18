//main app file that handles the components
'use client'

//importing functions and modules from other files in the app
import Image from "next/image";
import styles from "./page.module.css";
import React from 'react'
import HomePage from './homepage.js'
import ProductPage from "./product.js";
import AboutPage from "./about.js";

//JSX formatting with a title, sub-title and the imported modules
export default function Home() {
  return (
    <div>
      <h1 style = {{fontFamily: 'Georgia', padding: '2px', textAlign: 'center'}}>
        <i> {/*Intro to the webpage in h1 and h2 elements*/}
          REV:<br/>
        </i>
      </h1>
      <h2 style = {{fontFamily: 'Georgia', padding: '2px', textAlign: 'center'}}>
        Find the Right Car for You
      </h2> 
      {/*Closest I could get to crafting a nav bar that shows different "pages"*/}
      <nav>
        <ol>
          <li>
            <HomePage name = "Guest" /> {/*Including arguments for the props in the components*/}
          </li>
          <li>
            <ProductPage errorMessage = "Please select a colour to view the car." />
          </li>
          <li>
            <AboutPage name = "Kai Nabea" />
          </li>
        </ol>
      </nav>
    </div>
  )
}