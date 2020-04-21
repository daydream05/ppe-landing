import React from 'react'
import { Box } from 'theme-ui'

export const TextBlockContainer = React.forwardRef((props, ref) => (
  <Box
    ref={ref}
    variant='container.text'
    {...props}
    __themeKey='layout'
  />
))
