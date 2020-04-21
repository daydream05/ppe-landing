import { Link } from 'gatsby'
import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { breakpoints } from '../gatsby-plugin-theme-ui/breakpoints'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import ColorModeToggle from './color-mode-toggle'
import { constants } from '../gatsby-plugin-theme-ui'

const linkItemStyle = {
  padding: [3],
  textDecoration: 'none',
  fontWeight: '600',
  textTransform: 'lowercase',
  lineHeight: 0,
  color: 'inherit',
  fontSize: 4,
  '&.active': {
    color: 'primary'
  },
  ':hover': {
    color: 'primary'
  }
}
const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => {
  return (
    <div
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
            alignItems: 'center'
          }}
        >
          <Link to='/' sx={{ ...linkItemStyle }}>
            {siteTitle}
          </Link>
        </div>
        <nav
          sx={{
            display: `none`,
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
              <Link to='/about/' sx={linkItemStyle} activeClassName='active'>
                About
              </Link>
            </li>
            <li>
              <Link to='/projects/' sx={linkItemStyle} activeClassName='active'>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/blog/' sx={linkItemStyle} activeClassName='active'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/contact/' sx={linkItemStyle} activeClassName='active'>
                Contact
              </Link>
            </li>
            <li>
              <ColorModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
