import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #000000;
  font-size: 28px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  
`;

export const ContainerTitle = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 55px;
`;

export const SubTitle = styled.Text`
  color: #72bfe8;
  font-size: 28px;
  font-weight: 400;
`;

export const Line = styled.View`
  width: 71px;
  height: 1px;
  background-color: #a6aeae;
`;

export const ContainerButton = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid #72bfe8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 7px;
`;

export const TextButton = styled.Text`
  color: #72bfe8;
  font-size: 10px;
`;