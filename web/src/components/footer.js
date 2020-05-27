import React from 'react'
/** @jsx jsx */
import { Container, jsx, Styled, Text } from 'theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

export const Footer = props => {
  return (
    <footer
      sx={{
        bg: 'iceberg',
        variant: 'footer.dark',
        py: 6,
        px: 6,
        bottom: 0,
        width: '100%'
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
          © {new Date().getFullYear()}, Built with{' '}
          <a
            href='https://www.sanity.io'
            target='_blank'
            rel='noopener noferrer nofollow'
            sx={{ color: 'inherit' }}
          >
            Sanity
          </a>{' '}
          &amp;{' '}
          <a
            href='https://www.gatsbyjs.org'
            rel='noopener noferrer nofollow'
            sx={{ color: 'inherit' }}
          >
            Gatsby
          </a>
        </div>
      </Container>
    </footer>
  )
}
