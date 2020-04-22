import React from 'react'
import { MediaImage } from './media-image'

export const MediaSelector = ({ media }) => {
  switch (media?.linkedMedia?._type) {
    case 'photo': {
      return <MediaImage media={media?.linkedMedia} />
    }
    case 'video': {
      return <div>It's a video</div>
    }
    default:
      return null
  }
}
