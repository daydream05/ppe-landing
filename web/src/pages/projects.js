import React from 'react'
import { graphql } from 'gatsby'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import PageSEO from '../components/page-seo'
import DefaultHero from '../components/hero/default-hero'
import { SectionSelector } from '../components/sections/section-selector'

export const query = graphql`
  query ProjectsPageQuery {
    page: sanityPage(slug: { current: { eq: "projects" } }) {
      title
      path
      _rawSections(resolveReferences: { maxDepth: 1000 })
      seo {
        metaTitle
        metaDescription
      }
      _rawBody
    }
    projects: allSanityProject(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
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
  }
`

const ProjectsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)

  const page = data.page
  const seo = page && page.seo
  const title = seo ? seo.metaTitle : page?.title
  return (
    <Layout>
      {page && <PageSEO metaTitle={title} title={seo?.metaDescription} path={page?.path} />}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
      <Container>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
