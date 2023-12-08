import '@fontsource-variable/plus-jakarta-sans'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import Button from './components/button'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    body: `'Plus Jakarta Sans Variable', 'serif'`,
  },
  components: {
    Button,
  },
})

export default theme
