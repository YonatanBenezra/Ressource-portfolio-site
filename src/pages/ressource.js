import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const Ressource = () => (
  <Layout>
    <Seo title="RESSOURCE case study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing and launching a web development portfolio site</h6>
      </div>
      <p>
        <a href="https://ressource.com" target="_blank" rel="noreferrer">
          Ressource →
        </a>
        <br />
        Role: Full Stack Engineering, Creative Direction
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="https://rscbucket.s3.us-east-2.amazonaws.com/ressource-laptop.png"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="ressource"
          id="ressource"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
          After starting a development studio and after a couple of projects
          done by our amazing developers, we understood we need a portfolio
          sites to showcase our work. The site had to show the great
          contribution to the community and to our clients. We decided to use a
          React/Gatsby stack to build a site that is responsive and mobile
          friendly.
          <br></br>
          <strong>And here we have it</strong>
        </p>
      </div>

      <div className="case-study-grid">
        <div className="grid-item-half">
          <StaticImage
            src="../images/ressource-2.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="ressource"
            id="ressource"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="../images/ressource-3.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="ressource"
            id="ressource"
          />
        </div>

        <div className="grid-item-full">
          <StaticImage
            src="../images/ressource-1.png"
            className="hero-img"
            width={440}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="ressource"
            id="ressource"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="../images/ressource-mobile-1.png"
            className="hero-img"
            width={440}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="ressource"
            id="ressource"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="../images/ressource-mobile-2.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="ressource"
            id="ressource"
          />
        </div>
      </div>

      <div className="button-container next">
        <Link to="/parabelum">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Ressource
