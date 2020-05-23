import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Figure from './figure'
import BlockText from '../block-text'
import { TextBlockContainer } from '../text-block-container'
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
          {cards.map(card => {
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
                <TextBlockContainer sx={{ height: `100%` }}>
                  <div
                    sx={{
                      display: `flex`,
                      flexDirection: `column`,
                      height: `100%`
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
                          maxWidth: `150px`,
                          height: `200px`,
                          mx: `auto`,
                          width: `100%`,
                          display: `flex`,
                          flexDirection: `column`,
                          justifyContent: `center`,
                          alignItems: `center`,
                          mb: 4
                        }}
                      >
                        <Figure
                          asset={card.image?.asset}
                          alt={card.image?.alt}
                          fluidOptions={{
                            maxWidth: 300
                          }}
                          sx={{
                            width: `100%`
                          }}
                        />
                      </div>
                    )}
                    {card.description && <BlockText blocks={card.description} sx={{ flex: 1 }} />}
                    {card.buttonGroup && (
                      <div
                        sx={{
                          width: `100%`
                        }}
                      >
                        <ButtonGroup
                          buttons={card.buttonGroup?.buttons}
                          position={card.buttonGroup?.position}
                          layout={card.buttonGroup?.layout}
                          sx={{
                            mt: 4
                          }}
                        />
                      </div>
                    )}
                  </div>
                </TextBlockContainer>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
