import React from 'react'
import { graphql } from 'gatsby'
import { GatsbySeo, BlogPostJsonLd, BreadcrumbJsonLd } from 'gatsby-plugin-next-seo'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      url
      description
      keywords
      author
    }
    post: sanityPost(id: { eq: $id }) {
      id
      datePublished: publishedAt(formatString: "YYYY-MM-DD")
      dateModified: _updatedAt(formatString: "YYYY-MM-DD")
      categories {
        _id
        title
      }
      seo {
        metaTitle
        metaDescription
      }
      path
      mainImage {
        asset {
          ogimage: fixed(width: 1200, height: 630) {
            src
          }
          fluid(maxHeight: 600, maxWidth: 1200) {
            ...GatsbySanityImageFluid_noBase64
          }
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      authors {
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

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  const site = data && data.site

  const seo = post && post.seo

  const title = seo ? seo.metaTitle : post.title
  const imageUrl = post?.mainImage?.asset?.ogimage?.src
  const postUrl = `${site.url}${post.path}`

  const openGraph = {
    url: postUrl,
    title: title,
    description: seo?.metaDescription,
    images: [
      {
        url: imageUrl,
        alt: post.mainImage?.alt,
        width: 1200,
        height: 630
      }
    ]
  }

  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <GatsbySeo
          title={title}
          titleTemplate={`%s | ${site.title}`}
          description={seo ? seo.metaDescription : ''}
          openGraph={openGraph}
        />
      )}
      {post && (
        <BlogPostJsonLd
          url={postUrl}
          description={seo?.metaDescription}
          title={title}
          images={[imageUrl]}
          datePublished={post?.datePublished}
          dateModified={post?.dateModified}
          authorName={post?.authors[0]?.person?.name}
        />
      )}
      {post && (
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: site?.title,
              item: site?.url
            },
            {
              position: 2,
              name: 'Blog',
              item: `${site?.url}/blog/`
            },
            {
              position: 3,
              name: title,
              item: `${site.url}/blog${post?.path}`
            }
          ]}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
