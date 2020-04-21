import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'
import PageSEO from '../components/page-seo'
import DefaultHero from '../components/hero/default-hero'

export const query = graphql`
  query ProjectsPageQuery {
    page: sanityPage(slug: { current: { eq: "projects" } }) {
      title
      path
      seo {
        metaTitle
        metaDescription
      }
      _rawBody
      _rawHero
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
      {page?._rawHero && <DefaultHero hero={page._rawHero} />}
      <Container>
        {projectNodes && projectNodes.length > 0 && <ProjectPreviewGrid nodes={projectNodes} />}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
