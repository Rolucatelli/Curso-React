import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Home({navigation}) {
  const dispatch = useDispatch();
  const [nameApp, setNameApp] = useState('');

  const user = useSelector(state => state.user.data.name);

  const handlerButton = () => {
    if (nameApp) {
      dispatch({type: 'USER/setDataUser', payload: nameApp});
      navigation.navigate('HomePage');
    }
  };

  useEffect(() => {
    if (user) {
      navigation.navigate('HomePage');
    }
  }, [user]);

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
            color: '#000000',
          }}
          placeholder="Nome"
          placeholderTextColor={0x333333}
          onChangeText={text => setNameApp(text)}
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
            handlerButton();
          }}>
          <Text style={{color: '#ffffff', fontSize: 24}}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
