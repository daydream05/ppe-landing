import React from 'react'
import Figure from '../block-content/figure'
import Slideshow from '../block-content/slideshow'
/** @jsx jsx */
import { jsx, Text, Styled } from 'theme-ui'
import { TextColumn } from '../block-content/text-column'
import ButtonLink from '../button-link'
import { getPagePath } from '../../lib/helpers'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const customSerializers = {
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
    block(props) {
      const { node } = props
      const [size, heading] = node?.style?.split('.')

      switch (props.node.style) {
        case 'h2': {
          return <Styled.h2 sx={{ color: 'inherit' }}>{props.children}</Styled.h2>
        }
        case 'h3': {
          return <Styled.h3 sx={{ color: 'inherit' }}>{props.children}</Styled.h3>
        }
        case 'small.h2': {
          return (
            <Text
              as="h2"
              variant="heading.small"
              sx={{
                color: `inherit`,
                m: 0
              }}
            >
              {props.children}
            </Text>
          )
        }
        case 'large.h2': {
          return (
            <Text
              as="h2"
              variant="heading.large"
              sx={{
                color: `inherit`,
                m: 0
              }}
            >
              {props.children}
            </Text>
          )
        }
        case 'small.h3': {
          return (
            <Text
              as="h3"
              variant="heading.small"
              sx={{
                color: `inherit`,
                m: 0
              }}
            >
              {props.children}
            </Text>
          )
        }
        case 'large.h3': {
          return (
            <Text
              as="h3"
              variant="heading.large"
              sx={{
                color: `inherit`,
                m: 0
              }}
            >
              {props.children}
            </Text>
          )
        }
        case 'large': {
          return (
            <Text variant="body.large" as="p">
              {props.children}
            </Text>
          )
        }
        default:
          return (
            <Styled.p
              sx={{
                color: 'inherit',
                mt: 0
              }}
            >
              {props.children}
            </Styled.p>
          )
      }
    },
    figure(props) {
      return <Figure {...props.node} />
    },
    slideshow(props) {
      return <Slideshow {...props.node} />
    },
    textColumn(props) {
      return <TextColumn {...props.node} />
    },
    button(props) {
      const { node } = props

      const pagePath = getPagePath(node?.internalLink?._type, node?.internalLink?.slug)
      return (
        <ButtonLink
          variant={node?.color}
          shape={node?.variant}
          to={pagePath}
          sx={{
            mt: 4,
            mb: 3,
            [mediaQueries.lg]: {
              mr: 2,
            }
          }}
        >
          {node?.label}
        </ButtonLink>
      )
    }
  }
}
