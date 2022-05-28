import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => (
	<Layout>
		<h1>{data.contentfulPersonalSite.title}</h1>
		<div dangerouslySetInnerHTML={{ __html: data.contentfulPersonalSite.content.childMarkdownRemark.html }} />
	</Layout>
)

export const query = graphql`
	query BlogPostQuery($slug: String, $language: String) {
		contentfulPersonalSite(path: { eq: $slug }, node_locale: { eq: $language }) {
			path
			node_locale
			title
			content {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`

export default BlogPost