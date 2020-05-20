import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import { api as sanityConfig } from '../../../../studio/sanity.json'

/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import { getHeroSerializers } from '../serializers/hero-serializers'
import { Section } from '../sections/section'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

import { TextBlockContainer } from '../text-block-container'
import baseTheme, { constants } from '../../gatsby-plugin-theme-ui'
import GatsbyImage from 'gatsby-image'

export const HeroBasic = ({ blocks, mainImage, settings, ...rest }) => {
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
            px: 0,
            py: 0,
            pt: `calc(${constants.headerHeight})`
          },
          [mediaQueries.xxl]: {
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
                flex: `75%`,
              },
              '> :nth-of-type(2)': {
                flex: `25%`
              }
            }
          }}
        >
          <TextBlockContainer
            sx={{
              py: 4,
              display: `flex`,
              alignItems: `center`,
              [mediaQueries.lg]: {
                px: `calc(${baseTheme.space[5]}px + ${baseTheme.space[6]}px)`,
              },
            }}
          >
            <BaseBlockContent blocks={blocks} serializers={getHeroSerializers({ enableAnimation: settings?.animate })} {...rest} />
          </TextBlockContainer>
          {fluidProps && <GatsbyImage fluid={fluidProps} alt={mainImage?.alt} />}
        </div>
      </Container>
    </Section>
  )
}
