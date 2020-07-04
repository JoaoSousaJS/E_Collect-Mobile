import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  padding-top: 70px;
`;

export const PointImage = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  color: #322153;
  font-size: 28px;
  font-family: Ubuntu_700Bold;
  margin-top: 24px;
`;

export const PointItems = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  color: #6C6C80;
`;

export const PointAddress = styled.View`
  margin-top: 32px;

`;

export const PointAddressTitle = styled.Text`
  color: #322153;
  font-family: Roboto_500Medium;
  font-size: 16px;
`;

export const PointAddressContent = styled.Text`
  color: #322153;
  font-family: Roboto_500Medium;
  font-size: 16px;
`;