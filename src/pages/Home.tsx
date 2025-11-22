import {
  Header,
  CardComponent,
  AvatarsList,
  CustomTable,
  CustomChart,
} from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

export default function Home() {
  const mockListData = [
    {
      avatar: './perfil.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.5),
    },
    {
      avatar: './perfil.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2357.5),
    },
    {
      avatar: './perfil.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(1643.0),
    },
  ]

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span key="n1">Nome 1</span>,
        <span key="e1">nome1@email.com</span>,
        <button key="a1">ACTION</button>,
      ],
      [
        <span key="n2">Nome 2</span>,
        <span key="e2">nome2@email.com</span>,
        <button key="a2">ACTION</button>,
      ],
      [
        <span key="n3">Nome 3</span>,
        <span key="e3">nome3@email.com</span>,
        <button key="a3">ACTION</button>,
      ],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>

        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>

        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']}
            data={[1000.12, 2456.45, 1724, 1455.75, 2008.98, 987]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  )
}
