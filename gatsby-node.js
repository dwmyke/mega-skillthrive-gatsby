// exports.createPages = async function({ graphql, actions }) {

//     const {data} = await graphql(`
//       query {
//         allMdx(sort: {fields: frontmatter___slug, order: ASC}) {
//             edges {
//               node {
//                 frontmatter {
//                   slug
//                 }
//                 id
//               }
//             }
//           }
//       }
//     `

// // Create paginated pages for projects 

//       const projectsPerPage = 4

//       const numPages = Math.ceil(data.allMdx.edges.length / projectsPerPage)

//         Array.from({ length: numPages }).forEach((_, i) => {
//             actions.createPages({
//                 path: i === 0 ? `/` : `/${i +1}`,
//                 component: require.resolve("./src/templates/allProjects.js"),
//                 contect: {
//                     limit: projectsPerPage,
//                     skip: i * projectsPerPage,
//                     numPages,
//                     currentPage: i +1,
//                 }
//             })
//         })

//         // Create single project post

//         data.allMdx.edges.forEach(edge => {
//             const slug = edge.node.frontmatter.slug
//             const id = edge.node.id
//             actions.createPages({
//                 path: slug,
//                 component: require.resolve(`./src/templates/singProject.js`),
//                 context: {id},
//             })
//         })
//   }