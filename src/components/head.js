import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {data.site.siteMetadata.title} | {title}
      </title>
      <html lang="en" />
    </Helmet>
  )
}

export default Head
