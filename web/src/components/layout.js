import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import { Footer } from './footer'

const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
        <Header
          siteTitle={siteTitle}
          onHideNav={onHideNav}
          onShowNav={onShowNav}
          showNav={showNav}
        />
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/woj5zqc.css" />
        </Helmet>
        <div>{children}</div>
        <Footer />
  </>
)

export default Layout
