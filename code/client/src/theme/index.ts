// Supports weights 100-900
import '@fontsource-variable/noto-sans-tc'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    body: `'Noto Sans TC Variable', 'Times New Roman'`,
  },
})

export default theme
