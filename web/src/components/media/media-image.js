import React from 'react'
import GatsbyImage from 'gatsby-image'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { api as sanityConfig } from '../../../../studio/sanity.json'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity/lib-es5'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const MediaImage = ({ media, overlay, isHeightEnabled, isFullScreen }) => {
  const { file } = media
  if (!file) {
    return null
  }

  const imageAssetId = file?.asset?.id

  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  const height = file?.asset?.metadata?.dimensions?.height

  const fullScreenStyle = isFullScreen ? {
    position: `absolute !important`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`
  } : {}

  return fluidProps ? (
    <div
      sx={{
        position: `relative`,
        height: `100%`,
        width: `100%`,
        [mediaQueries.lg]: {
          height: isHeightEnabled ? `${height}px` : `100%`
        }
      }}
    >
      <GatsbyImage
        fluid={fluidProps}
        alt={media?.title}
        sx={{
          ...fullScreenStyle,
          '&::after': {
            content: `""`,
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            variant: `overlay.${overlay}`
          },
          [mediaQueries.lg]: {
            position: `absolute !important`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`
          }
        }}
      />
    </div>
  ) : null
}
