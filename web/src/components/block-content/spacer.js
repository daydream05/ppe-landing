import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Spacer = ({ value = 5 }) => {
  console.log(value)
  return <div sx={{ py: value }} />
}
