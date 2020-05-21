import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Figure from './figure'
import BlockText from '../block-text'
import { ButtonGroup } from './button-group'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'

export const CardGrid = ({ cards }) => {
  return (
    <div
      sx={{
        borderBottom: `3px solid`,
        pb: 5
      }}
    >
      {cards?.length > 0 && (
        <ul
          sx={{
            listStyle: `none`,
            m: 0,
            p: 0,
            gridAutoColumns: `1fr`,
            gridAutoFlow: `column`,
            [mediaQueries.lg]: {
              display: `grid`
            }
          }}
        >
          {cards.map((card) => {
            return (
              <li
                key={card._key}
                sx={{
                  borderBottom: `1px solid lightGrey`,
                  py: 4,
                  [mediaQueries.lg]: {
                    borderRight: `1px solid lightGrey`,
                    borderTop: `1px solid lightGrey`,
                    px: 3,
                    ':first-of-type': {
                      borderLeft: `1px solid lightGrey`
                    }
                  }
                }}
              >
                <div
                  sx={{
                    display: `flex`,
                    flexDirection: `column`,
                    height: `100%`,
                  }}
                >
                  <Text
                    as={card.heading?.title || 'h3'}
                    sx={{ textAlign: `center`, mb: 5, lineHeight: 1 }}
                  >
                    {card.heading?.text}
                  </Text>
                  {card.image && (
                    <div
                      sx={{
                        maxWidth: `256px`,
                        mx: `auto`,
                        width: `100%`,
                        mb: 4
                      }}
                    >
                      <Figure
                        asset={card.image?.asset}
                        alt={card.image?.alt}
                        fluidOptions={{
                          maxWidth: 300
                        }}
                      />
                    </div>
                  )}
                  {card.description && <BlockText blocks={card.description} sx={{ flex: 1 }} />}
                  {card.buttonGroup && (
                    <ButtonGroup
                      buttons={card.buttonGroup?.buttons}
                      position={card.buttonGroup?.position}
                      layout={card.buttonGroup?.layout}
                      sx={{
                        mt: 4
                      }}
                    />
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
