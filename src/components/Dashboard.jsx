import React from 'react'
import TotEvents from './totevents'
import styled from 'styled-components'
import TotProject from './TotProject'
import MyCYSCOM from './MyCYSCOM'

const Container=styled.div`
display:grid;
gap:10px;
`

const Dashboard = () => {
  return (
    <Container>
    <MyCYSCOM/>
    <TotProject/>
    <TotEvents/>
    </Container>
  )
}

export default Dashboard
