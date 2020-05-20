import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { MdInfoOutline, MdLightbulbOutline } from 'react-icons/md'
import BlockText from '../block-text'

const Icon = ({ type, ...rest }) => {
  switch (type) {
    case 'warning':
      return <MdInfoOutline {...rest} />
    case 'info':
      return <MdLightbulbOutline {...rest} />
    case 'success':
      return <MdLightbulbOutline {...rest} />
    default:
      return <MdInfoOutline {...rest} />
  }
}

export const Callout = ({ title, body, type }) => {
  return (
    <aside>
      <div
        sx={{
          variant: `callout.${type}`,
          px: 4,
          py: 4,
          fontSize: 2
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Icon type={type} sx={{ fontSize: 3, mr: 1 }} />
          <p
            sx={{
              fontWeight: 'bold',
              m: 0
            }}
          >
            {title}
          </p>
        </div>
        {body && <BlockText blocks={body} />}
      </div>
    </aside>
  )
}
