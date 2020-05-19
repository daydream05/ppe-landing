import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'

import { getCustomSerializers } from '../serializers/custom-serializers'

export const BasicSectionBody = ({ blocks, enableAnimation }) => (
  <BaseBlockContent blocks={blocks} serializers={getCustomSerializers({ enableAnimation })} />
)
