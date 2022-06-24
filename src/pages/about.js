import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/main.css"
import "../components/layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import {
  SiAdobephotoshop,
  SiCss3,
  SiGatsby,
  SiGithub,
  SiJavascript,
  SiLinkedin,
  SiReact,
  SiFigma,
  SiAmazonaws,
  SiBlender,
  SiVisualstudiocode,
  SiGoogle,
} from "react-icons/si"

const About = () => {

  return (
    <div>
      <Layout>
        <Seo title="About" />
        <div className="container cssanimation sequence fadeInBottom">
          <div className="about-wrapper">
            <div className="headshot-with-greeting">
              <StaticImage
                src="../images/about-img.jpeg"
                className=""
                width={480}
                quality={100}
                margin={0}
                formats={["auto", "webp"]}
                alt="headshot"
                id=""
              />
              <h3 className="greeting">Hi! We are <i><bold> Ressource </bold></i></h3>
            </div>
            <div className="bio-wrapper">
              <p id="bio">
                <span>Ressource</span> is the development studio of ARDC.
                we partner with creative agencies to bring designs to life.
                Our proccess looks like this:
                developing community <span>&#8594;</span> ideation <span>&#8594;</span> design <span>&#8594;</span> production.
                <br />
                <br />
                By teaching refugees from a lower social and economic level
                we are able to create a better future for them and for you,
                we offer development solutions with developers who have a lot of motivation,
                senior developers who make sure the process goes on the best way possible and on the way,
                help the community.
                <br />
                <br />
                We are a team of developers who love to create.
                Our goal is to do the heavy lifting to make digital products feel
                effortless. As if by magic.
              </p>
            </div>
          </div>

          <div className="skill-icon-wrapper">
            <section className="grid-container skills">
              <div className="grid-item icons tooltip">
                <a href="https://www.linkedin.com/in/yonatanbenezra/">
                  <SiLinkedin size="40px" color="#0072b1" />
                </a>
                <span className="tooltiptext">LinkedIn</span>
              </div>

              <div className="grid-item icons tooltip">
                <a href="https://github.com/yonatanbenezra/">
                  <SiGithub size="40px" color="#6e5494" />
                </a>
                <span className="tooltiptext">GitHub</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiReact size="40px" />
                  <span className="tooltiptext">React</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiJavascript size="40px" />
                <span className="tooltiptext">Javascript</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiCss3 size="40px" />
                <span className="tooltiptext">CSS</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiAdobephotoshop size="40px" />
                <span className="tooltiptext">Photoshop</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiGatsby size="40px" />
                <span className="tooltiptext">Gatsby</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiFigma size="40px" />
                <span className="tooltiptext">Figma</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiAmazonaws size="40px" />
                <span className="tooltiptext">aws</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiBlender size="40px" />
                <span className="tooltiptext">Blender</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiVisualstudiocode size="40px" />
                <span className="tooltiptext">VSCode</span>
              </div>
              <div className="grid-item icons tooltip">
                <SiGoogle size="40px" />
                <span className="tooltiptext">Google</span>
              </div>
            </section>
              <Link to="/contact">
                  <button id="about-button">Learn More</button>
                </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
