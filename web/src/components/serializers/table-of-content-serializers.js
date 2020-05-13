import React from 'react'
/** @jsx jsx */
import { jsx, Text, Styled } from 'theme-ui'
import { slugifyHeading } from '../../lib/helpers'

export const tableOfContentSerializers = {
  types: {
    block (props) {
      const { node } = props

      const slug = `${slugifyHeading(node.children[0].text)}-${node._key}`

      const anchorStyle = {
        textDecoration: 'none',
        color: 'inherit'
      }

      switch (node.style) {
        case 'h2': {
          return (
            <li sx={{ fontSize: 2, mb: 2 }}>
              <a href={`#${slug}`} sx={anchorStyle}>
                {props.children}
              </a>
            </li>
          )
        }
        case 'h3': {
          return (
            <li sx={{ fontSize: 2, mb: 2, pl: 3 }}>
              <a href={`#${slug}`} sx={anchorStyle}>
                {props.children}
              </a>
            </li>
          )
        }
        case 'h4': {
          return (
            <li sx={{ fontSize: 2, mb: 2, pl: 3 }}>
              <a href={`#${slug}`} sx={anchorStyle}>
                {props.children}
              </a>
            </li>
          )
        }
        default:
          return null
      }
    }
  },
  container: props => <ul sx={{ listStyle: 'none', padding: 0, m: 0 }}>{props.children}</ul>
}
