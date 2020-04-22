import React from 'react'
import GatsbyImage from 'gatsby-image'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { api as sanityConfig } from '../../../../studio/sanity.json'
import { getFluidGatsbyImage } from 'gatsby-source-sanity/lib-es5'

export const MediaImage = ({ media }) => {
  const { file } = media
  if (!file) {
    return null
  }

  const imageAssetId = file?.asset?._ref

  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  return fluidProps ? (
    <div
      sx={{
        position: `relative`,
        height: `100%`,
        width: `100%`,
      }}
    >
      <GatsbyImage
        fluid={fluidProps}
        alt={media?.title}
        sx={{
          position: `absolute !important`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`
        }}
      />
    </div>
  ) : null
}
