import React from 'react'
import { Box } from 'theme-ui'

export const Section = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="section"
    variant='section'
    {...props}
    __themeKey='section'
  />
))