import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Products from "../components/products"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Blazek Family</h1>
    <p>Welcome to our garage sale site.</p>
    <p>
      <Link to="/site-progress/">Go to site progress page</Link> <br />
    </p>
    <Products />
  </Layout>
)

export default IndexPage
