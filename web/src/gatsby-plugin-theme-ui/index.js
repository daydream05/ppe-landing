import { future } from '@theme-ui/presets'
import merge from 'deepmerge'
import { breakpoints } from './breakpoints'

export const colors = {
  white: '#fff',
  black: '#0A0A0A',
  primary: '#2C7A7B',
  secondary: '#6B46C1',
  danger: '#C53030',
  modes: {
    dark: {
      white: '#0A0A0A',
      black: '#fff'
    }
  }
}

export const constants = {
  headerHeight: `90px`,
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
      color: 'black',
      bg: 'white'
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
      color: 'white',
      bg: 'black'
    },
    danger: {
      color: 'white',
      bg: 'danger'
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

console.log(baseTheme)

export default baseTheme
