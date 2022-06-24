import React from "react"
import { Link } from "gatsby"
import { SiLinkedin } from "react-icons/si"


import "../components/main.css"
import "../components/layout.css"

import Seo from "../components/seo"



const contact = () => {
  return (
    <div className="container contact-page cssanimation sequence fadeInBottom">
      <Seo title="Contact" />
      <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>Ressource</h1>
      <h2 id="inquiries">CONNECT</h2>

      <div className="icons contact-link">
        <a href="https://www.linkedin.com/in/yonatanbenezra/">
          <SiLinkedin size="32px" color="#0072b1" />
        </a>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default contact

