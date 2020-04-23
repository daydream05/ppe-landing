import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import { Footer } from './footer'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { constants } from '../gatsby-plugin-theme-ui'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div
    sx={{
      position: 'relative',
      minHeight: '100vh'
    }}
  >
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <Helmet>
      <link rel='stylesheet' href='https://use.typekit.net/woj5zqc.css' />
    </Helmet>
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

export default Layout
