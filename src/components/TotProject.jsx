import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;
padding:1rem 3rem;
position: absolute;
width: 332px;
height: 467px;
left: 1081px;
top: 63px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
const Header=styled.h3`

padding:0rem .5rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 35px;
/* or 117% */

display: flex;
align-items: center;
text-transform: capitalize;

color: #FFFFFF;

`
const Count=styled.h3`

padding:0rem .5rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */

display: flex;
align-items: center;
text-transform: capitalize;

color: #C4B6FF;


`
const Value=styled.h3`


padding:0rem .5rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 200px;
line-height: 10px;
display: flex;
align-items: center;
text-transform: capitalize;
color: #FFFFFF;
`


const TotProject = () => {
    return (
        <CardContainer>
            <Header>Project Count</Header>
            <Count>Total Contribution</Count>
            <Value>15</Value>
        </CardContainer>
    )
}

export default TotProject
