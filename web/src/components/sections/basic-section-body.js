import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
/** @jsx jsx */
import { jsx, Text, Styled } from 'theme-ui'

const serializers = {
  marks: {
    bold: props => {
      return <span sx={{ fontWeight: '600' }}>{props.children}</span>
    },
    leftAlign: props => <span sx={{ textAlign: 'left', display: 'block' }}>{props.children}</span>,
    rightAlign: props => (
      <span sx={{ textAlign: 'right', display: 'block' }}>{props.children}</span>
    ),
    centerAlign: props => (
      <span sx={{ textAlign: 'center', display: 'block' }}>{props.children}</span>
    )
  },
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h2': {
          return <Styled.h2 sx={{ color: 'inherit' }}>{props.children}</Styled.h2>
        }
        case 'h3': {
          return <Styled.h3 sx={{ color: 'inherit' }}>{props.children}</Styled.h3>
        }
        case 'large': {
          return (
            <Text variant='body.large' as='p'>
              {props.children}
            </Text>
          )
        }
        default:
          return <Styled.p sx={{ color: 'inherit' }}>{props.children}</Styled.p>
      }
    }
  }
}

export const BasicSectionBody = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)
