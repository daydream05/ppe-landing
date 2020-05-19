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

export const HeroWithLargeTextAndImageStrip = ({ blocks, mainImage, settings, ...rest }) => {
  const imageAssetId = mainImage?.asset?._id

  const fluidProps =
    imageAssetId &&
    getFluidGatsbyImage(imageAssetId, { maxWidth: 2000, maxHeight: 750 }, sanityConfig)
  return (
    <Section
      sx={{
        position: `relative`
      }}
    >
      <Container
        variant="container.large"
        sx={{
          px: 0,
          py: 5,
          margin: '0 auto',
          pt: `calc(${baseTheme.space[5]}px + ${constants.headerHeight})`,
          [mediaQueries.lg]: {
            px: 0,
            pb: 0,
            pt: `calc(${baseTheme.space[6]}px + ${constants.headerHeight})`
          },
          [mediaQueries.xl]: {
            pt: `calc(${baseTheme.space[7]}px + ${constants.headerHeight})`
          }
        }}
      >
        <div
          sx={{
            display: `grid`,
            gridTemplateColumns: `2fr 3fr`,
            gridTemplateRows: `300px`,
            position: `relative`,
            [mediaQueries.lg]: {
              display: `grid`,
              gridTemplateColumns: `calc(${baseTheme.space[7]}px + ${baseTheme.space[6]}px) 1fr`
            },
            [mediaQueries.xxl]: {
              gridTemplateColumns: `2fr 3fr`
            }
          }}
        >
          <TextBlockContainer
            sx={{
              position: `absolute`,
              width: `100`,
              left: 4,
              right: 0,
              zIndex: 1,
              transform: `translateY(-${baseTheme.space[4]}px)`,
              h1: {
                fontSize: 7,
                fontWeight: `bold`,
                lineHeight: `1`,
                maxWidth: `75%`
              },
              [mediaQueries.lg]: {
                position: `absolute`,
                width: `100`,
                left: 0,
                right: 0,
                zIndex: 1,
                transform: `translateY(-${baseTheme.space[6]}px)`,
                h1: {
                  fontSize: 128,
                  fontWeight: `bold`,
                  lineHeight: `1`,
                  maxWidth: 600
                }
              }
            }}
          >
            <BaseBlockContent
              blocks={blocks}
              serializers={getHeroSerializers({ enableAnimation: settings?.animate })}
              {...rest}
            />
          </TextBlockContainer>
          {fluidProps && (
            <GatsbyImage
              fluid={fluidProps}
              alt={mainImage?.alt}
              sx={{
                gridColumnStart: 2,
                [mediaQueries.lg]: {
                  gridColumnStart: 2
                },
                '::after': {
                  content: `""`,
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  width: `100%`,
                  height: `100%`,
                  backgroundColor: mainImage?.asset?.metadata?.palette?.darkMuted?.background,
                  opacity: 0.2
                }
              }}
            />
          )}
        </div>
      </Container>
    </Section>
  )
}
