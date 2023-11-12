import React, {useEffect, useState} from 'react';
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
  ButtonDelete,
  TextInputTask,
} from './styles';
import Plus from '../../assets/PlusWhite';
import {useSelector, useDispatch} from 'react-redux';

const List = ({route}) => {
  const dispatch = useDispatch();
  const {listData} = route.params;

  const user = useSelector(state => state.user.data.name);
  const list = useSelector(state => state.list.data);

  const [nameListTask, setNameListTask] = useState('');
  const [listTask, setListTask] = useState(
    list.find(item => item.id === listData.id),
  );

  const handlerCreateTask = (listId, taskId) => {
    if (nameListTask) {
      dispatch({
        type: 'LIST/setDataAddTask',
        payload: {
          id: listData.id,
          titleTask: nameListTask,
        },
      });
      setNameListTask('');
    }
  };

  const handlerMarkPress = (listId, taskId) => {
    dispatch({
      type: 'LIST/setDataMarkTask',
      payload: {
        id: listId,
        taskId: taskId,
      },
    });
  };

  const handlerDeleteTask = (listId, taskId) => {
    dispatch({
      type: 'LIST/setDataDeleteTask',
      payload: {
        id: listId,
        taskId: taskId,
      },
    });
  };

  useEffect(() => {
    setListTask(list.find(item => item.id === listData.id));
  }, [list]);

  return (
    <Container>
      <ContainerTitle>
        <Title>
          {user}'s List: {listTask.name}
        </Title>
        <SubTitle>
          {listTask.tasks.filter(task => task.lida).length} de{' '}
          {listTask.tasks.length} tarefas
        </SubTitle>
        <Line />
      </ContainerTitle>
      <FlatList
        data={listTask.tasks}
        renderItem={({item}) => (
          <ContainerList>
            <CheckBox
              value={item.lida}
              tintColors={{true: '#0fb', false: '#999'}}
              onValueChange={() => handlerMarkPress(listData.id, item.id)}
            />
            <TextTask>{item.titleTask}</TextTask>
            <ButtonDelete
              onPress={() => handlerDeleteTask(listData.id, item.id)}>
              <Plus />
            </ButtonDelete>
          </ContainerList>
        )}
      />
      <ContainerTask>
        <TextInputTask
          placeholder="Tarefa"
          placeholderTextColor={0x333333}
          onChangeText={text => setNameListTask(text)}
        />
        <Button onPress={text => handlerCreateTask(text)}>
          <Plus />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
