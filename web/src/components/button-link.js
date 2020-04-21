import React from 'react'
/** @jsx jsx */
import { jsx, Styled, css } from 'theme-ui'
import { Link } from 'gatsby'

import theme from '../gatsby-plugin-theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

const ButtonLink = ({ children, variant, shape, ...rest }) => {
  const getShapeStyle = shape => {
    switch (shape) {
      case 'outline':
        return {
          boxSizing: 'border-box',
          boxShadow: `inset 0px 0px 0px 2px`,
          backgroundColor: 'unset !important',
          color: theme?.buttons?.[variant]?.bg
        }
      case 'pill':
        return {
          borderRadius: '9999px'
        }
      default:
        return {}
    }
  }

  const shapeStyle = getShapeStyle(shape)
  return (
    <Link
      sx={{
        appearance: 'none',
        display: 'block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 2,
        fontWeight: 'bold',
        px: 3,
        py: 2,
        color: 'white',
        bg: 'primary',
        border: 0,
        borderRadius: 4,
        variant: `buttons.${variant}`,
        [mediaQueries.lg]: {
          display: 'inline-block'
        }
      }}
      css={css({
        ...shapeStyle
      })}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
