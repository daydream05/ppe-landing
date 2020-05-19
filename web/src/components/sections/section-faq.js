import React, { useState } from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoPlus } from 'react-icons/go'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@reach/accordion'
import '@reach/accordion/styles.css'

/** @jsx jsx */
import { jsx, Styled, Container, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'
import { TextBlockContainer } from '../text-block-container'
import { FadeIn } from '../motion/fade-in'
import { colors } from '../../gatsby-plugin-theme-ui'

export const SectionFAQ = ({ section, faqs, ...rest }) => {
  const [selectedItem, setSelectedItem] = useState(0)
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
          <Text
            sx={{
              color: `inherit`,
              m: 0,
              mb: 4
            }}
            as={'h2'}
          >
            Frequently asked questions
          </Text>
          {faqs?.length > 0 && (
            <Accordion
              sx={{
                display: `grid`,
                gridGap: 2
              }}
            >
              {faqs.map((faq, id) => {
                const isActive = id === selectedItem

                return (
                  <AccordionItem key={faq._key}>
                    <div>
                      <h3 sx={{ m: 0 }}>
                        <AccordionButton
                          sx={{
                            fontSize: 2,
                            fontWeight: 600,
                            width: `100%`,
                            py: 3,
                            px: 3,
                            border: `1px solid ${colors.grey}`,
                            borderRadius: `4px`,
                            cursor: `pointer`,
                            display: `flex`,
                            justifyContent: `space-between`,
                            backgroundColor: `white`,
                            textAlign: `left`,
                            position: `relative`
                          }}
                          onClick={() => setSelectedItem(id)}
                        >
                          <span>{faq.question}</span>
                          <motion.div
                            animate={isActive ? 'open' : 'closed'}
                            variants={{
                              open: { rotate: 45 },
                              closed: { rotate: 0 }
                            }}
                          >
                            <GoPlus sx={{ fontSize: 2 }} />
                          </motion.div>
                        </AccordionButton>
                      </h3>
                    </div>
                    <AnimatePresence>
                      <motion.div
                        variants={{
                          open: { height: 'auto' },
                          closed: { height: 0 }
                        }}
                        animate={isActive ? 'open' : 'closed'}
                        transition={{ type: 'spring', mass: 0.5, damping: 200 }}
                        exit={{ height: 0 }}
                      >
                        <AccordionPanel
                          sx={{
                            px: 3,
                            py: 3
                          }}
                        >
                          {faq.answer && (
                            <BaseBlockContent blocks={faq.answer} serializers={serializers} />
                          )}
                        </AccordionPanel>
                      </motion.div>
                    </AnimatePresence>
                  </AccordionItem>
                )
              })}
            </Accordion>
          )}
        </TextBlockContainer>
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

const serializers = {
  marks: {
    bold: (props) => <strong>{props.children}</strong>
  },
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <Styled.p sx={{ fontSize: [2, 2, 2, 2, 2] }}>{props.children}</Styled.p>
      }
    }
  }
}
