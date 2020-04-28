import React from 'react'
import { graphql, Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { SectionSelector } from '../components/sections/section-selector'
import PageSEO from '../components/page-seo'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    page: sanityPage(id: { eq: $id }) {
      title
      path
      seo {
        metaTitle
        metaDescription
      }
      _rawSections(resolveReferences: { maxDepth: 1000 })
      settings {
        hideHeader
        headerLinkColor
      }
    }
  }
`

const PageTemplate = props => {
  const { data, errors } = props
  const { page } = data

  const { seo } = page

  const title = seo ? seo.metaTitle : page.title

  return (
    <Layout pageSettings={page?.settings}>
      {errors && <SEO title="GraphQL Error" />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {page && <PageSEO metaTitle={title} metaDescription={seo?.metaDescription} path={page?.path} />}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
    </Layout>
  )
}

export default PageTemplate
