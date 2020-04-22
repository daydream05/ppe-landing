import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import { constants } from '../gatsby-plugin-theme-ui'

function Project (props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props
  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: `256px 1fr`,
            color: 'primary',
            maxWidth: `1200px`,
            m: `0 auto`,
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
            <Styled.h1>{title}</Styled.h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && <RoleList items={members} title='Authors' />}
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
            {relatedProjects && (
              <div>
                <h3>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                    </li>
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

export default Project
