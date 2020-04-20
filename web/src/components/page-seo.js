import React from 'react'
import PropTypes from 'prop-types'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'
import { graphql, useStaticQuery } from 'gatsby'

const PageSEO = ({ metaTitle, metaDescription, path }) => {
  const siteQuery = graphql`
    query {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        url
        description
        keywords
        author
        socialShareImage {
          asset {
            ogimage: fixed(width: 1200, height: 630) {
              src
            }
          }
          alt
        }
      }
    }
  `

  const data = useStaticQuery(siteQuery)
  const { site } = data
  const image = site?.socialShareImage

  const images = image
    ? [
        {
          url: image?.asset?.ogimage?.src,
          alt: image?.alt,
          width: 1200,
          height: 630
        }
      ]
    : []

  const isHomePage = path === `/`

  const pageUrl = isHomePage ? `${site.url}` : `${site.url}${path}`

  const openGraph = {
    url: pageUrl,
    title: metaTitle,
    description: metaDescription,
    images: images
  }

  const breadCrumbElements = isHomePage
    ? [
        {
          position: 1,
          name: site?.title,
          item: site?.url
        }
      ]
    : [
        {
          position: 1,
          name: site?.title,
          item: site?.url
        },
        {
          position: 2,
          name: metaTitle,
          item: pageUrl
        }
      ]

  return (
    <>
      <GatsbySeo
        title={metaTitle}
        titleTemplate={`%s | ${site.title}`}
        description={metaDescription}
        openGraph={openGraph}
      />
      <BreadcrumbJsonLd itemListElements={breadCrumbElements} />
    </>
  )
}

PageSEO.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default PageSEO
