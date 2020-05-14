import React from 'react'
import { IoMdQuote } from 'react-icons/io'
import Figure from '../block-content/figure'
import Slideshow from '../block-content/slideshow'
/** @jsx jsx */
import { jsx, Text, Styled } from 'theme-ui'
import { TextColumn } from '../block-content/text-column'
import ButtonLink from '../button-link'
import { getPagePath } from '../../lib/helpers'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { SectionSelector } from '../sections/section-selector'
import { SpecsTable } from '../block-content/specsTable'
import { PhotoGallery } from '../block-content/photo-gallery'
import { ButtonGroup } from '../block-content/button-group'

export const heroSerializers = {
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
  list: props => <ul>{props.children}</ul>,
  types: {
    block(props) {
      const { node } = props

      switch (props.node.style) {
        case 'h1': {
          return (
            <Styled.h1
              sx={{
                color: 'inherit',
                mt: 0,
                mb: 3,
                fontWeight: `bold`,
                [mediaQueries.lg]: {
                  fontSize: 6
                }
              }}
            >
              {props.children}
            </Styled.h1>
          )
        }
        case 'h2': {
          return <Styled.h2 sx={{ color: 'inherit' }}>{props.children}</Styled.h2>
        }
        case 'h3': {
          return <Styled.h3 sx={{ color: 'inherit' }}>{props.children}</Styled.h3>
        }
        case 'small.h1': {
          return (
            <Text
              as="h1"
              variant="heading.small"
              sx={{
                color: 'inherit',
                mb: 4,
                mt: 0
              }}
            >
              {props.children}
            </Text>
          )
        }
        case 'small.h2': {
          return (
            <Text
              as="h2"
              variant="heading.small"
              sx={{
                color: 'inherit',
                mb: 4,
                mt: 5
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
            <Text variant="body.large" as="p" sx={{ mb: 3, '&&&': { color: 'text' } }}>
              {props.children}
            </Text>
          )
        }
        case 'blockquote': {
          return (
            <blockquote
              sx={{
                position: `relative`,
                my: 6,
                mx: 3
              }}
            >
              <IoMdQuote
                sx={{
                  variant: `body.large`,
                  opacity: 0.15,
                  fontSize: 7,
                  position: `absolute`,
                  top: -3,
                  left: -3,
                  [mediaQueries.lg]: {
                    fontSize: `128px`,
                    top: -4,
                    left: -5
                  }
                }}
              />
              <Text
                variant="body.large"
                as="p"
                sx={{
                  display: `inline`,
                  '&&&': {
                    color: `text`
                  }
                }}
              >
                {props.children}
              </Text>
            </blockquote>
          )
        }
        default:
          return (
            <Styled.p
              sx={{
                mt: 0,
                mb: 3,
                '+ section': {
                  mt: 6
                }
              }}
            >
              {props.children}
            </Styled.p>
          )
      }
    },
    figure(props) {
      return (
        <Figure
          {...props.node}
          sx={{
            ':first-child': {
              mt: -6
            },
            ':last-child': {
              mb: 0
            }
          }}
        />
      )
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
            mb: 2,
            [mediaQueries.lg]: {
              mr: 2
            }
          }}
        >
          {node?.label}
        </ButtonLink>
      )
    },
    buttonGroup(props) {
      const { node } = props
      return (
        <ButtonGroup
          buttons={node.buttons}
          position={node.position}
          layout={node.layout}
          sx={{
            mt: 4,
          }}
        />
      )
    }
  }
}
