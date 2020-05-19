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
import { StepLine } from '../step-line'

export const SectionWithCards = ({ section, ...rest }) => {
  const { cards } = section

  console.log(cards)
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
                  textAlign: section?.heading?.textAlignment,
                  [mediaQueries.lg]: {
                    mb: 4
                  }
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
          <TextBlockContainer>
            <ul
              sx={{
                listStyle: `none`,
                padding: 0,
                margin: 0,
                display: `grid`,
                gridGap: 5,
                [mediaQueries.lg]: {
                  display: `flex`,
                  flexDirection: `column`,
                  mt: 5
                }
              }}
            >
              {cards.map((card, index) => {
                return (
                  <li
                    key={card._key}
                    sx={{
                      position: `relative`,
                      [mediaQueries.lg]: {
                        width: `50%`,
                        px: 3,
                        mb: 6,
                        ':nth-of-type(even)': {
                          alignSelf: `flex-end`
                        }
                      }
                    }}
                  >
                    <motion.div
                      sx={{
                        position: `relative`,
                        display: `flex`,
                        flexDirection: `column`
                      }}
                    >
                      {card.image && (
                        <FadeIn>
                          <img
                            src={card.image?.asset?.url}
                            alt={card.image?.alt}
                            sx={{
                              maxHeight: `128px`,
                              mb: 4,
                              [mediaQueries.lg]: {
                                maxHeight: `192px`
                              }
                            }}
                          />
                        </FadeIn>
                      )}
                      <FadeIn>
                        <Text
                          as={card.heading?.headingType || 'h3'}
                          sx={{
                            fontSize: 3,
                            color: `inherit`,
                            textAlign: card?.heading?.textAlignment || `left`,
                            mb: 2
                          }}
                        >
                          <span>{card.heading?.text}</span>
                        </Text>
                      </FadeIn>
                    </motion.div>
                    {card.description && <BlockCardDescription blocks={card.description} />}
                    {cards.length !== index + 1 && <StepLine index={index} />}
                  </li>
                )
              })}
            </ul>
          </TextBlockContainer>
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
