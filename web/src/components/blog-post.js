import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import { constants } from '../gatsby-plugin-theme-ui'

function BlogPost (props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } = props
  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <div
          sx={{
            display: [null, null, 'grid'],
            gridTemplateColumns: '256px 1fr',
            color: 'primary',
            maxWidth: '1200px',
            m: '0 auto',
            pt: constants.headerHeight,
          }}
        >
          <div />
          <Img fluid={mainImage.asset.fluid} alt={mainImage.alt} />
        </div>
      )}
      <Container>
        <div>
          <div>
            <Styled.h1 sx={{ fontWeight: `bold` }}>{title}</Styled.h1>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {authors && <RoleList items={authors} title='Authors' />}
            {categories && (
              <div>
                <h3>Categories</h3>
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
