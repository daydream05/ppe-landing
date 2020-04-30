import React, { useEffect, useState } from 'react'
import Toggle from 'react-toggle'
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

import { colors } from '../gatsby-plugin-theme-ui'

import 'react-toggle/style.css'

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode('dark')

  return (
    <label
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Toggle
        checked={colorMode === 'dark'}
        aria-labelledby='Dark mode toggle'
        onChange={e => setColorMode(colorMode === 'default' ? 'dark' : 'default')}
        icons={false}
        sx={{
          '.react-toggle-track': {
            bg: 'black !important'
          },
          '.react-toggle-thumb': {
            border: `3px solid ${colors.black}`
          },
          '&.react-toggle--checked .react-toggle-track': {
            bg: 'white !important'
          },
          '&.react-toggle--checked .react-toggle-thumb': {
            bg: 'black !important',
            border: `3px solid ${colors.white}`
          }
        }}
      />
    </label>
  )
}

export default ColorModeToggle
