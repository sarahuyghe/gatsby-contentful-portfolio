import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: titel, order: ASC }) {
        edges {
          node {
            titel
            id
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <Head title="Projects" />
      <section className="intro">
        <h4>console.log("hello")</h4>
        <h1>
          I'm Sara, a junior <strong>Front End Developer</strong>
        </h1>
        <h2>Here are some projects that I worked on</h2>
      </section>
      <section>
        {data.allContentfulProject.edges.map(edge => {
          return (
            <div key={edge.node.id}>
              <Link to={`/projects/${edge.node.titel}`}>
                <h4>{edge.node.titel}</h4>
              </Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default IndexPage
