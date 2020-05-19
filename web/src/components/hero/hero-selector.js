import React from 'react'

import { HeroWithJustBlock } from '../hero/hero-with-just-block'
import { HeroBasic } from '../hero/hero-basic'
import { HeroWithLargeTextAndImageStrip } from './hero-with-large-text-and-image-strip'

export const HeroSelector = ({ hero, ...rest }) => {
  console.log(hero)
  switch (hero._type) {
    case 'heroWithJustBlock': {
      return <HeroWithJustBlock blocks={hero.block} settings={hero?.settings} />
    }
    case 'heroBasic': {
      return (
        <HeroBasic blocks={hero.content} mainImage={hero.mainImage} settings={hero?.settings} />
      )
    }
    case 'heroWithImage': {
      if (hero.layout === 'a') {
        return (
          <HeroWithLargeTextAndImageStrip
            blocks={hero.content}
            mainImage={hero.mainImage}
            settings={hero?.settings}
          />
        )
      } else {
        return (
          <HeroBasic blocks={hero.content} mainImage={hero.mainImage} settings={hero?.settings} />
        )
      }
    }
    default:
      return null
  }
}
