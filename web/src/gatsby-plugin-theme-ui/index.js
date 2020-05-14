import { future } from '@theme-ui/presets'
import merge from 'deepmerge'
import { breakpoints } from './breakpoints'
import { mediaQueries } from './media-queries'

export const colors = {
  white: '#fff',
  black: '#0A0A0A',
  accent: '#DBEDF3',
  danger: '#C53030',
  mute: 'hsla(0, 0%, 13%, 0.2)',
  iceberg: '#DBEDF3',
  paragraphColor: '#0A0A0A',
  lightGray: '#F2F2F2',
  shadowGreen: 'hsla(172, 23%, 69%, 0.2)',
  grey: '#d2d2d2',
  primary: '#FFC001',
  modes: {
    dark: {
      background: '#0A0A0A',
      mute: 'hsla(0, 0%, 87%, 0.2)',
      paragraphColor: 'hsla(0, 0%, 100%, 0.8)',
      lightGray: '#2b2626',
      grey: '#2b2626',
      primary: '#FFC001'
    }
  }
}

export const constants = {
  headerHeight: '90px',
  footerHeight: '450px'
}

const baseTheme = merge(future, {
  lineHeights: {
    body: 1.625
  },
  buttons: {
    white: {
      color: 'text',
      bg: 'background'
    },
    primary: {
      color: 'black',
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
        maxWidth: '900px',
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
      color: 'background',
      p: {
        color: 'lightGray'
      }
    },
    light: {
      bg: 'transparent',
      color: 'text',
      p: {
        color: 'paragraphColor'
      }
    },
    pale: {
      bg: 'accent',
      color: 'black'
    },
    shadowGreen: {
      // this theme does not get affected by night mode
      background: `linear-gradient(${colors.shadowGreen}, ${colors.shadowGreen}), linear-gradient(${colors.white}, ${colors.white})`,
      color: 'black',
      p: {
        color: 'black'
      }
    }
  },
  header: {
    // we want them unaffected by night mode if specified other than default
    link: {
      default: {
        color: 'text',
        ':visited': {
          color: 'text'
        }
      },
      dark: {
        color: 'black',
        ':visited': {
          color: 'black'
        }
      },
      light: {
        color: 'white',
        ':visited': {
          color: 'white'
        }
      }
    }
  },
  footer: {
    dark: {
      bg: 'text',
      color: 'background'
    },
    light: {
      bg: 'background',
      color: 'text'
    },
    iceberg: {
      bg: 'iceberg',
      color: 'black'
    },
    primary: {
      bg: 'primary',
      color: 'black',
    }
  },
  styles: {
    root: {
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      li: {
        color: 'paragraphColor',
        fontSize: 3
      }
    },
    h1: {
      fontSize: 5,
      [mediaQueries.lg]: {
        fontSize: 6
      }
    },
    h2: {
      fontSize: 4,
      [mediaQueries.lg]: {
        fontSize: 5
      }
    },
    h3: {
      fontSize: 3,
      [mediaQueries.lg]: {
        fontSize: 4
      }
    },
    h4: {
      fontSize: 3,
      [mediaQueries.lg]: {
        fontSize: 4
      }
    },
    h5: {
      fontSize: 3,
      [mediaQueries.lg]: {
        fontSize: 4
      }
    },
    p: {
      color: 'paragraphColor',
      fontSize: 2,
      [mediaQueries.lg]: {
        fontSize: 3
      }
    },
    li: {
      fontSize: 3,
      [mediaQueries.lg]: {
        fontSize: 4
      }
    }
  },
  colors,
  breakpoints,
  constants
})

export default baseTheme
