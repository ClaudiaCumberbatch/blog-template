interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://sichengblog.netlify.app/', // Write here your website url
	author: 'Sicheng Zhou', // Site author
	title: "Sicheng's Blog", // Site title.
	description: "Sicheng's blog. Live and learn.", // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
