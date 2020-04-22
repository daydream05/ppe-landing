import { future } from '@theme-ui/presets'
import merge from 'deepmerge'
import { breakpoints } from './breakpoints'
import { mediaQueries } from './media-queries'

export const colors = {
  white: '#fff',
  black: '#0A0A0A',
  accent: '#DBEDF3',
  danger: '#C53030',
  mute: '#F8F8F8',
  modes: {
    dark: {
      background: '#0A0A0A'
    }
  }
}

export const constants = {
  headerHeight: '90px'
}

const baseTheme = merge(future, {
  fonts: {
    body:
      'sofia-pro, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'sofia-pro, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
  },
  buttons: {
    white: {
      color: 'text',
      bg: 'background'
    },
    primary: {
      color: 'white',
      bg: 'primary'
    },
    secondary: {
      color: 'white',
      bg: 'secondary'
    },
    black: {
      color: 'background',
      bg: 'text'
    },
    danger: {
      color: 'white',
      bg: 'danger'
    }
  },
  layout: {
    container: {
      large: {
        maxWidth: breakpoints.xxxl
      },
      text: {
        maxWidth: breakpoints.lg,
        margin: '0 auto'
      }
    }
  },
  overlay: {
    dark: {
      background: 'black',
      opacity: '0.75'
    }
  },
  text: {
    heading: {
      normal: {
        fontSize: [5, 5, 5, 5, 6]
      },
      large: {
        fontWeight: '600',
        fontSize: [5, 5, 5, 5, 7]
      },
      small: {
        fontWeight: 'normal',
        fontSize: 1,
        textTransform: 'uppercase',
        letterSpacing: '4px'
      }
    },
    body: {
      large: {
        fontSize: 4,
        fontWeight: '600',
        [mediaQueries.lg]: {
          fontSize: 5
        }
      }
    }
  },
  section: {
    dark: {
      bg: 'text',
      color: 'background'
    },
    light: {
      bg: 'background',
      color: 'text'
    },
    pale: {
      bg: 'accent',
      color: 'black'
    }
  },
  styles: {
    root: {
      transition: 'color 0.2s ease-out, background 0.2s ease-out'
    }
  },
  colors,
  breakpoints,
  constants
})

export default baseTheme
