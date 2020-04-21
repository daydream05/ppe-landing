import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

const serializers = {
  marks: {
    bold(props) {
      return <span sx={{ fontWeight: `600` }}>{props.children}</span>
    }
  },
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return (
            <Text variant="body.large" as="p">{props.children}</Text>
          )
      }
    }
  }
}

export const BasicSectionBody = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)
