import React from 'react'
import { motion } from 'framer-motion'

/** @jsx jsx */
import { jsx, Container, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { BasicSectionBody } from './basic-section-body'
import { TextBlockContainer } from '../text-block-container'
import { FadeIn } from '../motion/fade-in'
import { BlockCardDescription } from '../serializers/card-serializers'

export const SectionWithCards = ({ section, ...rest }) => {
  const { cards } = section
  return (
    <Section sx={{ position: `relative` }} variant={section?.theme} {...rest}>
      <Container
        variant="container.large"
        sx={{
          px: 4,
          py: 5,
          margin: `0 auto`,
          [mediaQueries.xl]: {
            px: 6,
            py: 6
          },
          [mediaQueries.xxl]: {
            px: 7,
            py: 6
          }
        }}
      >
        <TextBlockContainer
          sx={{
            position: `relative`,
            zIndex: 1
          }}
        >
          {section?.heading?.text && (
            <FadeIn>
              <Text
                variant={`heading.${section?.heading?.size}`}
                sx={{
                  color: `inherit`,
                  m: 0,
                  mb: 4,
                  textAlign: section?.heading?.textAlignment
                }}
                as={section?.heading?.headingType || 'h2'}
              >
                {section?.heading?.text}
              </Text>
            </FadeIn>
          )}
          {section?.body && <BasicSectionBody blocks={section?.body} />}
        </TextBlockContainer>
        {cards?.length > 0 && (
          <ul
            sx={{
              listStyle: `none`,
              padding: 0,
              margin: 0,
              display: `grid`,
              gridGap: 5,
              [mediaQueries.lg]: {
                display: `flex`,
                flexFlow: `wrap`
              }
            }}
          >
            {cards.map((card, index) => {
              return (
                <li
                  key={card._key}
                  sx={{
                    [mediaQueries.lg]: {
                      width: `25%`,
                      px: 3
                    }
                  }}
                >
                  <div
                    sx={{
                      position: `relative`
                    }}
                  >
                    <Text
                      as={card.heading?.headingType || 'h3'}
                      sx={{
                        fontSize: 2,
                        color: `inherit`,
                        textAlign: card?.heading?.textAlignment || `left`,
                        mb: 3
                      }}
                    >
                      <span>{card.heading?.text}</span>
                    </Text>
                  </div>
                  {card.description && <BlockCardDescription blocks={card.description} />}
                </li>
              )
            })}
          </ul>
        )}
        {section?.divider && (
          <div
            sx={{
              variant: `section.${section.theme}`,
              position: `absolute`,
              top: `0`,
              bottom: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              transform: `skewY(7deg)`,
              transformOrigin: `top right`
            }}
          />
        )}
      </Container>
    </Section>
  )
}
