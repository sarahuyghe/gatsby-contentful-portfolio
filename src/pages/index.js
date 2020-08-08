import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import projectImage from "./firstTEst.png"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            titel
            id
            slug
            introduction {
              introduction
            }
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
          I'm Sara, a <strong>Front End Developer</strong>
        </h1>
        <h2>Here are some projects that I worked on</h2>
      </section>
      <section>
        {data.allContentfulProject.edges.map((edge, index) => {
          if (index % 2) {
            return (
              <div key={edge.node.id} className="project-odd">
                <div className="about_project">
                  <h2>{edge.node.titel}</h2>
                  <p>{edge.node.introduction.introduction}</p>
                  <p className="link">
                    <Link to={`/projects/${edge.node.slug}`}>
                      More about this project
                    </Link>
                  </p>
                </div>
                <div className="image-container">
                  <div>
                    <Link to={`/projects/${edge.node.slug}`}>
                      <img src={projectImage} alt="t" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div key={edge.node.id} className="project-even">
                <div className="image-container">
                  <Link to={`/projects/${edge.node.slug}`}>
                    <img src={projectImage} alt="t" />
                  </Link>
                </div>
                <div className="about_project">
                  <h2>{edge.node.titel}</h2>
                  <p>{edge.node.introduction.introduction}</p>
                  <p className="link">
                    <Link to={`/projects/${edge.node.slug}`}>
                      More about this project
                    </Link>
                  </p>
                </div>
              </div>
            )
          }
        })}
      </section>
    </Layout>
  )
}

export default IndexPage
