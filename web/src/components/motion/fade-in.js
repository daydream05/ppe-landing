import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const FadeIn = ({ children, delay, ...rest }) => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 32 }
  }

  const [ref, inView, entry] = useInView({
    /* Optional options */
    rootMargin: '-25%',
    triggerOnce: true
  })

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 1, type: 'tween', delay: delay }}
      ref={ref}
      sx={{
        position: 'relative'
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
