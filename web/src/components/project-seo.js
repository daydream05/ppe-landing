import React from 'react'
import PropTypes from 'prop-types'
import { GatsbySeo, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'
import { graphql, useStaticQuery } from 'gatsby'

export const ProjectSEO = ({ metaTitle, metaDescription, path, imageUrl, imageAlt }) => {
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

  const projectUrl = `${site.url}${path}`

  const openGraph = {
    url: projectUrl,
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: imageUrl,
        alt: imageAlt,
        width: 1200,
        height: 630
      }
    ]
  }

  const breadCrumbElements = [
    {
      position: 1,
      name: site?.title,
      item: site?.url
    },
    {
      position: 2,
      name: `projects`,
      item: `${site?.url}/projects/`
    },
    {
      position: 3,
      name: metaTitle,
      item: projectUrl
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

ProjectSEO.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
