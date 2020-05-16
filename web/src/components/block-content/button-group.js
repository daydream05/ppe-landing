import React from 'react'
import ButtonLink from '../button-link'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getPagePath } from '../../lib/helpers'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const ButtonGroup = ({ buttons, position, layout, className }) => {
  console.log(layout)
  return (
    <div
      sx={{
        margin: `0 auto`,
        variant: `layout.buttonGroup.${layout}`,
        [mediaQueries.lg]: {
          justifyContent: position === 'left' ? `flex-start` : `center`,
          variant: `layout.buttonGroup.${layout}`
        }
      }}
      className={className}
    >
      {buttons?.length > 0 &&
        buttons.map(button => {
          const pagePath = getPagePath(button.internalLink?._type, button.internalLink?.slug)
          return (
            <ButtonLink variant={button.color} shape={button.variant} to={pagePath}>
              {button.label}
            </ButtonLink>
          )
        })}
    </div>
  )
}
