import React from 'react'
/** @jsx jsx */
import { jsx, Text, Styled } from 'theme-ui'
import BlockContent from '@sanity/block-content-to-react'
import { tableOfContentSerializers } from './serializers/table-of-content-serializers'

export const TableOfContents = ({ blocks }) => {
  return (
    <aside >
      <h3 sx={{ variant: `text.heading.small`, fontWeight: `bold` }}>Table of contents</h3>
      <BlockContent blocks={blocks} serializers={tableOfContentSerializers} renderContainerOnSingleChild />
    </aside>
  )
}
