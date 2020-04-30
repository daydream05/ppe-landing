import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import ColorModeToggle from './color-mode-toggle'
import { constants } from '../gatsby-plugin-theme-ui'

import GridIcon from '../assets/icons/grid.svg'

const siteQuery = graphql`
  query {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`

const Header = ({ linkTheme }) => {
  const linkItemStyle = {
    padding: [3],
    textDecoration: 'none',
    fontWeight: '600',
    textTransform: 'lowercase',
    lineHeight: 0,
    variant: `header.link.${linkTheme}`,
    fontSize: 4,
    '&.active': {
      color: 'primary'
    },
    ':hover': {
      color: 'primary'
    }
  }

  const data = useStaticQuery(siteQuery)

  return (
    <header
      sx={{
        height: constants.headerHeight,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        zIndex: 1
      }}
    >
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          height: '100%',
          width: '100%',
          maxWidth: breakpoints.xxxl,
          [mediaQueries.xl]: {
            px: 5
          }
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <GridIcon sx={{
            fontSize: 4,
            width: `24px`,
            height: `24px`,
            fill: `text`,
          }}/>
          <Link to="/" sx={{ ...linkItemStyle }}>
            {data?.site?.title}
          </Link>
        </div>
        <nav
          sx={{
            display: 'none',
            [mediaQueries.lg]: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }
          }}
        >
          <ul
            sx={{
              listStyle: 'none',
              display: 'flex',
              padding: 0
            }}
          >
            <li>
              <Link to="/about/" sx={linkItemStyle} activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects/" sx={linkItemStyle} activeClassName="active">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog/" sx={linkItemStyle} activeClassName="active">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact/" sx={linkItemStyle} activeClassName="active">
                Contact
              </Link>
            </li>
            <li>
              <ColorModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  linkTheme: PropTypes.oneOf(['dark', 'light', 'default'])
}

Header.defaultProps = {
  linkTheme: 'default'
}

export default Header
