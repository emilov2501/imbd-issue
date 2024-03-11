import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home'
import MovieDetail from './pages/movie-detail'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const theme = createTheme({
  direction: 'rtl'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
)
