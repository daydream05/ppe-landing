import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/** @jsx jsx */
import { jsx } from 'theme-ui'

export const FadeIn = ({ children, delay, ...rest }) => {
  const [elementLoaded, setElementLoaded] = useState(false)
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 32 }
  }

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  })

  useEffect(() => {
    // don't don anything if element has loaded before
    if (!elementLoaded) {
      if (inView) {
        setElementLoaded(true)
      }
    }
  }, [inView])

  return (
    <div
      {...rest}
    >
      <motion.div
        variants={variants}
        initial='hidden'
        animate={elementLoaded ? 'visible' : 'hidden'}
        transition={{ duration: 1.5, type: 'tween', delay: delay }}
        ref={ref}
        sx={{
          position: 'relative'
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
