import React from 'react';
import {View, FlatList, Text} from 'react-native';
import data from '../../Data/data.json';
import {TaskNumber, SubTitle, Title} from './styles';

const ListTasks = () => {
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

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              width: 150,
              height: 250,
              backgroundColor: item.color,
              margin: 10,
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Title>{item.name}</Title>
            {renderTasksCounts(item.tasks)}
          </View>
        )}
      />
    </View>
  );
};

export default ListTasks;
