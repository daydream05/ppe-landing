import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

import { customSerializers } from '../serializers/custom-serializers'

export const BasicSectionBody = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={customSerializers} />
)
