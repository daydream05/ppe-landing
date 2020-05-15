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
      <Header linkTheme={pageSettings?.headerLinkColor} />
      <Menu />
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
