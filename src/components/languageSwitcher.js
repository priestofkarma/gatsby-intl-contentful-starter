import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
	en: "Eng",
	uk: "Укр",
}

const Language = () => {
	return (
		<div>
			<IntlContextConsumer>
				{({ languages, language: currentLocale }) =>
					languages.map(language => (
						<button
							key={language}
							onClick={() => changeLocale(language)}
							style={{
								color: currentLocale === language ? `orange` : `white`,
								margin: 10,
								textDecoration: `underline`,
								cursor: `pointer`,
							}}
						>
							{languageName[language]}
						</button>
					))
				}
			</IntlContextConsumer>
		</div>
	)
}

export default Language