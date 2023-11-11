import * as React from 'react';
import {
  Container,
  Title,
  Button,
  SubTitle,
  ContainerTitle,
  ContainerList,
  ContainerTask,
  Line,
  TextTask,
  ContainerCheckList,
  TextInputTask,
} from './styles';
import Plus from "../../assets/PlusWhite";

const List = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>$NOME List Segunda</Title>
        <SubTitle>%d de %d tarefas</SubTitle>
        <Line />
      </ContainerTitle>
      <ContainerList>
        <ContainerCheckList />
        <TextTask>Curso React Native</TextTask>
      </ContainerList>
      <ContainerList>
        <ContainerCheckList />
        <TextTask>Curso React Native</TextTask>
      </ContainerList>

      <ContainerTask>
        <TextInputTask placeholder='Tarefa' placeholderTextColor={0x333333}/>
        <Button><Plus/></Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
