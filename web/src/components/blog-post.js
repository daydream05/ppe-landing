import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div
          sx={{
            display: [null, null, 'grid'],
            gridTemplateColumns: '256px 1fr',
            color: 'primary',
            maxWidth: '1200px',
            m: '0 auto'
          }}
        >
          <div />
          <Img fluid={mainImage.asset.fluid} alt={mainImage.alt} />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <Styled.h1 sx={{ fontWeight: `bold`}}>{title}</Styled.h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost
