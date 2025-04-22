'use client'

import React, { useState } from "react";
import styles from "../page.module.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MainContent from "../../components/MainContent";

export default function Contact() {
  let [title] = useState("RESERVATION")
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [date, setDate] = useState('')
  let [time, setTime] = useState('')
  let submission = (event) => {
    event.preventDefault()
    alert(`Thank you\nWe've have a reservation booked for:\n${date} - ${time}.\nPlease check your email to see your booking.`)
    setName('')
    setEmail('')
    setDate('')
    setTime('')
  }
  return (
    <div className = {styles.page} style={{ margin: '24px' }}>
      <Navbar />
      <MainContent title={title} />
      <div style = {{textShadow: '2px 2px black', marginLeft: '5px', marginTop: '5px', padding: '5px'}}>
        <form onSubmit = {submission}>
          <label>
            Name: 
          </label>
          <br/>
          <input
            type = "text"
            value = {name}
            placeholder = "type here"
            onChange = {(n) => setName(n.target.value)} />
          <br/>
          <br/>
          <label>
            Email: 
          </label>
          <br/>
          <input
            type = "email"
            value = {email}
            placeholder = "type here"
            onChange = {(e) => setEmail(e.target.value)} />
          <br/>
          <br/>
          <input
            type = "date"
            value = {date}
            onChange = {(e) => setDate(e.target.value)} />
          <br/>
          <br/>
          <input
            type = "time"
            value = {time}
            onChange = {(e) => setTime(e.target.value)} />
          <br/>
          <br/>
          <button>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}