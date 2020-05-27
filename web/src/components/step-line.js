import * as React from 'react'
import { motion, useElementScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { colors } from '../gatsby-plugin-theme-ui'
import { mediaQueries } from '../gatsby-plugin-theme-ui/media-queries'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)'
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)'
  }
}

export const StepLine = ({ index }) => {
  const [elementLoaded, setElementLoaded] = React.useState(false)

  const [ref, inView, entry] = useInView({
    /* Optional options */
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    // don't don anything if element has loaded before
    if (!elementLoaded) {
      if (inView) {
        setElementLoaded(true)
      }
    }
  }, [inView])

  return (
    <div
      sx={{
        display: `none`,
        [mediaQueries.lg]: {
          display: `block`,
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      <motion.svg
        ref={ref}
        xmlns='http://www.w3.org/2000/svg'
        width='152'
        height='237'
        viewBox='0 0 152 237'
        transform={index % 2 !== 0 ? 'scale (-1, 1)' : null}
        transform-origin='center'
        sx={{
          fill: 'transparent',
          strokeWidth: 4,
          stroke: colors.text
        }}
      >
        <motion.path
          d='M2 0V199C2 212.255 12.7452 223 26 223H126M126 223V223C126 232.464 136.663 238.002 144.406 232.559L144.897 232.213C151.445 227.609 151.733 218.006 145.473 213.018V213.018C137.614 206.755 126 212.351 126 222.4V223ZM302 0V199C302 212.255 312.745 223 326 223H449.5M449.5 223V223C449.5 232.053 459.982 237.077 467.039 231.406L467.448 231.078C472.729 226.834 472.974 218.878 467.966 214.317V214.317C460.879 207.863 449.5 212.891 449.5 222.476V223Z'
          variants={icon}
          initial='hidden'
          animate={elementLoaded ? 'visible' : 'hidden'}
          sx={{
            fill: 'transparent'
          }}
          strokeDasharray='16 4'
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
      </motion.svg>
    </div>
  )
}
