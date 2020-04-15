import React from 'react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

/** @jsx jsx */
import { jsx } from 'theme-ui'

import { api as sanityConfig } from '../../../../studio/sanity.json'

function Figure (props) {
  console.log(props)

  const imageAssetId = props.asset && props.asset._ref
  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  return (
    <figure
      sx={{
        m: 0,
      }}
    >
      {props.asset && (
        <Img
          fluid={fluidProps}
          alt={props.alt}
        />
      )}
      <figcaption
        sx={{
          textAlign: `center`,
          mt: 1,
        }}
      >{props.caption}</figcaption>
    </figure>
  )
}

export default Figure
