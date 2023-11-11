import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
import Plus from '../../assets/PlusWhite';

const List = ({route}) => {
  const {listData} = route.params;

  const [checkBox, setCheckBox] = useState(false);

  return (
    <Container>
      <ContainerTitle>
        <Title>$NOME List Segunda</Title>
        <SubTitle>{listData.tasks.filter((tasks) => tasks.lida).length} de {listData.tasks.length} tarefas</SubTitle>
        <Line />
      </ContainerTitle>
      <FlatList
        data={listData.tasks}
        renderItem={({item}) => (
          <ContainerList>
            <CheckBox value={item.lida} onValueChange={setCheckBox} />
            <TextTask>{item.titleTask}</TextTask>
          </ContainerList>
        )}
      />
      <ContainerTask>
        <TextInputTask placeholder="Tarefa" placeholderTextColor={0x333333} />
        <Button>
          <Plus />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
