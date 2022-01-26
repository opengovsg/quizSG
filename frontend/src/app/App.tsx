import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '~features/auth'

import { AppRouter } from './AppRouter'

const queryClient = new QueryClient()

export const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider resetCSS>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
)
