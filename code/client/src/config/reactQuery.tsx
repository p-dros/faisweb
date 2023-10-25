import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

interface Props {
  children: ReactNode
}

export default function QueryClientProvider({ children }: Props) {
  return <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
}
