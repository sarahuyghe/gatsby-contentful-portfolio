import React from "react"
import { graphql } from "gatsby"

import projectStyles from "./project.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

import projectImage from "./firstTEst.png"

const Project = ({ data }) => {
  console.log(data.project.titel)
  return (
    <Layout>
      <Head title={data.project.titel} />
      <div className={projectStyles.intro}>
        <h1>{data.project.titel}</h1>
        <h4>{data.project.introduction.introduction}</h4>
      </div>
      <div className={projectStyles.imageContainer}>
        <img src={projectImage} alt="t" />
      </div>
      <div className={projectStyles.about}>
        <div className={projectStyles.briefing}>
          <div>
            <h3>Challenge</h3>
            <p>{data.project.challenge.challenge}</p>
          </div>
          <div>
            <h3>Concept</h3>
            <p>{data.project.concept.concept}</p>
          </div>
          <div className={projectStyles.linkToProject}>
            <a href="https://www.sarahuyghe.be">Visit the project</a>
          </div>
        </div>
        <div className={projectStyles.credits}>
          <div>
            <h3>Team</h3>
            <p className={projectStyles.listing}>{data.project.team.team}</p>
          </div>
          <div>
            <h3>Role</h3>
            <p className={projectStyles.listing}>{data.project.role.role}</p>
          </div>
          <div>
            <h3>Client</h3>
            <p className={projectStyles.listing}>{data.project.client}</p>
          </div>
          <div>
            <h3>Used tech</h3>
            <p className={projectStyles.listing}>{data.project.tech.tech}</p>
          </div>
        </div>
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
      team {
        team
      }
    }
  }
`
