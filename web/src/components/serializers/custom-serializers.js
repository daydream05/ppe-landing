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
import { DataTable } from '../block-content/dataTable'

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
  list: props => <ul>{props.children}</ul>,
  types: {
    block(props) {
      const { node } = props

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
            <Text variant="body.large" as="p">
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
                },
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
    section(props) {
      console.log(props)
      return (
        <SectionSelector
          section={props.node}
          sx={{
            mx: -4,
            '+ p, + div': {
              mt: 6,
              mb: 3,
            },
            [mediaQueries.lg]: {
              ml: 'calc(-100vw / 2 + 900px / 2)',
              mr: 'calc(-100vw / 2 + 900px / 2)'
            }
          }}
        />
      )
    },
    slideshow(props) {
      return <Slideshow {...props.node} />
    },
    textColumn(props) {
      return (
        <TextColumn
          {...props.node}
          sx={{
            '+ section': {
              mt: 6,
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
            mb: 3,
            [mediaQueries.lg]: {
              mr: 2
            }
          }}
        >
          {node?.label}
        </ButtonLink>
      )
    },
    specsTable(props) {
      console.log(props.node)
      return (
        <SpecsTable rows={props.node?.table?.rows} />
      )
    },
    photoGallery(props) {
      return (
        <PhotoGallery
          photos={props.node?.photos}
          targetRowHeight={props.node?.targetRowHeight}
          margin={props.node?.margin}
          sx={{
            my: 5,
          }}
        />
      )
    },
    dataTable(props) {
      return (
        <DataTable rows={props.node?.table?.rows} />
      )
    }
  }
}
