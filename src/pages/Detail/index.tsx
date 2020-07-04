import React from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import {BackButton} from '../Points/styles'
import { 
  Container, 
  PointImage,
  PointName,
  PointItems,
  PointAddress,
  PointAddressTitle,
  PointAddressContent,
  DetailsFooter,
  DetailsButton,
  ButtonText
} from './styles';
import { SafeAreaView } from 'react-native';

const Detail = () => {

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
      <Container>
          <BackButton onPress={handleNavigateBack}>
            <Icon 
            name="arrow-left" 
            size={20}
            color="#34cb79"
            />
          </BackButton>

          <PointImage source={{ uri: 'https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'}}/>
          <PointName>Test Store</PointName>
          <PointItems>Lamapada, battery</PointItems>
          <PointAddress>
            <PointAddressTitle> Some address </PointAddressTitle>
            <PointAddressContent>South AUstralia</PointAddressContent>
          </PointAddress>

      </Container>
      <DetailsFooter>
        <DetailsButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <ButtonText>Whatsapp</ButtonText>
        </DetailsButton>
        <DetailsButton onPress={() => {}}>
          <Icon name="mail" size={20} color="#FFF" />
          <ButtonText>E-mail</ButtonText>
        </DetailsButton>
      </DetailsFooter>

    </SafeAreaView>

    );
}

export default Detail;