import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const DataTable = ({ rows }) => {
  const tableDetailStyle = {
    borderBottom: '1px solid',
    borderColor: 'inherit',
    py: 2,
    pr: 4
  }

  const head = rows && rows.slice(0, 1)
  const body = rows && rows.slice(1)

  return (
    <table
      sx={{
        borderSpacing: 0,
        width: `100%`,
      }}
    >
      <thead>
        {head &&
          head.map(row => {
            return (
              <tr key={row._key}>
                {row.cells?.length > 0 &&
                  row.cells.map((cell, id) => {
                    return (
                      <td
                        key={`${row._key}-${id}`}
                        sx={{
                          ...tableDetailStyle,
                        }}
                      >
                        <Text as="p" sx={{ fontSize: 3, fontWeight: `bold` }}>
                          {cell}
                        </Text>
                      </td>
                    )
                  })}
              </tr>
            )
          })}
      </thead>
      <tbody>
        {body &&
          body.map(row => {
            return (
              <tr key={row._key}>
                {row.cells?.length > 0 &&
                  row.cells.map((cell, id) => {
                    return (
                      <td
                        key={`${row._key}-${id}`}
                        sx={{
                          ...tableDetailStyle,
                          border: `none`
                        }}
                      >
                        <Text as="p" sx={{ fontSize: 3 }}>
                          {cell}
                        </Text>
                      </td>
                    )
                  })}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
