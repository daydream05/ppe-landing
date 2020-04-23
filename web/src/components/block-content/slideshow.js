import React, { useState } from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { api as sanityConfig } from '../../../../studio/sanity.json'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

function Slideshow(props) {
  const { slides } = props

  return (
    <div
      sx={{
        my: 5,
        display: `grid`,
        gridGap: 3,
        [mediaQueries.lg]: {
          gridTemplateColumns: `1fr 1fr 1fr`,
        }
      }}
    >
      {slides &&
        slides.map(slide => {
          if (!slide?.asset) {
            return null
          }

          const imageAssetId = slide.asset && slide.asset.id
          const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)

          if(!fluidProps) {
            return null
          }

          return (
            <Img
              key={slide._key}
              fluid={fluidProps}
              alt={props.alt}
              sx={{
                width: '100%'
              }}
            />
          )
        })}
    </div>
  )
}

export default Slideshow
