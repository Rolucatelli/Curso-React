import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {TaskNumber, SubTitle, Title, ButtonDelete} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import CrossBlack from '../../assets/CrossBlack';

const ListTasks = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const list = useSelector(state => state.list.data);

  const renderTasksCounts = tasks => {
    const pendingTasks = tasks?.filter(tasks => !tasks.lida).length;
    const completedTasks = tasks?.filter(tasks => tasks.lida).length;

    return (
      <>
        <TaskNumber>{pendingTasks}</TaskNumber>
        <SubTitle>A fazer</SubTitle>
        <TaskNumber>{completedTasks}</TaskNumber>
        <SubTitle>Concluídas</SubTitle>
      </>
    );
  };

  const handlerDeleteList = id => {
    dispatch({
      type: 'LIST/setDataDeleteList',
      payload: {
        id: id,
      },
    });
  };

  const handlePress = item => {
    navigation.navigate('List', {listData: item});
  };

  return (
    <View>
      <FlatList
        horizontal
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: 150,
              height: 250,
              backgroundColor: item.color,
              margin: 10,
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={() => handlePress(item)}>
            <Title>{item.name}</Title>
            {renderTasksCounts(item.tasks)}
            <ButtonDelete onPress={() => handlerDeleteList(item.id)}>
              <CrossBlack />
            </ButtonDelete>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListTasks;
