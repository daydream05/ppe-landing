import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

/** @jsx jsx */
import { jsx } from 'theme-ui'

import { customSerializers } from '../serializers/custom-serializers'

const BlockContent = ({ blocks, ...rest }) => (
  <BaseBlockContent blocks={blocks} serializers={customSerializers} {...rest} />
)

export default BlockContent
