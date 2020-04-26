import React from 'react'
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export const SectionSeperator = () => {
  return (
    <div
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bg: 'iceberg',
        zIndex: -1,
        transform: 'skewY(16deg)',
        transformOrigin: 'top right',
      }}
    />
  )
}
