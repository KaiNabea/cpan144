'use client'

import React, { useState } from "react";
import styles from "../page.module.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

export default function About() {
  const [title] = useState("ABOUT");

  return (
    <div className = {styles.page} style={{ margin: '24px' }}>
      <Navbar />
      <MainContent title={title} />
      <p style = {{
        textShadow: '2px 2px black',
        fontSize: '24px',
        padding: '10px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br/><br/>
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
        nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
        Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien
        risus a quam.
      </p>
      <Footer />
    </div>
  );
 }