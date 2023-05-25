import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 328px;
height: 726px;
left: 735px;
top: 63px;

background: rgba(64, 59, 84, 0.2);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
const Header = styled.h3`


font-family: 'Poppins';
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 45px;
/* identical to box height */

display: flex;
align-items: center;

color: #FFFFFF;
`
const Count = styled.h3`


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

const Div= styled.div`
box-sizing: border-box;

position: absolute;
width: 328px;
height: 100px;
background: blue;
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 20px;
`
const Des= styled.h3`


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
display: flex;
align-items: center;

color: #FFFFFF;
`

const MyCYSCOM = () => {
    return (
        <CardContainer>
            <Header>My CYSCOM</Header>
            <Count>Projects</Count>
            <Div>
                <Des>Ethical Hacking Project</Des>
            </Div>
           
            <Div>
                <Des>CYSCOM Event Site Project</Des>
            </Div>
           
            <Div>
                <Des>CYSCOM Timeline Updation</Des>
            </Div>
           
        </CardContainer>
    )
}

export default MyCYSCOM
