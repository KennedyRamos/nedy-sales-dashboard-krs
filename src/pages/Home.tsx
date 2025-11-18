import { Header, CardComponent, AvatarsList } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

export default function Home() {
  const mockListData = [
    {
      avatar:'./perfil.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.50),
    },
    {
      avatar:'./perfil.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2357.50),
    },
    {
      avatar:'./perfil.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(1643.0),
    }
  ]
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <CardComponent >
          <AvatarsList listData={mockListData}/>
        </CardComponent>
      </Container>
    </>
  )
}
