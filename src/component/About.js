import React from 'react'
import './About.css'
import img1 from './images/car1.jpg'
import img2 from './images/william-bout-Vsf30J-DCm8-unsplash.jpg'

export default function About() {
  return (
    <>
  <section className="about">
    <div className="main">
      <img src={img1} />
      <div className="about-text">
        <h1>About Us</h1>
        <h5>Our Gallery Phts</h5>
        <p>
          Welcome to Car Rental - your go-to destination for reliable and
          convenient car rentals. At Car Rental, we pride ourselves on
          offering a diverse fleet of well-maintained vehicles to meet your
          travel needs. Our commitment to exceptional service, safety, and
          convenience sets us apart. Experience hassle-free rentals with us and
          enjoy the journey ahead.
        </p>
      </div>
    </div>
  </section>
  <section className="about1">
    <div className="about-text1">
      <h1>Customer satisfication</h1>
      <h5>Review us</h5>
      <p>
        Customer satisfaction in the car rental industry hinges on various
        factors. A seamless reservation process with transparent pricing and a
        diverse vehicle selection is essential. Quality customer service, marked
        by friendly and efficient staff, contributes significantly. Clear
        communication on policies and flexible rental options adds to a positive
        experience. Swift problem resolution, responsive support, and
        integration of technology like mobile apps enhance the overall customer
        journey. Encouraging feedback, implementing safety measures, and
        offering post-rental perks contribute to sustained satisfaction and
        loyalty. In essence, a holistic approach that prioritizes convenience,
        communication, and quality ensures customers leave with a positive
        impression.
      </p>
      <h6>Copyright © 2024 Signoraware all rights reserved.</h6>
    </div>
    <div className="bg1">
      <img src={img2} />
    </div>
  </section>
  <section>
    <div className="main-conatiner">
      <div className="text">
        <h1>Feed Back</h1>
        <h4>From Customers</h4>
      </div>
      <div className="container">
        <div className="con1">
          <div className="sub-container1">
            <div className="t1">
              <p>
                "Renting from XYZ Rentals was a breeze. Booking online was easy,
                and the car was clean and well-maintained. The staff at the
                rental office were friendly and efficient. Highly recommended!"{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="con2">
          <div className="sub-container2">
            <div className="t2">
              <p>
                "ABC Rentals provided outstanding service. The staff were
                accommodating, and the rental process was smooth. The vehicle
                was clean and comfortable. Will definitely use them again."
              </p>
            </div>
          </div>
        </div>
        <div className="con3">
          <div className="sub-container3">
            <div className="t3">
              <p>
                "DEF Rentals exceeded expectations. The online booking was
                simple, pickup was hassle-free, and the car performed well.
                Their commitment to customer satisfaction is commendable. Will
                be back."{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section1>
    <div className="footer-container">
      <div className="ftext">
        <h5>Happy Customers :)</h5>
      </div>
    </div>
  </section1>
</>

  )
}
