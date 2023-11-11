import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import data from '../../Data/data.json';
import {TaskNumber, SubTitle, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

const ListTasks = () => {
  const navigation = useNavigation();

  const renderTasksCounts = tasks => {
    const pendingTasks = tasks.filter(tasks => !tasks.lida).length;
    const completedTasks = tasks.filter(tasks => tasks.lida).length;

    return (
      <>
        <TaskNumber>{pendingTasks}</TaskNumber>
        <SubTitle>A fazer</SubTitle>
        <TaskNumber>{completedTasks}</TaskNumber>
        <SubTitle>Concluídas</SubTitle>
      </>
    );
  };

  const handlePress = item => {
    navigation.navigate('List', {listData: item});
  };

  return (
    <View>
      <FlatList
        horizontal
        data={data}
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListTasks;
