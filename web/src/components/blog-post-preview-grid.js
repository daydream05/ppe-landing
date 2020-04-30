import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

/** @jsx jsx */
import { jsx, css, Container, Styled, Text } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { Section } from './sections/section'
import GatsbyImage from 'gatsby-image'

export const BlogPostPreviewGrid = ({ posts }) => {
  console.log(posts)
  const latestPosts = posts?.slice(0, 4)
  const morePosts = posts?.slice(4, posts.length)
  console.log(latestPosts)

  return (
    <Section>
      <Container
        variant="container.large"
        sx={{
          px: 4,
          py: 5,
          pt: 0,
          margin: '0 auto',
          [mediaQueries.xl]: {
            px: 6,
            py: 6
          },
          [mediaQueries.xxl]: {
            px: 7,
            py: 6
          }
        }}
      >
        <div
          sx={{
            mb: 5
          }}
        >
          <div
            sx={{
              borderBottom: `1px solid`,
              borderColor: `grey`,
              py: 3,
              mb: 4
            }}
          >
            <h2 sx={{ m: 0, variant: 'text.heading.small' }}>Latest blog posts</h2>
          </div>
          <ul
            sx={{
              listStyle: `none`,
              margin: 0,
              padding: 0,
              display: 'grid',
              gridGap: 5,
              [mediaQueries.xl]: {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridColumnGap: 5,
                gridRowGap: 4
              }
            }}
          >
            {latestPosts &&
              latestPosts.map((post, id) => {
                if (id === 0) {
                  return (
                    <li
                      key={id}
                      sx={{
                        [mediaQueries.xl]: {
                          gridRow: `1 / span 3`
                        }
                      }}
                    >
                      <Link
                        sx={{
                          display: `block`,
                          mb: 3
                        }}
                        to={post.path}
                      >
                        {post.mainImage?.asset?.fluid && (
                          <GatsbyImage
                            fluid={post.mainImage?.asset?.fluid}
                            alt={post.mainImage?.alt}
                          />
                        )}
                      </Link>
                      <Text as="span" sx={{ fontSize: 2, color: 'text' }}>
                        {post.publishedAt}
                      </Text>
                      <Link
                        to={post.path}
                        sx={{
                          textDecoration: `none`,
                          ':hover': {
                            '> *': {
                              color: 'primary'
                            }
                          }
                        }}
                      >
                        <Styled.h3
                          sx={{ mt: 2, mb: 2, fontWeight: `bold`, fontSize: [4, 4, 4, 4, 5] }}
                        >
                          {post.title}
                        </Styled.h3>
                      </Link>
                      <Styled.p sx={{ mt: 0 }}>{post.excerpt}</Styled.p>
                    </li>
                  )
                } else {
                  return (
                    <li
                      key={id}
                      sx={{
                        [mediaQueries.xl]: {
                          gridColumn: `2 / auto`
                        }
                      }}
                    >
                      <div
                        sx={{
                          display: `flex`,
                          flexDirection: `column`,
                          [mediaQueries.xl]: {
                            flexDirection: `row`
                          }
                        }}
                      >
                        <div
                          sx={{
                            [mediaQueries.xl]: {
                              flex: 2,
                              mr: 3
                            }
                          }}
                        >
                          <Link to={post.path} sx={{ textDecoration: `none`, color: `initial` }}>
                            {post.mainImage && (
                              <GatsbyImage
                                fluid={post.mainImage?.asset?.fluid}
                                alt={post.mainImage?.alt}
                              />
                            )}
                          </Link>
                        </div>
                        <div
                          sx={{
                            [mediaQueries.xl]: {
                              flex: `3`
                            }
                          }}
                        >
                          <Text as="span" sx={{ fontSize: 2, color: 'text' }}>
                            {post.publishedAt}
                          </Text>
                          <Link
                            to={post.path}
                            sx={{
                              textDecoration: `none`,
                              ':hover': {
                                '> *': {
                                  color: 'primary'
                                }
                              }
                            }}
                          >
                            <Styled.h3
                              sx={{ mt: 2, mb: 2, fontWeight: `bold`, fontSize: [4, 4, 4, 4, 4] }}
                            >
                              {post.title}
                            </Styled.h3>
                          </Link>
                          <Styled.p sx={{ mt: 0, fontSize: [2, 2, 2, 2, 2, 2] }}>
                            {post.excerpt}
                          </Styled.p>
                          <Link
                            to={post.path}
                            sx={{
                              mt: 0,
                              fontSize: [2, 2, 2, 2, 2, 2],
                              color: 'secondary',
                              textDecoration: `none`
                            }}
                          >
                            Read more »
                          </Link>
                        </div>
                      </div>
                    </li>
                  )
                }
              })}
          </ul>
        </div>
        <div>
          <div
            sx={{
              borderBottom: `1px solid`,
              borderColor: `grey`,
              py: 3,
              mb: 4
            }}
          >
            <h2 sx={{ m: 0, variant: 'text.heading.small' }}>More blog posts</h2>
          </div>
          <div
            sx={{
              [mediaQueries.lg]: {
                display: `grid`,
                gridTemplateColumns: `3fr 1fr`,
              }
            }}
          >
            <ul
              sx={{
                listStyle: `none`,
                padding: 0,
                margin: 0,
              }}
            >
              {morePosts?.length > 0 &&
                morePosts.map((post, id) => {
                  return (
                    <li key={id}>
                      <div
                        sx={{
                          display: `flex`,
                          flexDirection: `column`,
                          [mediaQueries.xl]: {
                            flexDirection: `row`
                          }
                        }}
                      >
                        <div
                          sx={{
                            [mediaQueries.xl]: {
                              flex: 2,
                              mr: 4
                            }
                          }}
                        >
                          <Link to={post.path} sx={{ textDecoration: `none`, color: `initial` }}>
                            {post.mainImage?.asset?.fluid && (
                              <GatsbyImage
                                fluid={post.mainImage?.asset?.fluid}
                                alt={post.mainImage?.alt}
                              />
                            )}
                          </Link>
                        </div>
                        <div
                          sx={{
                            [mediaQueries.xl]: {
                              flex: `3`
                            }
                          }}
                        >
                          <Text as="span" sx={{ fontSize: 2, color: 'text' }}>
                            {post.publishedAt}
                          </Text>
                          <Styled.h3
                            sx={{ mt: 2, mb: 2, fontWeight: `bold`, fontSize: [4, 4, 4, 4, 4] }}
                          >
                            {post.title}
                          </Styled.h3>
                          <Styled.p sx={{ mt: 0 }}>{post.excerpt}</Styled.p>
                          <Link to={post.path}>Read more</Link>
                        </div>
                      </div>
                    </li>
                  )
                })}
            </ul>
            <div />
          </div>
        </div>
      </Container>
    </Section>
  )
}
