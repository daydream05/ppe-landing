import React from 'react'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      publishedAt
      pageSettings {
        hideHeader
        headerLinkColor
      }
      categories {
        _id
        title
      }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
      mainImage {
        asset {
          _id
          fluid(maxHeight: 1000, maxWidth: 2000) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 1000 })
      members {
        _key
        person {
          image {
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
            }
          }
          name
        }
        roles
      }
    }
  }
`

const ProjectTemplate = props => {
  const { data, errors } = props
  const project = data && data.project

  return (
    <Layout pageSettings={project?.pageSettings}>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <Project {...project} />}
    </Layout>
  )
}

export default ProjectTemplate
