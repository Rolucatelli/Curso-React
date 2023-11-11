import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/HomePage/index';
import List from './screens/List/index';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#72bfe8',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#FFFFFF', fontSize: 32, fontWeight: 'bold'}}>
        Escreva Seu Nome:
      </Text>
      <View style={{width: '70%'}}>
        <TextInput
          style={{
            borderRadius: 8,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 18,
          }}
          placeholder="Nome"
        />
        <TouchableOpacity
          style={{
            height: 47,
            borderRadius: 8,
            backgroundColor: '#96D897',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 18,
          }}
          onPress={() => {
            navigation.navigate('HomePage');
          }}>
          <Text style={{color: '#ffffff', fontSize: 24}}>Criar!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
