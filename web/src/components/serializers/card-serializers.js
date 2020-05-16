import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { Styled } from 'theme-ui'

/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

export const cardSerializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        default:
          return <p sx={{ fontSize: 2, mt: 2, mb: 0 }}>{props.children}</p>
      }
    }
  }
}

export const BlockCardDescription = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={cardSerializers} />

