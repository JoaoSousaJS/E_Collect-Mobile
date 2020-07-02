import React from 'react';
import { ScrollView } from 'react-native';
import { Feather as Icon} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';


import { 
  Container, 
  BackButton, 
  WelcomeText, 
  DescriptionText,
  MapContainer,
  ViewMap,
  ItemsContainer,
  Item,
  ItemTitle,
  MapMarker,
  MarkerImage,
  MapMarkerContainer,
  MapMarkerTitle 
} from './styles';

const Points = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <>
      <Container>
        <BackButton onPress={handleNavigateBack}>
          <Icon 
          name="arrow-left" 
          size={20}
          color="#34cb79"
          />
        </BackButton>

        <WelcomeText>Welcome.</WelcomeText>
        <DescriptionText>Find a collection point on the map.</DescriptionText>

        <MapContainer>
          <ViewMap 
            initialRegion={{
              latitude: -34.9054429,
              longitude:138.5487406,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }} >
            <MapMarker 
              coordinate={{
                latitude: -34.9054429,
                longitude: 138.5487406,
              }}
              onPress={handleNavigateToDetail}
            >
              <MapMarkerContainer>
                <MarkerImage 
                  source={{
                    uri: 'https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
                  }}
                />
                <MapMarkerTitle>A random title</MapMarkerTitle>
              </MapMarkerContainer>
   
            </MapMarker>
          </ViewMap>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        >
          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>

          <Item onPress={() => {}}>
            <SvgUri width={42} height={42} uri="http://192.168.43.252:3333/uploads/lampadas.svg"/>
            <ItemTitle>Test</ItemTitle>
          </Item>
        </ScrollView>
        
      </ItemsContainer>

    </>
    )
}

export default Points;