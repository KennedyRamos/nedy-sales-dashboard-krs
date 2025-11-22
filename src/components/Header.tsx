import { Avatar, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { Logo } from '@/components'
import styled from 'styled-components'
import { pxToRem } from '@/utils'


const StyledHeader = styled.header`
  background-color: ${(props => props.theme.appBackground)};
  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaltStroke};
  margin-bottom: ${pxToRem(37)};
  background-size: cover;
  width: 100%;
`

export default function Header() {
    return (
        <StyledHeader>
            <Container maxWidth='lg'>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: pxToRem(64),
                }}>
                    <Link to='/home'>
                        <Logo height={35} width={35}></Logo>
                    </Link>
                    
                    <Link to='/perfil'>
                        <Avatar alt='pefil' src='/perfil.svg' sx={{ width: pxToRem(45), height: pxToRem(45)}} />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}