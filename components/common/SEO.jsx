import Head from 'next/head'

const SEO = ({ description, title, url, imageUrl }) => {
    const baseUrl = 'https://www.aupi.com.br/'

    return (
        <Head>
            <title>{`${title} | Aupi Tools`}</title>
            <meta name='title' content={title} />
            <meta name='description' content={description} />

            <meta property='og:type' content='website' />
            <meta property='og:title' content={title} />
            <meta property='og:url' content={`${baseUrl}${url}`} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content='Aupi Tools' />
            <meta property='og:image' content={imageUrl ? `${baseUrl}/previews${imageUrl}` : `${baseUrl}/logos/stratools-stacked.png`} />

            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:url' content={`${baseUrl}${url}`} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={imageUrl ? `${baseUrl}/previews${imageUrl}` : `${baseUrl}/logos/stratools-stacked.png`} />
        </Head>
    )
}

export default SEO
