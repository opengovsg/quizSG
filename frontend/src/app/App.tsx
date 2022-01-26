import { BrowserRouter } from 'react-router-dom'
// import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@opengovsg/design-system-react'

import { AuthProvider } from '~features/auth'

import { AppRouter } from './AppRouter'

export const App = (): JSX.Element => (
  <ThemeProvider>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </ThemeProvider>
)
