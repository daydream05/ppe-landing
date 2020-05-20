import React from 'react'
/** @jsx jsx */
import { Container, jsx, Styled, Text } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

export const Footer = props => {
  return (
    <footer
      sx={{
        bg: 'iceberg',
        variant: 'footer.primary',
        py: 6,
        px: 6,
        bottom: 0,
        width: '100%',
      }}
    >
      <Container
        variant='layout.container.large'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div
          sx={{
            fontWeight: '600',
            fontSize: 4
          }}
        >
          © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a> &amp;{' '}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </div>
      </Container>
    </footer>
  )
}
