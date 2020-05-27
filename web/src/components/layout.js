import React from 'react'
import Helmet from 'react-helmet'
import { Footer } from './footer'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './header'
import Menu from './menu'

const Layout = ({ children, pageSettings }) => {
  return (
    <div
      sx={{
        position: 'relative',
      }}
    >
      <Helmet htmlAttributes={{ lang: 'en' }}/>
      <Header linkTheme={pageSettings?.headerLinkColor} />
      <main
        sx={{
          minHeight: '100vh',
          display: `flex`,
          flexDirection: `column`
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
