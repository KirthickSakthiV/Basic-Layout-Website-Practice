import React from 'react'
import './Home.css'
import logo from './images/rentcar-removebg-preview.png'
import {Link } from 'react-router-dom'
import logofoot from './images/rentcar-removebg-preview.png'
import fb from './images/icons8-facebook-96.png'
import insta from './images/icons8-instagram-96.png'
import x from './images/icons8-twitterx-96.png'
export default function Home() {
  return (
    <>
  <div className="container1">
    <div className="cont it1">
      <h1>"Unlock Your Journey with Ease: Drive. Explore. Rent."</h1>
    </div>
    <div className="container11">
      <div className="cont1 it2">
        <Link id='home' to={'/'}>Home</Link>
      </div>
      <div className="cont1 it3">
      <Link id='about' to={'/about'}>About</Link>
      </div>
      <div className="cont1 it4">
      <Link id='contact' to={'/contact'}>Contact us</Link>
      </div>
    </div>
    <div className="logo">
      <img src={logo} height="140px" width="140px" />
    </div>
  </div>
  <div className="menu">
    <div className="m11" />
    <div className="m12" />
    <div className="m13">
      Welcome to Cars Go – where car rental is{" "}
      <b>"logo-free and hassle-free!"</b> Drive with freedom and savings.
      Experience simplicity on the road.{" "}
    </div>
    <div className="m14">
      "Driving Dreams, Serving All: Your Perfect Ride Awaits!"
    </div>
  </div>
  <div className="lowmid">
    <div className="low l1" />
    <div className="low l2" />
    <div className="l3">BUDGET CARS</div>
    <div className="l4">PREMIUM CARS</div>
  </div>
  <div className='white'>
    <h2>"Adventure awaits just a rental away. Explore the world on four wheels."</h2>
  </div>
  <div className="footer">
    <div className="foot1">
      <div className="logofoot">
        <img src={logofoot} height="140px" width="140px" />
      </div>
      <div className="social">
        <div className="fb">
          <img src={fb} height="50px" width="50px" />
        </div>
        <div className="insta">
          <img src={insta} height="50px" width="50px" />
        </div>
        <div className="x">
          <img src={x} height="50px" width="50px" />
        </div>
      </div>
      <div className="rights">
        2024 CarRental India Pvt. Limited. All rights reserved.
      </div>
    </div>
    <div className='foot2'>
CONTACT<br></br>
<br></br><br></br>
Find a Dealer<br></br><br></br>
Request a Test Drive<br></br><br></br>
Careers<br></br><br></br>
Contact Us<br></br><br></br>
    </div>
    <div className='foot3'>
    LEGAL<br></br>
<br></br><br></br>
Legal Disclaimer/Imprint<br></br><br></br>

Privacy Policy<br></br><br></br>

    </div>
  </div>
</>

  )
}
