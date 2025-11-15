import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, lightTheme, darkTheme } from "./styles"
import { Login, Registration, Home, Leads, Profile } from "./pages"

function App() {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <button onClick={toggleTheme} style={{ position: "absolute", top: 10, right: 10 }}>
        Trocar tema
      </button>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </Router>
    // </ThemeProvider>
  )
}

export default App
