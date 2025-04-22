'use client'

import React, { useState } from "react";
import styles from "../page.module.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

export default function Menu() {
  const [title] = useState("MENU");

  return (
    <div className = {styles.page} style={{ margin: '24px' }}>
      <Navbar />
      <div style = {{textAlign: 'center'}}>
        <MainContent title={title} />
      </div>
      <div style = {{fontSize: '24px', padding: '10px'}}>
        <table className = {styles.center}>
          <tbody>
            <tr>
              <td style = {{textShadow: '2px 2px black', padding: '4px'}}>
                APPETIZERS
              </td>
              <td style = {{textShadow: '2px 2px black', padding: '4px'}}>
                Onion Rings
                <br/>
                Calamari
                <br/>
                Loaded Nachos
                <br/>
                Caesar Salad
              </td>
              <td style = {{padding: '4px'}}>
                —— $8.99
                <br/>
                —— $10.99
                <br/>
                —— $9.99
                <br/>
                —— $8.99
              </td>
            </tr>
            <br/>
            <tr>
              <td style = {{textShadow: '2px 2px black', padding: '4px'}}>
                ENTRÉES
              </td>
              <td style = {{textShadow: '2px 2px black', padding: '4px'}}>
                12oz Sirloin
                <br/>
                Cordon Bleu
                <br/>
                Atlantic Salmon
                <br/>
                Chicken Alfredo
              </td>
              <td>
                —— $29.99
                <br/>
                —— $25.99
                <br/>
                —— $27.99
                <br/>
                —— $24.99
              </td>
            </tr>
            <br/>
            <tr>
              <td style = {{textShadow: '2px 2px black', padding: '4px'}}>
                DESSERTS
              </td>
              <td>
                Tiramisu
                <br/>
                Chocolate Lava Cake
                <br/>
                Apple Crumble
              </td>
              <td>
                —— $18.99
                <br/>
                —— $8.99
                <br/>
                —— $10.99
              </td>
            </tr>
            <br/>
            <tr>
              <td style = {{textshadow: '2px 2px black', padding: '4px'}}>
                DRINKS
              </td>
              <td>
                Pop
                <br/>
                Sparkling Water
                <br/>
                Juice
                <br/>
                Wine (5oz)
              </td>
              <td>
                —— $3.49
                <br/>
                —— $4.99
                <br/>
                —— $3.99
                <br/>
                —— $8.99
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
 }