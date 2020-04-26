import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css, Styled } from 'theme-ui'

import BlockText from './block-text'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

function ProjectPreview(props) {

  return (
    <Link
      to={props.path}
      sx={{
        display: 'block',
        height: '100%',
        position: 'relative',
        textDecoration: `none`
      }}
    >
      {props.mainImage && props.mainImage.asset ? (
        <Img
          fluid={props.mainImage.asset.fluid}
          alt={props.mainImage.alt}
          css={css({
            width: '100%',
            height: '100%',
            position: 'absolute !important',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              variant: `overlay.dark`,
              backgroundColor: props.mainImage?.asset?.metadata?.palette?.darkMuted?.background,
              opacity: 0.75
            },
            [mediaQueries.lg]: {
              position: 'absolute !important',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }
          })}
        />
      ) : (
        <div
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute !important',
            bg: 'black',
            border: `1px solid`,
            borderColor: `text`
          }}
        />
      )}
      <div
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: `center`,
          padding: 4,
          height: `100%`,
          width: `100%`
        }}
      >
        <Styled.h3
          sx={{
            m: 0,
            color: 'white'
          }}
        >
          {props.title}
        </Styled.h3>
      </div>
    </Link>
  )
}

export default ProjectPreview
