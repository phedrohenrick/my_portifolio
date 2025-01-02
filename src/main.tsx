import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import './lib/i18n.ts'

createRoot(document.getElementById('root')!).render(
  
     //tudo dentro do app consegue pegar a cor do thema
 <StrictMode>
  
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <App />
    </ThemeProvider>
  
  </StrictMode>,
)
