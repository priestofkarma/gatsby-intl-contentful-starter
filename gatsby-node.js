const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

	return graphql(`
		query blogPostsQuery {
			allContentfulPersonalSite {
				edges {
					node {
						path
					}
				}
			}
        }
  `).then(result => {
		if (result.errors) {
			throw result.errors
		}

		result.data.allContentfulPersonalSite.edges.forEach(edge => {
			const pagePath = edge.node.path
			createPage({
				path: pagePath,
				component: blogPostTemplate,
				context: {
					slug: pagePath,
				},
			})
		})
	})
}