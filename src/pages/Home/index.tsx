import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {Text, KeyboardAvoidingView, Platform, View} from 'react-native';
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
  ButtonText,
  Input
} from './styles';

const Home = () => {

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();


  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    });
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex:1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container 
      source={require('../../assets/home-background.png')}
      imageStyle={{ width: 274, height: 368}}
      >
        <Main>
          <LogoImage source={require('../../assets/logo.png')}/>
          <View>
            <Title>Your place to collect recyclable items</Title>
            <Description>We help people to find collection points efficiently</Description>
          </View>

        </Main>

        <Footer>
          <Input 
            placeholder='Select State'
            value={uf}
            onChangeText={setUf}
          />
          <Input 
            placeholder='Select City'
            value={city}
            onChangeText={setCity}
          
          />
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

    </KeyboardAvoidingView>
    
  )
}

export default Home;