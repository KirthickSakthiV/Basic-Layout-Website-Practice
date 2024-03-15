import React from 'react'
import './Contact.css'
import pin1 from './images/pin.png'
import email from './images/email.png'
import phone from './images/phone-call.png'
import tele from './images/telephone-call.png'
import instacon from './images/instagram(1).png'
import fbcon from './images/facebook(1).png'
import xcon from './images/twitter(1).png'
export default function Contact() {
  return (
    <>
  <header>
    <h1>Contact Us</h1>
  </header>
  <main>
    <div className="contact-form">
      <h2>Help Center</h2>
      <br />
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required="" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required="" />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required=""
          defaultValue={""}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div className="contact-details">
      <br />
      <h2>Contact Details</h2>
      <br />
      <p>
        <img src={pin1} height="20px" width="20px" /> <b>ADDRESS:</b> 25/Anna
        Nagar,Chromepet,Chennai.
      </p>
      <p>
        <img src={email} height="20px" width="20px" /> <b>E-MAIL:</b>{" "}
        carrent-amk@gmail.com
      </p>
      <p>
        <img src={phone} height="20px" width="20px" /> <b>PHONE:</b>{" "}
        9529378221
      </p>
      <p>
        <img src={tele} height="20px" width="20px" />{" "}
        <b>TELEPHONE:</b>
      </p>
      <p>
        For Online / Website Related Queries: 7506404567 (Operational all days,
        9 am to 8 pm)
      </p>
      <p>
        For other queries : 6374547891 (Operational all days, 9 am to 8 pm){" "}
      </p>
    </div>
  </main>
  <div className="a">
    <img className="f" src={instacon} height="50px" width="50px" />
    <img className="f" src={fbcon} height="50px" width="50px" />
    <img className="f" src={xcon} height="40px" width="40px" />
  </div>
</>

  )
}
