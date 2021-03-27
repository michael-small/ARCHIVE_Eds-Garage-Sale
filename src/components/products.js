import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Products = () => {
  const data = useStaticQuery(graphql`
    query productsQuery {
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
  `)

  return (
    <ul>
      {data.products.nodes.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <img src={product.photo.url} />
        </li>
      ))}
    </ul>
  )
}

export default Products
