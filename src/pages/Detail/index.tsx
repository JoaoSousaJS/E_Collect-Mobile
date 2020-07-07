import React, {useEffect, useState } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
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
import { SafeAreaView, Linking } from 'react-native';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';


interface Params {
  point_id: number;
}

interface Data {
  point: {
    image: string;
    name: string;
    email: string; 
    whatsapp: number;
    city: string;
    uf: string;
    image_url: string;
  }
  items: {
    title: string;
  }[]
}

const Detail = () => {
  const [data, setdata] = useState<Data>({} as Data);
  const navigation = useNavigation();
  
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`point/${routeParams.point_id}`)
    .then(response => {
      setdata(response.data);
    })
  }, [])

  

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: 'I would like to deposit my recyclabe waste',
      recipients: [data.point.email],


    })
  }

  function handleWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=I would like to deposity my recycable waste`);
  }

  if (!data.point) {
    return null;
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

          <PointImage source={{ uri: data.point.image_url}}/>
          <PointName>{data.point.name}</PointName>
          <PointItems>
            {data.items.map(item => item.title).join(', ')}
          </PointItems>
          <PointAddress>
            <PointAddressTitle>Address</PointAddressTitle>
            <PointAddressContent>{data.point.uf}, {data.point.city} </PointAddressContent>
          </PointAddress>

      </Container>
      <DetailsFooter>
        <DetailsButton onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#FFF" />
          <ButtonText>Whatsapp</ButtonText>
        </DetailsButton>
        <DetailsButton onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#FFF" />
          <ButtonText>E-mail</ButtonText>
        </DetailsButton>
      </DetailsFooter>

    </SafeAreaView>

    );
}

export default Detail;