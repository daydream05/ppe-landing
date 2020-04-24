import React from 'react'
import { Section } from './section'
/** @jsx jsx */
import { Container, jsx, Styled, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import GatsbyImage from 'gatsby-image'
import { MediaSelector } from '../media/media-selector'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'

export const SectionContentHalfWithMedia = ({ section, reverseDirection, ...rest }) => {
  const { theme, heading, body, media } = section

  if (!section) {
    return 'No section provided!'
  }

  return (
    <Section variant={theme} {...rest}>
      <Container
        variant="container.large"
        sx={{
          [mediaQueries.lg]: {
            display: 'flex',
            flexDirection: reverseDirection ? 'row-reverse' : 'row'
          }
        }}
      >
        <div
          sx={{
            [mediaQueries.lg]: {
              width: '55%',
              display: `flex`,
              alignItems: `center`,
              py: 5
            }
          }}
        >
          <Container
            sx={{
              px: 4,
              py: 5,
              [mediaQueries.lg]: {
                maxWidth: breakpoints.sm,
                py: 6
              }
            }}
          >
            {heading && (
              <Text
                variant={`heading.${heading?.size}`}
                sx={{
                  color: `inherit`,
                  lineHeight: 1,
                  m: 0,
                  mb: 4,
                  textAlign: heading?.textAlignment
                }}
                as={heading?.headingType || 'h2'}
              >
                {heading?.text}
              </Text>
            )}
            {body && <BasicSectionBody blocks={body} />}
          </Container>
        </div>
        <div
          sx={{
            [mediaQueries.lg]: {
              flex: 1
            }
          }}
        >
          {media && <MediaSelector media={media} />}
        </div>
      </Container>
    </Section>
  )
}
