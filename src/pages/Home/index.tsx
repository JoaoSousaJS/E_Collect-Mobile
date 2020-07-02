import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container, 
  LogoImage, 
  Main, 
  Title, 
  Description,
  Footer,
  RegisterButton,
  ButtonIcon,
  ButtonText
} from './styles';

const Home = () => {

  const navigation = useNavigation();

  function handleNavigateToPoints() {
    navigation.navigate('Points');
  }

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

      <Footer>
        <RegisterButton onPress={handleNavigateToPoints}>
          <ButtonIcon>
            <Text>
             <Icon name="arrow-right" color="#FFF" size={24}/>
            </Text>
          </ButtonIcon>
          <ButtonText>
            Let's find a collection point
          </ButtonText>
        </RegisterButton>
      </Footer>
      
    </Container>
  )
}

export default Home;