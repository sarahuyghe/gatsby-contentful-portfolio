const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProject {
        edges {
          node {
            titel
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
          path: `/projects/${project.node.titel}/`,
          component: slash(projectTemplate),
          context: {
            titel: project.node.titel,
          },
        })
      })
    })
    .catch(error => console.log("error with contentful data", error))
}
