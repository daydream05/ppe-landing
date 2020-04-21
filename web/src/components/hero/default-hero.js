import React from 'react'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import BaseBlockContent from '@sanity/block-content-to-react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { api as sanityConfig } from '../../../../studio/sanity.json'
import GatsbyImage from 'gatsby-image'
import ButtonLink from '../button-link'
import { getPagePath } from '../../lib/helpers'

import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { constants } from '../../gatsby-plugin-theme-ui'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <Styled.p sx={{ mt: 0, fontSize: [3, 3, 4] }}>{props.children}</Styled.p>
      }
    }
  }
}

const HeroSubTitle = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

const DefaultHero = ({ hero }) => {
  const imageAssetId = hero?.mainImage?.asset?._id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  return (
    <section
      sx={{
        display: [`flex`, null, null, null, `grid`],
        flexDirection: `column-reverse`,
        gridTemplateColumns: [null, null, null, `1fr 1fr`],
        [mediaQueries.xl]: {
          maxWidth: breakpoints.xxxl,
          margin: `0 auto`,
          pt: constants.headerHeight
        }
      }}
    >
      <div
        sx={{
          display: [null, null, null, `flex`],
          flexDirection: `column`,
          pt: [5, 5, 5, 6],
          pb: [5, 5, 5, 5, 5, 0],
          px: [4],
          [mediaQueries.xl]: {
            pl: 6,
          },
          [mediaQueries.xxl]: {
            pl: 7
          }
        }}
      >
        <div
          sx={{
            display: `flex`,
            flexDirection: `column`,
            maxWidth: breakpoints.md
          }}
        >
          <h1
            sx={{
              fontSize: [5, 5, 5, 6],
              mt: 0,
              mb: 2,
              lineHeight: 1
            }}
          >
            {hero.title}
          </h1>
          <HeroSubTitle blocks={hero.subTitle} />
          <div
            sx={{
              maxWidth: breakpoints.xs,
              display: `grid`,
              gridGap: 2,
            }}
          >
            {hero.buttons?.length > 0
              ? hero.buttons.map(button => {
                  const pagePath = getPagePath(
                    button.internalLink?._type,
                    button.internalLink?.slug
                  )
                  return (
                    <ButtonLink
                      to={pagePath}
                      key={button._key}
                      variant={button.color}
                      shape={button.variant}
                    >
                      {button.label}
                    </ButtonLink>
                  )
                })
              : null}
          </div>
        </div>
      </div>
      {fluidProps && <GatsbyImage fluid={fluidProps} alt={hero?.mainImage?.alt} />}
    </section>
  )
}

export default DefaultHero
