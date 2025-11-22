import { Box, Container, Grid } from "@mui/material";
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from "@/components";
import { pxToRem } from "@/utils";
import { login } from "@/api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { MessageProps } from "@/types";

export default function Login() {
  const [message, setMessage] = useState<MessageProps | null>(null);
  const navigate = useNavigate();

  async function handleLogin(data: { email: string; password: string }) {
    const { email, password } = data;

    const result = await login(email, password);

    if (result.error) {
      setMessage({ type: "error", msg: result.error });
      return;
    }

    localStorage.setItem("token", result.token);

    setMessage({ type: "success", msg: "Login realizado com sucesso!" });

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center", height: "100vh" }}
        >
          <Container maxWidth="sm">
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={100} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Bem-vindo</StyledH1>
              <StyledP>Digite sua senha e email para logar</StyledP>
            </Box>

            <FormComponent
              inputs={[
                { type: "email", placeholder: "Email", name: "email" },
                { type: "password", placeholder: "Senha", name: "password" },
              ]}
              buttons={[
                { className: "primary", type: "submit", children: "Entrar" },
              ]}
              message={message}
              onSubmit={handleLogin}
            />
          </Container>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  );
}
