import React from "react"
import { graphql } from "gatsby"

const Project = ({ data }) => {
  console.log(data.project.titel)
  return (
    <div>
      <h1>{data.project.titel}</h1>
      <p>{data.project.introduction.introduction}</p>
    </div>
  )
}

export default Project

export const pageQuery = graphql`
  query($titel: String!) {
    project: contentfulProject(titel: { eq: $titel }) {
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
