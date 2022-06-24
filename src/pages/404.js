import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <p id="nope">404: Not Found</p>
      <p>That doesn't exist!</p>
      <p>Unforch.</p>
    </div>
  </Layout>
)

export default NotFoundPage
