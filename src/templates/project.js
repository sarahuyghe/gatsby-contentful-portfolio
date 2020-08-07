import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const Project = ({ data }) => {
  console.log(data.project.titel)
  return (
    <Layout>
      <Head title={data.project.titel} />
      <div>
        <h1>{data.project.titel}</h1>
        <p>{data.project.introduction.introduction}</p>
      </div>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      slug
      titel
      client
      introduction {
        introduction
      }
      concept {
        concept
      }
      role {
        role
      }
      tech {
        tech
      }
      challenge {
        challenge
      }
    }
  }
`
