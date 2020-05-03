import React, { useState, useRef } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { animated, useTransition, useTrail, useChain } from 'react-spring'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import GridIcon from '../assets/icons/grid.svg'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'
import { Link, useStaticQuery, graphql } from 'gatsby'
import ColorModeToggle from './color-mode-toggle'

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

  const AnimatedDialogOverlay = animated(DialogOverlay)

  const transitionRef = useRef()

  const transitions = useTransition(showModal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: transitionRef
  })

  const config = { mass: 5, tension: 2000, friction: 200 }

  const trailRef = useRef()

  const trail =
    menu?.items?.length > 0 &&
    useTrail(menu.items.length, {
      config,
      opacity: showModal ? 1 : 0,
      x: showModal ? 0 : 20,
      height: showModal ? 80 : 0,
      willChange: 'auto',
      from: { opacity: 0, x: 20, height: 0 },
      ref: trailRef
    })

  useChain([transitionRef, trailRef], [0, 0.5])

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
      {transitions.map(
        ({ item, key, props: styles }) =>
          item && (
            <AnimatedDialogOverlay
              key={key}
              sx={{
                height: '100vh',
                width: '100% !important',
                margin: '0 !important',
                bg: 'background',
                position: 'fixed',
                zIndex: 1,
                willChange: `opacity`
              }}
              style={{ opacity: styles.opacity }}
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
                {trail && (
                  <ul
                    sx={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: `flex`,
                      flexDirection: `column`,
                      height: `100%`
                    }}
                  >
                    {trail?.map(({ x, height, ...rest }, index) => {
                      const item = menu.items[index]
                      console.log(item)
                      if (menu.items.length === index + 1) {
                        return (
                          <>
                            <animated.li
                              key={item._key}
                              sx={{ textAlign: `right`, willChange: `transform, opacity` }}
                              style={{
                                ...rest,
                                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                              }}
                            >
                              <Link to={item.linkedPage?.path} sx={{ ...linkStyle }}>
                                {item.title}
                              </Link>
                            </animated.li>
                            <animated.li
                              key={`${index}-color-toggle`}
                              sx={{
                                textAlign: `right`,
                                willChange: `transform, opacity`,
                                display: `flex`,
                                justifyContent: `flex-end`,
                                flex: 1
                              }}
                              style={{
                                ...rest,
                                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                              }}
                            >
                              <ColorModeToggle />
                            </animated.li>
                          </>
                        )
                      }
                      return (
                        <animated.li
                          key={item._key}
                          sx={{ textAlign: `right`, willChange: `transform, opacity` }}
                          style={{
                            ...rest,
                            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                          }}
                        >
                          <Link to={item.linkedPage?.path} sx={{ ...linkStyle }}>
                            {item.title}
                          </Link>
                        </animated.li>
                      )
                    })}
                  </ul>
                )}
              </DialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  )
}

export default Menu
