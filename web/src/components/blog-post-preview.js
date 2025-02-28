import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css, Styled } from 'theme-ui'

import BlockText from './block-text'

function BlogPostPreview (props) {
  return (
    <Link
      to={props.path}
      css={css({
        display: `block`,
        color: `inherit`,
        textDecoration: `none`,
      })}
    >
      {props.mainImage && props.mainImage.asset ? (
        <Img
          fluid={props.mainImage.asset.fluid}
          alt={props.mainImage.alt}
          css={css({
            width: '100%',
            height: '100%'
          })}
        />
      ) : (
        <div
          sx={{
            position: 'relative',
            pb: '66.666%',
            bg: 'text'
          }}
        />
      )}
      <Styled.h3>{props.title}</Styled.h3>
      {props._rawExcerpt && (
        <div>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default BlogPostPreview
