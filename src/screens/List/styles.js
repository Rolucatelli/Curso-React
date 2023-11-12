import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerTitle = styled.View`
  margin-left: 40px;
`;

export const Title = styled.Text`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  color: #a6aeae;
  font-size: 10px;
  font-weight: 700;
`;

export const Line = styled.View`
  margin-top: 8px;
  width: 100%;
  height: 1px;
  background-color: #72bfe8;
`;

export const ContainerList = styled.View`
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
`;

export const ContainerCheckList = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid #a6aeae;
  border-radius: 4px;
  margin: 0px 16px 0px 16px;
`;

export const TextTask = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
`;

export const ContainerTask = styled.View`
    flex-direction: row;
    align-itens: flex-end;
    margin-top: auto;
    margin-bottom: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: #72bfe8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TextInputTask = styled.TextInput`
  width: 75%;
  height: 48px;
  color: #000000;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #000000;
  margin: 0px 16px 0px 16px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #d85963;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 10px;
  margin-left: auto;
`;
