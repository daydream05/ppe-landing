import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
/** @jsx jsx */
import { jsx, css, Styled } from 'theme-ui'

import BlockText from './block-text'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { FaLongArrowAltRight } from 'react-icons/fa'

function ProjectPreview(props) {
  console.log(props)
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        [mediaQueries.lg]: {
          flexDirection: `row`,
          alignItems: `center`
        }
      }}
    >
      <div
        sx={{
          [mediaQueries.lg]: {
            flex: `0 0 40%`,
            pr: 4
          }
        }}
      >
        <div
          sx={{
            mb: 4
          }}
        >
          {props.categories?.length > 0
            ? props.categories.map(category => {
                return (
                  <span
                    key={category.id}
                    sx={{
                      opacity: 0.5,
                      fontWeight: `600`,
                    }}
                  >
                    {category.title}
                  </span>
                )
              })
            : null}
        </div>
        <Styled.h3
          sx={{
            m: 0,
            color: 'text',
            fontSize: 5,
            mb: 3,
            [mediaQueries.lg]: {
              fontSize: 7,
              mb: 5
            }
          }}
        >
          {props.title}
        </Styled.h3>
        <Link
          to={props.path}
          sx={{
            mt: 0,
            fontSize: [2, 2, 2, 2, 3],
            color: 'text',
            textDecoration: `none`,
            display: `flex`,
            alignItems: `center`,
            ':hover': {
              color: 'primary'
            },
            mb: 4
          }}
        >
          Read more <FaLongArrowAltRight sx={{ ml: 3 }} />
        </Link>
      </div>
      <Link
        to={props.path}
        sx={{
          display: 'block',
          height: '100%',
          position: 'relative',
          textDecoration: `none`,
          [mediaQueries.lg]: {
            flex: `0 0 60%`
          }
        }}
      >
        {props.mainImage && props.mainImage.asset ? (
          <Img fluid={props.mainImage.asset.fluid} alt={props.mainImage.alt} />
        ) : (
          <div
            sx={{
              width: '100%',
              height: '100%',
              bg: 'grey',
              pt: `68.5185%`
            }}
          />
        )}
      </Link>
    </div>
  )
}

export default ProjectPreview
