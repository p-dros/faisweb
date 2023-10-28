import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'

import theme from '@/config/theme'
import router from '@/config/routerManager'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './config/queryClient'

import { ReactQueryDevtools } from 'react-query/devtools'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
