import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { heroSerializers } from '../serializers/hero-serializers'
import { Section } from '../sections/section'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { customSerializers } from '../serializers/custom-serializers'
import { TextBlockContainer } from '../text-block-container'
import baseTheme, { constants } from '../../gatsby-plugin-theme-ui'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'

export const HeroWithFullHeight = ({ blocks, ...rest }) => {

  return (
    <Section sx={{ height: '100vh', display: `flex`, alignItems: `center` }}>
      <Container
        variant='container.large'
        sx={{
          px: 4,
          margin: '0 auto',
          pt: `calc(${baseTheme.space[5]}px + ${constants.headerHeight})`,
          pb: 0,
          [mediaQueries.xl]: {
            px: 6,
            py: 6,
            pt: `calc(${baseTheme.space[5]}px + ${constants.headerHeight})`,
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
