import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, Styled, Container, Text } from 'theme-ui'

import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import { mediaQueries } from '../../gatsby-plugin-theme-ui/media-queries'
import { Section } from './section'
import { TextBlockContainer } from '../text-block-container'
import { BasicSectionBody } from './basic-section-body'

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

export const SectionContact = ({ section, ...rest }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, subject, message })
    })
      .then(handleSuccess)
      .catch(error => alert(error))
  }

  const handleSuccess = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setShowModal(true)
  }

  console.log(name)

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
            display: `grid`,
            gridGap: 4,
            [mediaQueries.lg]: {
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`
            }
          }}
        >
          <div
            sx={{
              [mediaQueries.lg]: {
                mt: 5
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
            {section?.body && (
              <BasicSectionBody
                blocks={section?.body}
                enableAnimation={section?.settings?.animate}
              />
            )}
          </div>

          <form
            name="contact"
            onSubmit={handleSubmit}
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <div sx={{ ...inputGroupStyle }}>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                id="name"
                aria-label="Full name"
                value={name}
                sx={{ ...inputStyle }}
                onChange={e => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div sx={{ ...inputGroupStyle }}>
              <input
                type="email"
                name="email"
                id="email"
                aria-label="Email"
                placeholder="Email"
                value={email}
                required
                sx={{ ...inputStyle }}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div sx={{ ...inputGroupStyle }}>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                aria-label="Subject"
                value={subject}
                sx={{ ...inputStyle }}
                onChange={e => {
                  setSubject(e.target.value)
                }}
              />
            </div>
            <div sx={{ ...inputGroupStyle, position: `relative` }}>
              <textarea
                value={message}
                name="message"
                id="message"
                placeholder="Message"
                aria-label="Message"
                sx={{ ...inputStyle, py: 4, resize: `none`, fontFamily: 'body' }}
                rows={8}
                onChange={e => {
                  setMessage(e.target.value)
                }}
              />
              <input
                name="submit"
                type="submit"
                value="Submit"
                aria-label="Submit"
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
                  [mediaQueries.lg]: {
                    display: 'inline-block'
                  }
                }}
              />
            </div>
          </form>
          <DialogOverlay
            isOpen={showModal}
            onDismiss={() => setShowModal(false)}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <DialogContent aria-label="success message" sx={{ bg: 'lightGray' }}> 
              <Styled.p
                sx={{
                  marginBottom: 4,
                  fontSize: 3,
                  color: 'text',
                }}
              >
                Thanks for reaching out! We'll get back to you as soon as possibble.
              </Styled.p>
              <button
                sx={{
                  variant: 'buttons.black',
                  px: 3,
                  py: 2,
                  fontSize: 2,
                  fontWeight: 'bold',
                  border: 0
                }}
                onClick={() => setShowModal(false)}
              >
                Got it
              </button>
            </DialogContent>
          </DialogOverlay>
        </TextBlockContainer>
      </Container>
    </Section>
  )
}
