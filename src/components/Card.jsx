import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import image1 from './subs/love-2.png'
import image2 from './subs/love.png'

const CardContainer = styled.div`
color:white;
box-sizing: border-box;

position: absolute;
width: 429px;
height: 480px;
left: 682px;
top: 131px;

background: rgba(64, 59, 84, 0.5);
box-shadow: 0px 15px 20px 10px rgba(0, 0, 0, 0.3);
border-radius: 40px;
justify content:space-between;
`

const Header = styled.h1`

color: #fff;
font-size: 2rem;
padding:0rem 4rem;`

const Prof = styled.p`
font-weight: normal;
font-size: 1.5rem;
padding:0rem 4rem;
display:flex;
`
const Text = styled.p`
padding: 0rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
line-height: 2.5rem;
color:#C4B6FF;`
const Pro = styled.p`
font-weight: normal;
font-size: 1rem;
padding:0rem 4rem;
display:flex;
`
const Images = styled.div`
padding:0rem 4rem;
display: flex;
flex-direction: row;
justify-content: flex-start;
gap:20px;
`

const Button = styled.button`
border-radius:50px;
border:none;
padding-right: 20px;
padding-left: 20px;
background-color: #8B6DFF4D;
cursor:pointer;
color:white;
font-weight: bold;
padding-top: 5px;
padding-bottom: 5px;

`



const Card = () => {
  const [love, setLove] = useState(image1);
  const handleClick = () => {
   setLove(love ===   image1 ? image2 : image1);
  }
  return (
    <CardContainer>
      <Text>
        <Header>Cyscom Event Site Project</Header>
        <Prof>John Doe</Prof>
        <Pro>This is a project showcasing the events conducted by Cyscom,Vit chennai</Pro>
      </Text>
      <Images>
        <Button onClick={handleClick}>
          <img src={love} alt='toggle image'/>
          </Button>
        <Button><img src="../add.png" alt="" /></Button>
        <Button><img src="../download.png" alt="" /></Button>
      </Images>
    </CardContainer>
  )
}

export default Card



