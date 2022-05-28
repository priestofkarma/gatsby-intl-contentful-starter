import React from "react"
import { Link } from "gatsby"
import LanguageSwitcher from "./languageSwitcher"

const Header = ({ siteTitle }) => {
	return (
		<header
			style={{
				background: `rebeccapurple`,
				marginBottom: `1.45rem`,
			}}>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `1.45rem 1.0875rem`,
					display: `flex`,
					alignItems: `center`,
					justifyContent: `space-between`
				}}>
				<h1 style={{ margin: 0 }}>
					<Link to="/" style={{ color: `white`, textDecoration: `none`, }}>
						{siteTitle}
					</Link>
				</h1>
				<LanguageSwitcher />
			</div>
		</header>
	)
}

export default Header