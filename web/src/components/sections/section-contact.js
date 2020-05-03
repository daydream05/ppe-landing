import React from 'react'
/** @jsx jsx */
import { jsx, Styled, Container, Text } from 'theme-ui'
import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { BasicSectionBody } from './basic-section-body'
import { breakpoints } from '../../gatsby-plugin-theme-ui/breakpoints'
import { TextBlockContainer } from '../text-block-container'

export const SectionContact = ({ section, ...rest }) => {
  const inputStyle = {
    px: 4,
    bg: 'lightGray',
    border: `2px solid`,
    borderColor: `lightGray`,
    minHeight: `96px`,
    fontSize: 2,
    color: `text`,
    display: `block`,
    width: `100%`,
    letterSpacing: `3px`,
    transition: `border-color .2s`,
    ':focus': {
      border: `2px solid`,
      borderColor: `primary`,
      outline: 0
    },
    '::placeholder': {
      color: 'text',
      textTransform: `uppercase`,
      opacity: 0.5
    }
  }

  const inputGroupStyle = {
    mb: 3
  }

  return (
    <Section variant={section?.theme} {...rest}>
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
            [mediaQueries.lg]: {
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`
            }
          }}
        >
          {section?.heading?.text && (
            <Styled.h2
              sx={{
                color: `inherit`,
                m: 0,
                mb: 4
              }}
            >
              <Text
                variant={`heading.${section?.heading?.size}`}
                sx={{
                  color: `inherit`,
                  m: 0,
                  textAlign: section?.heading?.textAlignment
                }}
              >
                {section?.heading?.text}
              </Text>
            </Styled.h2>
          )}
          <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div sx={{ ...inputGroupStyle }}>
              <input type="text" placeholder="Full name" sx={{ ...inputStyle }} />
            </div>
            <div sx={{ ...inputGroupStyle }}>
              <input type="text" placeholder="Email" sx={{ ...inputStyle }} />
            </div>
            <div sx={{ ...inputGroupStyle, position: `relative` }}>
              <textarea
                placeholder="Message"
                sx={{ ...inputStyle, py: 4, resize: `none` }}
                rows={8}
              />
              <button
                sx={{
                  position: `absolute`,
                  bottom: 3,
                  right: 3,
                  appearance: 'none',
                  display: 'block',
                  textAlign: 'center',
                  lineHeight: 'inherit',
                  textDecoration: 'none',
                  fontSize: 2,
                  fontWeight: 'bold',
                  px: 3,
                  py: 2,
                  color: 'white',
                  bg: 'primary',
                  minWidth: `128px`,
                  border: 0,
                  borderRadius: 4,
                  variant: `buttons.black`,
                  '~ button, ~ a': {
                    mt: `0 !important`
                  },
                  '~ p, ~ div': {
                    mt: 5
                  },
                  [mediaQueries.lg]: {
                    display: 'inline-block'
                  }
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </TextBlockContainer>
      </Container>
    </Section>
  )
}
