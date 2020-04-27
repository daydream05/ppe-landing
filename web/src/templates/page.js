import React from 'react'
import { graphql, Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { SectionSelector } from '../components/sections/section-selector'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      title
      path
      seo {
        metaTitle
        metaDescription
      }
      _rawSections(resolveReferences: { maxDepth: 1000 })
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const project = data && data.project
  const { page } = data

  console.log(page?._rawSections)

  return (
    <Layout pageSettings={project?.pageSettings}>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
    </Layout>
  )
}

export default PageTemplate
