import React from 'react'
import { Section } from './Section'
/** @jsx jsx */
import { Container, jsx, Styled, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import GatsbyImage from 'gatsby-image'
import { MediaSelector } from '../media/media-selector'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'

export const SectionMediaFullScreen = ({ section }) => {
  const { theme, heading, body, media } = section

  if (!section) {
    return 'No section provided!'
  }

  let color

  if (theme === `dark`) {
    color = `black`
  } else if (theme === `light`) {
    color = `white`
  } else {
    color = `white`
  }

  return (
    <Section>
      <Container
        variant="container.large"
        sx={{
          position: `relative`,
          minHeight: `100vh`,
          [mediaQueries.xxxl]: {
            height: `auto`
          }
        }}
      >
        <div
          sx={{
            position: `relative`,
            zIndex: 1,
            minHeight: `100vh`,
            display: `flex`,
            alignItems: `center`
          }}
        >
          <Container
            sx={{
              px: 4,
              py: 5,
              color: `${color} !important`,
              [mediaQueries.lg]: {
                maxWidth: breakpoints.lg,
                py: 6
              },
            }}
          >
            {heading && (
              <Text
                variant={`heading.${heading?.size}`}
                sx={{
                  color: color,
                  m: 0,
                  mb: 4,
                  textAlign: heading?.textAlignment,
                  lineHeight: 1,
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
            position: `absolute`,
            top: 0,
            left: 0,
            height: `100%`,
            width: `100%`
          }}
        >
          {media && <MediaSelector media={media} isFullScreen={true} />}
        </div>
      </Container>
    </Section>
  )
}
