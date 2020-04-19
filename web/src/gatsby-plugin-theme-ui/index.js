import { future } from '@theme-ui/presets'
import { merge } from 'lodash'

const colors = {
  white: '#fff',
  black: '#000',
  primary: '#2C7A7B',
  secondary: '#6B46C1',
  danger: '#C53030'
}

const baseTheme = merge(future, {
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
      bg: 'black',
    },
    danger: {
      color: 'white',
      bg: 'danger',
    }
  },
  colors
})

export default baseTheme
