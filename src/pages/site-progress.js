import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SiteProgress = () => (
  <Layout>
    <SEO title="Site Progress" />
    <h1>Site Progress</h1>
    <p>Where Michael will give updates on how the site is coming along</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SiteProgress
