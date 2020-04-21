import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css } from 'theme-ui'

import { cn, getBlogUrl } from '../lib/helpers'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

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
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <BlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  )
}

export default BlogPostPreview
