import { Header, CardComponent } from '@/components'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <CardComponent >
          CARD
        </CardComponent>
      </Container>
    </>
  )
}
