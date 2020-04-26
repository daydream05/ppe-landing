import React from 'react'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import BlockContent from '../components/block-content'
import GraphQLErrorList from '../components/graphql-error-list'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import PageSEO from '../components/page-seo'
import DefaultHero from '../components/hero/default-hero'
import { SectionSelector } from '../components/sections/section-selector'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawSections(resolveReferences: { maxDepth: 1000 })
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
  }
`

const AboutPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  const seo = page?.seo
  const title = seo ? seo.metaTitle : page?.title

  return (
    <Layout>
      {page && <PageSEO metaTitle={title} title={seo?.metaDescription} path={page?.path} />}
      {page?._rawSections?.map(section => {
        return <SectionSelector key={section._key} section={section} />
      })}
    </Layout>
  )
}

export default AboutPage
