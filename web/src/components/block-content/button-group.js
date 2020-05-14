import React from 'react'
import ButtonLink from '../button-link'

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const ButtonGroup = ({ buttons, position, layout, className }) => {
  console.log(buttons, position, layout)
  return (
    <div
      sx={{
        variant: `layout.buttonGroup.${layout}`,
        margin: `0 auto`,
        justifyContent: position === 'left' ? `flex-start` : `center`,
      }}
      className={className}
    >
      {buttons?.length > 0 &&
        buttons.map(button => {
          return (
            <ButtonLink variant={button.color} shape={button.variant}>
              {button.label}
            </ButtonLink>
          )
        })}
    </div>
  )
}
