import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'

import PageSEO from '../components/page-seo'
import DefaultHero from '../components/hero/default-hero'
import { SectionSelector } from '../components/sections/section-selector'
import { SectionContact } from '../components/sections/section-contact'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
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

const ContactPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page
  const seo = page && page.seo

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  const title = seo ? seo.metaTitle : page?.title

  return (
    <Layout>
      {page && <PageSEO metaTitle={title} title={seo?.metaDescription} path={page?.path} />}
      {page?._rawHero && <DefaultHero hero={page._rawHero} />}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
      <SectionContact />
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage
