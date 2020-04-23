import React from 'react'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { BlogJsonLd } from 'gatsby-plugin-next-seo'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'

import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'

import PageSEO from '../components/page-seo'
import DefaultHero from '../components/hero/default-hero'

export const query = graphql`
  query BlogPageQuery {
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
    page: sanityPage(slug: { current: { eq: "blog" } }) {
      title
      path
      _rawHero
      seo {
        metaTitle
        metaDescription
      }
    }
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          path
          publishedAt
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

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  const { site, page } = data
  const seo = page && page.seo
  const title = seo ? seo.metaTitle : page.title
  const pageUrl = `${site.url}${page?.path}`

  const posts = data?.posts?.edges?.map(({ node }) => {
    return {
      headline: node.title,
      image: node?.mainImage?.asset?.fluid?.src
    }
  })

  return (
    <Layout>
      {page && <PageSEO metaTitle={title} title={seo?.metaDescription} path={page?.path} />}
      {page && (
        <BlogJsonLd
          url={pageUrl}
          headline="Blog headline"
          images={site?.socialShareImage?.asset?.ogimage?.src}
          posts={posts}
          datePublished="2015-02-05T08:00:00+08:00"
          dateModified="2015-02-05T09:00:00+08:00"
          authorName={site?.author}
          description={seo?.metaDescription}
        />
      )}
      {page?._rawHero && <DefaultHero hero={page._rawHero} />}
      <Container>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default BlogPage
