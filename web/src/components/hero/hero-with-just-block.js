import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { heroSerializers } from '../serializers/hero-serializers'
import { Section } from '../sections/section'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { TextBlockContainer } from '../text-block-container'
import baseTheme, { constants } from '../../gatsby-plugin-theme-ui'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'

export const HeroWithJustBlock = ({ blocks, ...rest }) => {
  console.log('hello')
  return (
    <Section sx={{ minHeight: '100vh', display: `flex`, alignItems: `center`, position: `relative` }}>
      <Container
        variant='container.large'
        sx={{
          px: 4,
          margin: '0 auto',
          pb: 0,
          [mediaQueries.xl]: {
            px: 6,
            pb: 0
          },
          [mediaQueries.xxl]: {
            px: 7
          }
        }}
      >
        <TextBlockContainer
          sx={{
            maxWidth: breakpoints.md
          }}
        >
          <BaseBlockContent blocks={blocks} serializers={heroSerializers} {...rest} />
        </TextBlockContainer>
      </Container>
    </Section>
  )
}
