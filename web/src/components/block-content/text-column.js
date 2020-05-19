import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getCustomSerializers } from '../serializers/custom-serializers'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const TextColumn = ({ body, columnCount, ...rest}) => {
  return (
    <div
      sx={{
        mb: 4,
        [mediaQueries.lg]: {
          columnCount: columnCount,
          columnGap: 4
        }
      }}
      {...rest}
    >
      {body && <BaseBlockContent blocks={body} serializers={getCustomSerializers()} sx={{
        ':last-child': {
          mb: 0
        }
      }} />}
    </div>
  )
}
