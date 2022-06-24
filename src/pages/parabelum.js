import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/main.css"
import "../components/layout.css"

const Parabelum = () => (
  <Layout>
    <Seo title="PARABELLUM Case Study" />
    <div className="case-study cssanimation sequence fadeInBottom">
      <div className="half-wrapper">
        <h6>Designing a landing page for an established services company</h6>
      </div>
      <p>
        <a href="#" target="_blank" rel="noreferrer">
          Parabelum →
        </a>
        <br />
        Role: Wordpress Development, Web Design
      </p>

      <div className="img-wrapper">
        <StaticImage
          src="../images/parabellum-1.jpgg"
          className="hero-img"
          width={1280}
          quality={100}
          margin={0}
          formats={["auto", "webp"]}
          alt="parabelum hair care"
          id="ressource"
        />
      </div>

      <div className="half-wrapper">
        <h3>CHALLENGE</h3>
        <p>
        Parabellum offers tailored training programmes and unique, intelligent experiences to equip elite individuals with the skills, intuition and preparation they require to function professionally at the highest level.

Founded by former members of Israeli intelligence communities and elite special forces, Parabellum’s philosophy and services are based on advanced knowledge of espionage, survival, anti-terrorism, combat and psychological warfare methods.

The Parabellum experience is designed to challenge physically, emotionally and intellectually, tailor-made to each client’s capabilities and resulting in better focus, preparation and ability to deal with extreme stress and unconventional, highly-charged situations.
        <br>
        </br>
        <strong>The challenge: design and develop a site which explains what the company does and fits the companies character</strong>
        </p>
      </div>

      <div className="case-study-grid">
        <div className="grid-item-half">
          <StaticImage
            src="../images/parabellum-2.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="parabelum"
            id="ressource"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="../images/parabellum-3.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="parabelum"
            id="ressource"
          />
        </div>

        <div className="grid-item-full">
          <StaticImage
            src="../images/parabellum-1.png"
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
            src="../images/parabellum-mobile.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="parabelum"
            id="ressource"
          />
        </div>

        <div className="grid-item-half">
          <StaticImage
            src="../images/parabellum-main.png"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="parabelum"
            id="ressource"
          />
        </div>
      </div>

      <div className="button-container next">
        <Link to="/ressource">
          <button className="case-study-btn">Next</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Parabelum
