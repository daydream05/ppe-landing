import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

export const PhotoGallery = ({ value }) => {
  const { photos } = value

  if(photos?.length === 0) {
    return (
      <div>No photos added.</div>
    )
  }

  let galleryPhotos = []

  for(var i = 0; i < photos?.length; i++) {
    if(!photos[i].asset) {
      break
    }

    const image = photos[i]

    const imageUrl = imageUrlFor(buildImageObj(image)).quality(50).height(200).url()

    const [width, height] = imageUrl.split('/')[6].split('-')[1].split('?')[0].split('.')[0].split('x')
    
    galleryPhotos[i] = {
      src: imageUrl,
      width: parseInt(width),
      alt: image.alt,
      height: parseInt(height),
    }
  }

  return (
    <div
      style={{
        padding: `8px 4px 2px 4px`,
      }}
    >
      {galleryPhotos?.length > 0 && (
        galleryPhotos.map((img, id) => {
          return (
            <img
              key={id}
              src={img.src}
              alt={img.alt}
              style={{
                margin: `0 4px`,
              }}
            />
          )
        })
      )}
    </div>
  )
}