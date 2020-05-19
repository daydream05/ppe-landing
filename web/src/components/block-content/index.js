import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'

import { getCustomSerializers } from '../serializers/custom-serializers'

const BlockContent = ({ blocks, ...rest }) => (
  <BaseBlockContent blocks={blocks} serializers={getCustomSerializers()} {...rest} />
)

export default BlockContent
