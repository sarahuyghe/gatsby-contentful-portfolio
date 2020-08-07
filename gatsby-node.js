const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        console.log("Error with contentful data", result.errors)
      }
      const projectTemplate = path.resolve("./src/templates/project.js")

      result.data.allContentfulProject.edges.forEach(project => {
        createPage({
          path: `/projects/${project.node.slug}/`,
          component: slash(projectTemplate),
          context: {
            slug: project.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("error with contentful data", error))
}
