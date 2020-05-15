import React from 'react'
import { motion } from 'framer-motion'

/** @jsx jsx */
import { jsx, Styled, Container, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'
import { TextBlockContainer } from '../text-block-container'
import { FadeIn } from '../motion/fade-in'

export const BasicSection = ({ section, ...rest }) => {
  return (
    <Section sx={{ position: `relative` }} variant={section?.theme} {...rest}>
      <Container
        variant="container.large"
        sx={{
          px: 4,
          py: 5,
          margin: `0 auto`,
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
        <TextBlockContainer
          sx={{
            position: `relative`,
            zIndex: 1
          }}
        >
          {section?.heading?.text && (
            <FadeIn>
              <Text
                variant={`heading.${section?.heading?.size}`}
                sx={{
                  color: `inherit`,
                  m: 0,
                  mb: 4,
                  textAlign: section?.heading?.textAlignment
                }}
                as={section?.heading?.headingType || 'h2'}
              >
                {section?.heading?.text}
              </Text>
            </FadeIn>
          )}
          {section?.body && (
              <BasicSectionBody blocks={section?.body} />
          )}
        </TextBlockContainer>
        {section?.divider && (
          <div
            sx={{
              variant: `section.${section.theme}`,
              position: `absolute`,
              top: `0`,
              bottom: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              transform: `skewY(7deg)`,
              transformOrigin: `top right`
            }}
          />
        )}
      </Container>
    </Section>
  )
}
