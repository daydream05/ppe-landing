import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

/** @jsx jsx */
import { jsx } from 'theme-ui'

import { api as sanityConfig } from '../../../../studio/sanity.json'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

function Figure (props) {
  const imageAssetId = props.asset && props.asset._ref
  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)

  return (
    <figure
      sx={{
        my: 0,
        mx: -3,
        py: [5, 5, 5, 5, 5, 6],
        [mediaQueries.lg]: {
          ml: 'calc(-100vw / 2 + 900px / 2)',
          mr: 'calc(-100vw / 2 + 900px / 2)'
        }
      }}
    >
      {props.asset && (
        <Img
          fluid={fluidProps}
          alt={props.alt}
          sx={{
            width: '100%'
          }}
        />
      )}
      <figcaption
        sx={{
          textAlign: 'center',
          mt: 3
        }}
      >
        {props.caption}
      </figcaption>
    </figure>
  )
}

export default Figure
