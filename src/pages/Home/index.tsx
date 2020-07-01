import React from 'react';

import {
  Container, 
  LogoImage, 
  Main, 
  Title, 
  Description
} from './styles';

const Home = () => {
  return (
    <Container 
    source={require('../../assets/home-background.png')}
    imageStyle={{ width: 274, height: 368}}
    >
      <Main>
        <LogoImage source={require('../../assets/logo.png')}/>
        <Title>Your place to collect recyclable items</Title>
        <Description>We help people to find collection points efficiently</Description>
      </Main>
      
    </Container>
  )
}

export default Home;