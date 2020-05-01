import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import GridIcon from '../assets/icons/grid.svg'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { Link, useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    menu: sanityMenu(_id: { regex: "/(drafts.|)mainMenu/" }) {
      items {
        _key
        title
        linkedPage {
          ... on SanityPage {
            path
          }
        }
      }
    }
  }
`

const Menu = () => {
  const [showModal, setShowModal] = useState(false)

  const data = useStaticQuery(query)

  const { menu } = data

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
            fill: showModal ? 'primary' : 'text',
            transition: `0.25s ease-in`
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
              px: 5,
              py: 6
            }
          }}
        >
          {menu && (
            <ul
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {menu?.items?.map(item => {
                return (
                  <li key={item._key} sx={{ textAlign: `right` }}>
                    <Link to={item.linkedPage?.path} sx={{ ...linkStyle }}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}

export default Menu
