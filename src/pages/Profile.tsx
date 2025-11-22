import { useContext } from "react"
import { CardComponent, Header, StyledButton } from "@/components"
import AppThemeContext from "@/context/AppThemeContext"
AppThemeContext

export default function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          TROCAR PARA TEMA {themeContext?.appTheme === "light" ? "ESCURO" : "CLARO"}
        </StyledButton>
      </CardComponent>
    </>
  )
}