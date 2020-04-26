import React from 'react'

/** @jsx jsx */
import { jsx, Styled, Container, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'
import { TextBlockContainer } from '../text-block-container'

export const BasicSection = ({ section, ...rest }) => {
  return (
    <Section variant={section?.theme} {...rest}>
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
        <TextBlockContainer>
          {section?.heading?.text && (
            <Styled.h2
              sx={{
                color: `inherit`,
                m: 0,
                mb: 4,
              }}
            >
              <Text
                variant={`heading.${section?.heading?.size}`}
                sx={{
                  color: `inherit`,
                  m: 0,
                  textAlign: section?.heading?.textAlignment
                }}
              >
                {section?.heading?.text}
              </Text>
            </Styled.h2>
          )}
          {section?.body && <BasicSectionBody blocks={section?.body} />}
        </TextBlockContainer>
      </Container>
    </Section>
  )
}
