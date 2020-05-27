import React from 'react'
import { BasicSection } from './basic-section'
import { SectionContentHalfWithMedia } from './section-content-half-with-media'
import { SectionMediaFullScreen } from './section-media-full-screen'
import { HeroSelector } from '../hero/hero-selector'
import { SectionWithCards } from './section-with-cards'
import { SectionContact } from './section-contact'

export const SectionSelector = ({ section, ...rest }) => {
  if (section._type === `section`) {
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
  } else if (section._type === `sectionWithCards`) {
    return <SectionWithCards section={section} {...rest} />
  } else if (section._type === `sectionContact`) {
    return <SectionContact section={section} {...rest} />
  } else {
    return <HeroSelector hero={section} />
  }
}
