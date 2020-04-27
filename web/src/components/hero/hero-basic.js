import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import { api as sanityConfig } from '../../../../studio/sanity.json'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { heroSerializers } from '../serializers/hero-serializers'
import { Section } from '../sections/section'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

import { TextBlockContainer } from '../text-block-container'
import baseTheme, { constants } from '../../gatsby-plugin-theme-ui'
import GatsbyImage from 'gatsby-image'

export const HeroBasic = ({ blocks, mainImage, ...rest }) => {
  const imageAssetId = mainImage?.asset?._id
  const fluidProps = imageAssetId && getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  return (
    <Section
      sx={{
        position: `relative`
      }}
    >
      <Container
        variant="container.large"
        sx={{
          px: 4,
          py: 5,
          margin: '0 auto',
          pt: `calc(${baseTheme.space[5]}px + ${constants.headerHeight})`,
          [mediaQueries.xl]: {
            px: 6,
            py: 6,
            pt: `calc(${baseTheme.space[6]}px + ${constants.headerHeight})`
          },
          [mediaQueries.xxl]: {
            px: 7
          }
        }}
      >
        <div
          sx={{
            display: `flex`,
            flexDirection: `column-reverse`,
            [mediaQueries.lg]: {
              flexDirection: `row`,
              '> :first-of-type': {
                flex: `50%`,
                mr: 5
              },
              '> :nth-of-type(2)': {
                flex: `50%`
              }
            }
          }}
        >
          <TextBlockContainer>
            <BaseBlockContent blocks={blocks} serializers={heroSerializers} {...rest} />
          </TextBlockContainer>
          {fluidProps && <GatsbyImage fluid={fluidProps} alt={mainImage?.alt} />}
        </div>
      </Container>
    </Section>
  )
}
