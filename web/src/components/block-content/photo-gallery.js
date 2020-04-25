import React from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

/** @jsx jsx */
import { jsx } from 'theme-ui'

import { api as sanityConfig } from '../../../../studio/sanity.json'
import GatsbyImage from 'gatsby-image'

const Photo = ({ photo, margin, index, top, left }) => {
  const captionHeight = photo.caption ? '80px' : 0
  return (
    <figure
      sx={{
        m: `${margin}px`,
        height: `calc(${photo.height} + ${captionHeight})`,
        width: photo.width,
        position: `relative`,
        overflow: `hidden`
      }}
    >
      <GatsbyImage fluid={photo.fluidProps} />
      <figcaption
        sx={{
          position: `relative`,
          height: captionHeight,
        }}
      >{photo.alt}</figcaption>
    </figure>
  )
}

export const PhotoGallery = ({ photos, className, margin, targetRowHeight }) => {
  let galleryPhotos = []

  if(!photos) {
    return null
  }

  for (var i = 0; i < photos.length; i++) {
    // this stops the front end from breaking when an image is about to be added
    // on sanity.
    if (!photos[i].asset) {
      break
    }
    const image = photos[i]

    const imageAssetId = image.asset?._id || image.asset?._ref
    const fluidProps = imageAssetId && getFluidGatsbyImage(imageAssetId, {}, sanityConfig)

    if(!fluidProps) {
      break
    }

    galleryPhotos[i] = {
      src: fluidProps?.src,
      srcSet: [fluidProps?.srcSet],
      sizes: [fluidProps?.sizes],
      width: fluidProps?.aspectRatio,
      alt: image.alt,
      caption: image.caption,
      height: 1,
      fluidProps: fluidProps
    }
  }

  return (
    <div
      className={className}
      sx={{
        mx: `-${margin}px`
      }}
    >
      {galleryPhotos.length > 0 ? (
        <Gallery
          photos={galleryPhotos}
          targetRowHeight={targetRowHeight}
          margin={margin}
          renderImage={({ index, left, top, key, photo }) => {
            return (
              <Photo key={key} index={index} photo={photo} left={left} top={top} margin={margin} />
            )
          }}
        />
      ) : <span>No photos provided</span>}
    </div>
  )
}

PhotoGallery.propTypes = {
  targetRowHeight: PropTypes.number,
  margin: PropTypes.number
}

PhotoGallery.defaultProps = {
  targetRowHeight: 400,
  margin: 8
}
