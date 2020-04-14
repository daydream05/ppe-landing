import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css } from 'theme-ui'

import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={getBlogUrl(props.publishedAt, props.slug.current)}>
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
            bg: 'muted'
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
