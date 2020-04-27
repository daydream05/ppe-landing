import React from 'react'
import { BasicSection } from './basic-section'
import { SectionContentHalfWithMedia } from './section-content-half-with-media'
import { SectionMediaFullScreen } from './section-media-full-screen'
import { HeroWithJustBlock } from '../hero/hero-with-just-block'
import { HeroBasic } from '../hero/hero-basic'

export const SectionSelector = ({ section, ...rest }) => {
  if (section._type === `heroWithJustBlock`) {
    return <HeroWithJustBlock blocks={section.block} />
  } else if (section._type === `heroBasic`) {
    return <HeroBasic blocks={section.content} mainImage={section.mainImage} />
  } else if (section._type === `section`) {
    switch (section?.layout) {
      case 'contentWithMediaRight': {
        return <SectionContentHalfWithMedia section={section} {...rest} />
      }
      case 'contentWithMediaLeft': {
        return <SectionContentHalfWithMedia section={section} reverseDirection={true} {...rest} />
      }
      case 'contentWithFullScreenMedia': {
        return <SectionMediaFullScreen section={section} {...rest} />
      }
      default:
        return <BasicSection section={section} {...rest} />
    }
  } else {
    return null
  }
}
