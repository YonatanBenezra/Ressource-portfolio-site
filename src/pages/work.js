import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../components/main.css"
import "../components/layout.css"

const work = () => {
    return (
      <div>
        <Layout>
          <Seo title="Work" />
          <div className="case-studies-text cssanimation sequence fadeInBottom">
            <div className="grid-container">
              <div className="item2 flip">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/ressource.png"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="eccomerce nite lighter"
                  />
                </div>
              </div>

              <div className="item1 text-on-right">
                <h6>Ressource Portfolio Site</h6>
                <p id="designing">Creating a software development portfolio site</p>

                <Link to="/ressource">
                  <button className="see-case-study">See case study</button>
                </Link>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2 flip">
                <div className="img-wrapper">
                  <StaticImage
                    src="../images/parabellum-main.png"
                    className="hero-img"
                    width={1096}
                    quality={60}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="ressource"
                  />
                </div>
              </div>

              <div className="item1 text-on-right">
                <h6>PARABELLUM</h6>
                <p id="designing">Designing and launching a unique esponiage portfolio site</p>

                <Link to="/parabelum">
                  <button className="see-case-study">See case study</button>
                </Link>
              </div>
            </div>

            <div className="case-study-spacer"></div>
            <div className="case-study-spacer-2"></div>

            <div className="grid-container">
              <div className="item2">
                <div className="img-wrapper">
                  <StaticImage
                    src=""
                    className="hero-img"
                    width={1096}
                    quality={100}
                    margin={0}
                    formats={["auto", "webp", "avif"]}
                    alt="parabelum hair care"
                  />
                </div>
              </div>

              {/* <div className="text-on-right">
                <div className="item1">
                  <h6>B.M. KESEM</h6>
                  <p id="designing">
                    Designing an ecomm store for an established sewing machine shop
                  </p>

                  <Link to="/ecommerce">
                    <button className="see-case-study">See case study</button>
                  </Link>
                </div>
              </div> */}
            </div>

            <div className="case-study-spacer"></div>

            <div className="workflow-section">
              <h3 id="workflow">WORKFLOW</h3>
              <div className="workflow-grid">
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">01</h5>
                  <h4>Design</h4>
                  <p>
                    Motion Design
                    <br />
                    Prototyping
                    <br />
                    Usability Testing
                    <br />
                    User Experience (UX)
                  </p>
                </div>
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">02</h5>
                  <h4>Develop</h4>
                  <p>
                    API + SDK
                    <br />
                    AWS Hosting
                    <br />
                    CMS Integration
                    <br />
                    Mobile Development
                    <br />
                    Web Development
                  </p>
                </div>
                <div className="workflow-grid-item">
                  <h5 className="workflow-numbers">03</h5>
                  <h4>Deliver</h4>
                  <p>
                    Analytics + Reporting
                    <br />
                    Product Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
}

export default work
