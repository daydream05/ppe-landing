import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Spacer = ({ value = 5 }) => {
  return <div sx={{ py: value }} />
}
