import * as React from 'react';
import {
  Container,
  Title,
  Button,
  TextButton,
  ContainerTitle,
  ContainerButton,
  SubTitle,
  Line,
  ContainerText,
} from './styles';
import Plus from "../../assets/Plus.svg";

const HomePage = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Line />
        <ContainerText>
          <Title>$NOME </Title>
          <SubTitle>List</SubTitle>
        </ContainerText>
        <Line />
      </ContainerTitle>
      <ContainerButton>
        <Button
          onPress={() => {
            navigation.navigate('List');
          }}
        >
            <Plus />
        </Button>
        <TextButton>Adicionar a lista</TextButton>
      </ContainerButton>
    </Container>
  );
};

export default HomePage;