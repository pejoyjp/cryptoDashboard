import { useState } from 'react'
//font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Box, Button, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import PrimaryAppBar from './components/PrimaryAppBar'
import appTheme, {palette} from './styles/theme'
import AppState from './state/appState';
import { useMemo } from 'react';
import DrawerCom from './components/DrawerCom';
import Feed from './components/Feed';
function App() {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode(pre=>pre==='light'?'dark':'light')
      }
    }),[]
  )

  const theme = createTheme({
    palette: { ...palette,mode:mode },
    ...appTheme
  })
 
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <CssBaseline />
          <PrimaryAppBar switchColorMode={colorMode.toggleMode} />
          <DrawerCom />
          <Feed />
        </Box>
      </AppState>
    </ThemeProvider>
    
  )
}

export default App
