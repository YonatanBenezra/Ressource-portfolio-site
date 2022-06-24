import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const Eccomerce = () => (
  <Layout>
    <Seo title="HOLLYWOOD Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing an ecomm store for an established sewing machine shop</h6>
      </div>
      <p>
        <a
          href="https://eccomercenitelighter.com"
          target="_blank"
          rel="noreferrer"
        >
          B.M. Kesem →
        </a>
        <br />
        Role: Front End Engineering, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src=""
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="eccomerce nite lighter"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          How do you refresh a brand that has done the same thing for years?
          <br /> Our strategy involved two main goals:
          <br />
          1. Highlight the impressive client base to build prospective client
          trust.
          <br />
          2. Use tools that are cutting edge in 2022.
          <br />
          We made sure that the websites design will be cutting edge <br />
          <br />
          <a
            href="https://eccomercenitelighter.com"
            target="_blank"
            rel="noreferrer"
          >
            See for yourself →
          </a>
        </p>
      </div>

      <div className="button-container next">
        <Link to="/ressource">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Eccomerce
