import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { customSerializers } from '../serializers/custom-serializers'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const TextColumn = props => {
  console.log(props)
  return (
    <div
      sx={{
        [mediaQueries.lg]: {
          columnCount: props?.columnCount,
          columnGap: 4
        }
      }}
    >
      {props?.body && <BaseBlockContent blocks={props.body} serializers={customSerializers} />}
    </div>
  )
}
