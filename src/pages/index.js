import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({ data: { products } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Blazek Family</h1>
    <p>Welcome to our garage sale site.</p>
    <p>
      <Link to="/site-progress/">Go to site progress page</Link> <br />
    </p>
    <ul>
      {products.nodes.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <img src={product.photo.url} />
        </li>
      ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query PostQuery {
    products: allGraphCmsProduct {
      nodes {
        id
        name
        price
        photo {
          url
        }
      }
    }
  }
`

export default IndexPage
