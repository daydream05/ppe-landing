import React from 'react'
/** @jsx jsx */
import { Container, jsx, Styled, Text } from 'theme-ui'

export const Footer = props => {
  return (
    <footer
      sx={{
        bg: 'iceberg',
        variant: 'footer.iceberg',
        py: 6,
        px: 6,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '450px'
      }}
    >
      <Container
        variant='layout.container.large'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <p
          sx={{
            fontSize: 7,
            fontWeight: 'bold',
            m: 0,
            lineHeight: 1,
            textAlign: 'center',
            color: 'inherit'
          }}
        >
          Let’s work together.
        </p>
        <p
          sx={{
            fontSize: 7,
            fontWeight: 'bold',
            m: 0,
            lineHeight: 1,
            textAlign: 'center',
            mb: 5,
            color: 'inherit'
          }}
        >
          hello@laura.com
        </p>
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
