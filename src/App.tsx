import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/navbar'
import DeadByDaylightPage from './pages/dbd'
import HomePage from './pages/home'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dbd" element={<DeadByDaylightPage />}></Route>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
