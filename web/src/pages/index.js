import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Layout from '../containers/layout'
import DefaultHero from '../components/hero/default-hero'
import PageSEO from '../components/page-seo'
import { SectionSelector } from '../components/sections/section-selector'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    page: sanityPage(slug: { current: { eq: "home" } }) {
      _rawHero(resolveReferences: { maxDepth: 3 })
      _rawSections(resolveReferences: { maxDepth: 1000 })
      title
      path
      seo {
        metaTitle
        metaDescription
      }
    }

    projects: allSanityProject(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          path
          mainImage {
            asset {
              _id
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbySanityImageFluid_noBase64
              }
              metadata {
                palette {
                  darkMuted {
                    background
                    foreground
                    population
                    title
                  }
                }
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          path
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []

  const page = (data || {}).page
  const seo = page && page.seo

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const title = seo ? seo.metaTitle : page.title

  return (
    <Layout>
      {page && <PageSEO metaTitle={title} title={seo?.metaDescription} path={page?.path} />}
      {page && page._rawHero && <DefaultHero hero={page._rawHero} />}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
    </Layout>
  )
}

export default IndexPage
