import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'

import BlockContent from './block-content'
import RoleList from './role-list'

import { constants } from '../gatsby-plugin-theme-ui'
import { TextBlockContainer } from './text-block-container'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { TableOfContents } from './table-of-contents'
import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props

  console.log(_rawBody)

  const headings = [`h2`, `h3`, `h4`]

  const tocBlocks =
    _rawBody.length > 0 &&
    _rawBody.filter(block => {
      return headings.includes(block.style)
    })

  return (
    <article>
      {mainImage && mainImage.asset?.fluid && (
        <div
          sx={{
            position: 'relative'
          }}
        >
          <Img
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt}
            sx={{
              width: '100%',
              height: '50vh',
              '::after': {
                content: `""`,
                position: `absolute`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                backgroundColor: mainImage?.asset?.metadata?.palette?.darkMuted?.background,
                opacity: 0.5
              }
            }}
          />
        </div>
      )}
      <Container>
        <div
          sx={{
            px: [3, 3, 3, 4, 0],
            py: [5, 5, 5, 5],
            [mediaQueries.lg]: {
              pb: 6,
              pt: 6
            }
          }}
        >
          <TextBlockContainer>
            <Styled.h1 sx={{ fontWeight: 'bold', textAlign: `center`, mt: 0 }}>{title}</Styled.h1>
            {tocBlocks && (
              <div
                sx={{
                  [mediaQueries.lg]: {
                    py: 4,
                  }
                }}
              >
                <TableOfContents blocks={tocBlocks} />
              </div>
            )}
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </TextBlockContainer>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
