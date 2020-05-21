import React from 'react'
/** @jsx jsx */
import { jsx, Styled, css } from 'theme-ui'
import { Link } from 'gatsby'

import theme from '../gatsby-plugin-theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

const ButtonLink = ({ children, variant, shape, to, isInternalLink, ...rest }) => {
  const getShapeStyle = (shape) => {
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

  const buttonStyle = {
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
    minWidth: `128px`,
    border: 0,
    variant: `buttons.${variant}`,
    '~ button, ~ a': {
      mt: `0 !important`
    },
    '~ p, ~ div': {
      mt: 5
    },
    [mediaQueries.lg]: {
      display: 'inline-block'
    }
  }

  if (!isInternalLink) {
    return (
      <a
        href={to}
        rel="noopener noreferrer nofollow"
        target="_blank"
        sx={{
          ...buttonStyle
        }}
        css={css({
          ...shapeStyle
        })}
        {...rest}
      >
        {children}
      </a>
    )
  }
  return (
    <Link
      sx={{
        ...buttonStyle
      }}
      css={css({
        ...shapeStyle
      })}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
