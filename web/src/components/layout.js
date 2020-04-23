import React from 'react'
import Helmet from 'react-helmet'
import { Footer } from './footer'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { constants } from '../gatsby-plugin-theme-ui'
import Header from './header'

const Layout = ({ children, pageSettings }) => {

  return (
    <div
      sx={{
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <Helmet>
        <link rel='stylesheet' href='https://use.typekit.net/woj5zqc.css' />
      </Helmet>
      <Header linkTheme={pageSettings?.headerLinkColor} />
      <div
        sx={{
          pb: constants.footerHeight
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
