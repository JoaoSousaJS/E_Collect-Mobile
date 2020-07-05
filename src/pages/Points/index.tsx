import React, {useState, useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Feather as Icon} from '@expo/vector-icons'
import {useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import api from '../../services/api';
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
  MapMarkerTitle, 
  ItemSelected
} from './styles';



interface Item {
  id: number;
  image: string;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  image: string;
  name: string;
  latitude: number;
  longitude: number;
  items: {
    title:'';
  }[];
}
const Points = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadPosition() {

      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Ooops...', 'We need your permission to load the localization');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;



      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  },[])

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
  },[])

  useEffect(() => {
    api.get('point', {
      params: {
        city: 'Adelaide',
        uf: 'NT',
        items: [5]
      }
    }).then(response => {

    })
  },[])

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  function handleSelectItem (id: number) {

    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filteredItems);      
    } else {
      setSelectedItems([...selectedItems, id]);
    }

    
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
          { initialPosition[0] !== 0 && (
            <ViewMap 
            loadingEnabled={initialPosition[0] === 0}
            initialRegion={{
              latitude: initialPosition[0],
              longitude:initialPosition[1],
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
          )}
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        >

          {items.map(item => (
            <Item 
              key={String(item.id)} 
              onPress={() =>handleSelectItem(item.id)} 
              style={
                selectedItems.includes(item.id) ? ItemSelected.selectedItem: {}
              }
              activeOpacity = {0.6}
            >
              <SvgUri width={42} height={42} uri={item.image_url}/>
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
        
      </ItemsContainer>

    </>
    )
}




export default Points;