import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import "../components/main.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
