import React from 'react'
import Header from './header'
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query siteQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
  	`)

	const { title } = data.site.siteMetadata

	return (
		<div className='site-wrapper'>
			<Header siteTitle={title} />
			{children}
		</div>
	)

}

export default Layout