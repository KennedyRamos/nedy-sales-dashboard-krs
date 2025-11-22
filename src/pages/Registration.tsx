import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  StyledUL,
  Logo,
} from '@/components'
import { pxToRem } from '@/utils'
import { register } from '@/api/users'
import type { RegisterData } from '@/types'

export default function Registration() {
  async function handleRegister(data: RegisterData) {
    try {
      const response = await register(data)
      console.log('Usuário cadastrado:', response)

      return response // Permite o FormComponent exibir "sucesso"
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      throw error // Permite o FormComponent exibir "erro"
    }
  }

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
        >
          <Container maxWidth="sm">
            <Box sx={{ marginBottom: pxToRem(24) }}>
              <Logo height={100} width={100} />
            </Box>

            <Box sx={{ marginBottom: pxToRem(24) }}>
              <StyledH1>Faça seu cadastro</StyledH1>
              <StyledP>Primeiro, diga-nos quem você é.</StyledP>
              <StyledUL>
                <li>Entre 8 e 16 caracteres;</li>
                <li>Pelo menos uma letra maiúscula;</li>
                <li>Pelo menos um caractere especial;</li>
                <li>Pelo menos um número</li>
              </StyledUL>
            </Box>

            <FormComponent<RegisterData>
              inputs={[
                { name: 'name', type: 'text', placeholder: 'Nome completo' },
                { name: 'email', type: 'email', placeholder: 'Email' },
                { name: 'password', type: 'password', placeholder: 'Senha' },
              ]}
              buttons={[
                {
                  className: 'primary',
                  type: 'submit',
                  children: 'Cadastrar',
                },
              ]}
              onSubmit={handleRegister}
            />
          </Container>
        </Grid>

        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Box>
  )
}
