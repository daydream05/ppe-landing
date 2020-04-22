import React from 'react'
import { BasicSection } from './basic-section'
import { SectionContentHalfWithMedia } from './section-content-half-with-media'
import { SectionMediaFullScreen } from './section-media-full-screen'

export const SectionSelector = ({ section }) => {
  switch (section?.layout) {
    case 'contentWithMediaRight': {
      return <SectionContentHalfWithMedia section={section} />
    }
    case 'contentWithMediaLeft': {
      return <SectionContentHalfWithMedia section={section} reverseDirection={true} />
    }
    case 'contentWithFullScreenMedia': {
      return <SectionMediaFullScreen section={section} />
    }
    default:
      return <BasicSection section={section} />
  }
}
