import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@opengovsg/design-system-react'

import { AuthProvider } from '~features/auth'

import { AppRouter } from './AppRouter'

const queryClient = new QueryClient()

export const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
