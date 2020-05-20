import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { Styled } from 'theme-ui'

/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        default:
          return <p sx={{ fontSize: 2, }}>{props.children}</p>
      }
    }
  }
}

const BlockText = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockText
