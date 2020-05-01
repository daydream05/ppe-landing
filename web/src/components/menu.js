import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import GridIcon from '../assets/icons/grid.svg'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { Link } from 'gatsby'

const Menu = () => {
  const [showModal, setShowModal] = useState(false)

  const linkStyle = {
    textDecoration: 'none',
    color: 'text',
    fontSize: 6,
    fontWeight: 'bold'
  }

  return (
    <div
      sx={{
        display: 'flex',
        [mediaQueries.lg]: {
          display: 'none'
        }
      }}
    >
      <button
        sx={{
          border: 'none',
          background: 'none',
          position: 'fixed',
          zIndex: 100,
          right: 3,
          top: 4
        }}
        onClick={() => setShowModal(!showModal)}
      >
        <GridIcon
          sx={{
            fontSize: 4,
            width: '24px',
            height: '24px',
            fill: 'text'
          }}
        />
      </button>
      <DialogOverlay
        isOpen={showModal}
        sx={{
          height: '100vh',
          width: '100% !important',
          margin: '0 !important',
          bg: 'background',
          position: 'fixed',
          zIndex: 1
        }}
      >
        <DialogContent
          sx={{
            width: '100%',
            height: '100%',
            margin: '0 !important',
            bg: 'background',
            '&&&': {
              px: 4,
              py: 6,
            }
          }}
        >
          <ul
            sx={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}
          >
            <li>
              <Link to='/' sx={{ ...linkStyle }}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/projects/' sx={{ ...linkStyle }}>
                Projects
              </Link>
            </li>
          </ul>
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}

export default Menu
