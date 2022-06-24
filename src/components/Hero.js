import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'



const Hero = () => {
    return (
      <div>
        <div className="container cssanimation sequence fadeInBottom">
          <h2 id="hero-text" className="">
            <span>Ressource</span> is a development studio.
            <br />
            We partner with creative agencies to bring designs to life.
            <br /> As if by magic.
          </h2>
          {/* <p className="arrow down">&#8595;</p> */}
        </div>

        <div className="img-wrapper">
          <StaticImage
            src="../images/hero-img.jpg"
            className="hero-img"
            width={1280}
            quality={100}
            margin={0}
            formats={["auto", "webp"]}
            alt="hero"
            id="hero"
          />
        </div>

        <div className="container cssanimation sequence fadeInBottom">
          <div id="home-page-cta">
            <Link to="/work">
              <button>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Hero