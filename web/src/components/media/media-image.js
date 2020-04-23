import React from 'react'
import GatsbyImage from 'gatsby-image'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { api as sanityConfig } from '../../../../studio/sanity.json'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity/lib-es5'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const MediaImage = ({
  media,
  overlay,
  isHeightEnabled,
  isFullScreen,
  position,
  addYPadding
}) => {
  const { file } = media
  if (!file) {
    return null
  }

  const imageAssetId = file?.asset?.id

  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  const height = file?.asset?.metadata?.dimensions?.height
  const width = file?.asset?.metadata?.dimensions?.width

  const fullScreenStyle = isFullScreen
    ? {
        position: `absolute !important`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`
      }
    : {}

  let positionStyle

  if (position === `left`) {
    positionStyle = { marginRight: `auto` }
  } else if (position === `right`) {
    positionStyle = { marginLeft: `auto` }
  } else {
    positionStyle = { marginLeft: `auto`, marginRight: `auto` }
  }

  return fluidProps ? (
    <div
      sx={{
        py: addYPadding ? 6: null
      }}
    >
      <div
        sx={{
          position: `relative`,
          height: `100%`,
          width: `100%`,
          my: 6,
          bg: 'inherit',
          [mediaQueries.lg]: {
            height: isHeightEnabled ? `${height}px` : `100%`,
            width: isHeightEnabled ? `${width}px` : `100%`,
            ...positionStyle
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
    </div>
  ) : null
}
