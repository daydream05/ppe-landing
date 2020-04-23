import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

/** @jsx jsx */
import { jsx, Styled, Text } from 'theme-ui'

import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import { constants } from '../gatsby-plugin-theme-ui'
import { TextBlockContainer } from './text-block-container'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

function Project (props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props

  const tableDetailStyle = {
    borderBottom: '1px solid',
    borderColor: 'mute',
    py: 2,
    pr: 4,
    fontSize: 3
  }

  return (
    <article>
      {props.mainImage && mainImage.asset && (
        <div
          sx={{
            position: 'relative'
          }}
        >
          <Img
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt}
            sx={{
              width: '100%',
              height: '50vh'
            }}
          />
        </div>
      )}
      <Container>
        <div>
          <div sx={{ px: [4, 4, 4, 4, 4, 0] }}>
            <TextBlockContainer>
              <Styled.h1 sx={{ fontWeight: 'bold', textAlign: 'center' }}>{title}</Styled.h1>
              <aside>
                <table
                  sx={{
                    borderSpacing: 0,
                    mb: 5,
                    [mediaQueries.lg]: {
                      float: 'right',
                      pb: 4,
                      pl: 4,
                      width: '45%'
                    }
                  }}
                >
                  <thead>
                    <tr>
                      <th sx={{ textAlign: 'left', pb: 4 }} colSpan='2'>
                        <Text as='h2' variant='text.heading.small' sx={{ pt: 0 }}>
                          Project details
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td sx={tableDetailStyle}>
                        <Text as='h3' sx={{ fontSize: 3 }}>
                          Project:
                        </Text>
                      </td>
                      <td sx={tableDetailStyle}>
                        <Text as='span'>Semister Darwin</Text>
                      </td>
                    </tr>
                    <tr>
                      <td sx={tableDetailStyle}>
                        <Text as='h3' sx={{ fontSize: 3 }}>
                          Client:
                        </Text>
                      </td>
                      <td sx={tableDetailStyle}>
                        <Text as='span'>Designmodo</Text>
                      </td>
                    </tr>
                    <tr>
                      <td sx={tableDetailStyle}>
                        <Text as='h3' sx={{ fontSize: 3 }}>
                          Deliverable(s):
                        </Text>
                      </td>
                      <td sx={tableDetailStyle}>
                        <Text as='span'>Website</Text>
                      </td>
                    </tr>
                    <tr>
                      <td sx={tableDetailStyle}>
                        <Text as='h3' sx={{ fontSize: 3 }}>
                          Year:
                        </Text>
                      </td>
                      <td sx={tableDetailStyle}>
                        <Text as='span'>2020</Text>
                      </td>
                    </tr>
                    <tr>
                      <td sx={tableDetailStyle}>
                        <Text as='h3' sx={{ fontSize: 3 }}>
                          Field:
                        </Text>
                      </td>
                      <td sx={tableDetailStyle}>
                        <Text as='span'>Web Development</Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </aside>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
            </TextBlockContainer>
          </div>
          <aside>
            {publishedAt && (
              <div>
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
