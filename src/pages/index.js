import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { useIntl, Link } from "gatsby-plugin-intl"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
	const intl = useIntl()
	return (
		<Layout>
			<Seo title="Home" />
			<h1>{intl.formatMessage({ id: "hello" })}</h1>
			<h2>{intl.formatMessage({ id: "posts" })}</h2>
			<ul>
				{data.allContentfulPersonalSite.nodes.map(post => {
					return <li key={post.id}><Link to={`/${post.path}`}>{post.title}</Link></li>
				})}
			</ul>
		</Layout>
	)
}


export const query = graphql`
	query contentfulPersonalSite($language: String) {
		allContentfulPersonalSite(filter: { node_locale: { eq: $language } }) {
			nodes {
				id
				node_locale
				title
				path
			}
		}
	}
`



export default IndexPage