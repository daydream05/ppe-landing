import React from 'react'
import ButtonLink from '../button-link'

/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getPagePath } from '../../lib/helpers'

export const ButtonGroup = ({ buttons, position, layout, className }) => {
  return (
    <div
      sx={{
        variant: `layout.buttonGroup.${layout}`,
        margin: `0 auto`,
        justifyContent: position === 'left' ? `flex-start` : `center`
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
