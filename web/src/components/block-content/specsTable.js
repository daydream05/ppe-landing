import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'

import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const SpecsTable = ({ rows }) => {
  const tableDetailStyle = {
    borderBottom: '1px solid',
    borderColor: 'inherit',
    py: 2,
    pr: 4
  }

  return (
    <table
      sx={{
        borderSpacing: 0,
        mb: 5
      }}
    >
      <tbody>
        {rows &&
          rows.map(row => {
            return (
              <tr key={row._key}>
                {row.cells?.length > 0 &&
                  row.cells.map((cell, id) => {
                    return (
                      <td key={`${row._key}-${id}`} sx={tableDetailStyle}>
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
