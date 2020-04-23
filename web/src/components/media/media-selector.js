import React from 'react'
import { MediaImage } from './media-image'

export const MediaSelector = ({ media, isFullScreen }) => {
  switch (media?.linkedMedia?._type) {
    case 'photo': {
      return (
        <MediaImage
          media={media?.linkedMedia}
          overlay={media?.overlay}
          isHeightEnabled={media?.isMediaHeightEnabled}
          isFullScreen={isFullScreen}
          position={media?.position}
        />
      )
    }
    case 'video': {
      return <div>It's a video</div>
    }
    default:
      return null
  }
}
