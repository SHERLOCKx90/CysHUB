import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;
position: absolute;
padding:1rem 3rem;
width: 332px;
height: 243px;
left: 1081px;
top: 546px;
background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
justify content:space-between;
`
const Header=styled.h3`


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 25px;
padding:0rem 0rem;
display: flex;
align-items: center;
text-transform: capitalize;
color: #C4B6FF;
`
const Value=styled.h1`


font-family: 'Poppins';
padding:0rem 0rem;
font-style: normal;
font-weight: 700;
font-size: 100px;
line-height: 50px;
display: flex;
align-items: center;
text-transform: capitalize;
color: #FFFFFF;

`

const TotEvents = () => {
    return (
        <CardContainer>
            <Header>Total events participated</Header>
            <Value>15</Value>
        </CardContainer>
    )
}

export default TotEvents
