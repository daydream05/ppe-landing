import React from 'react'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import BaseBlockContent from '@sanity/block-content-to-react'
import { getFluidGatsbyImage, getFixedGatsbyImage } from 'gatsby-source-sanity'
import { api as sanityConfig } from '../../../../studio/sanity.json'
import GatsbyImage from 'gatsby-image'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <Styled.p sx={{ mt: 0, fontSize: [3, 3, 4] }}>{props.children}</Styled.p>
      }
    }
  }
}

const HeroSubTitle = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

const DefaultHero = ({ hero }) => {
  const imageAssetId = hero?.mainImage?.asset?._id
  const fluidProps = getFluidGatsbyImage(imageAssetId, {}, sanityConfig)
  return (
    <section
      sx={{
        display: [`flex`, null, null, `grid`],
        flexDirection: `column-reverse`,
        gridTemplateColumns: [null, null, null, `1fr 1fr`]
      }}
    >
      <div
        sx={{
          display: [null, null, null, `flex`],
          flexDirection: `column`,
          alignItems: `center`,
          py: 4,
          px: [3]
        }}
      >
        <h1
          sx={{
            fontSize: [5, 5, 5, 6],
            mt: 0,
            mb: 2,
            lineHeight: 1,
          }}
        >
          {hero.title}
        </h1>
        <HeroSubTitle blocks={hero.subTitle} />
      </div>
      {fluidProps && <GatsbyImage fluid={fluidProps} alt={hero?.mainImage?.alt} />}
    </section>
  )
}

export default DefaultHero
