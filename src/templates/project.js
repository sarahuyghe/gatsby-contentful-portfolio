import React from "react"
import { graphql } from "gatsby"

import projectStyles from "./project.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

// import projectImageBXL from "./bxl.jpg"
// import projectImageCubo from "./cubo.jpg"
// import projectImageGreenGames from "./greengames.jpg"
// import projectImageWatchlist from "./watchlist.jpg"

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
        <picture>
          <source srcset={"https:" + data.project.image.file.url + ""}/>
          <source />
          <img
            src={"https:" + data.project.image.file.url}
            alt={"picture of my project: " + data.project.titel}
          />
        </picture>
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
            <a href={data.project.site}>Visit the project</a>
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
      site
      image {
        file {
          url
        }
      }
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
