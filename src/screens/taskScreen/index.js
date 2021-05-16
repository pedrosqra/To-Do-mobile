import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import {
  InputArea,
  Container,
  Back,
  TaskTitle,
  TaskDescription,
  ButtonsContainer,
  EditBtn,
  EditIcon,
  DeleteBtn,
  DelIcon,
} from './styles';
import back from '../../assets/login.png';

function RegisterScreen({route}) {
  const navigation = useNavigation();
  const {name, description, id} = route.params;

  async function handleDeleteTask() {
    try {
      Alert.alert('Confimar ação', 'Deseja deletar essa task?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => getData()},
      ]);
      async function getData() {
        const token = await AsyncStorage.getItem('token');
        await api.delete(`/task/${id}`, {
          headers: {
            Auth: 'Bearer ' + token,
          },
        });
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit() {
    navigation.navigate('Edit', {
      name: name,
      description: description,
      id: id,
    });
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <TaskTitle>{name}</TaskTitle>
          <TaskDescription multiline editable={false}>
            {description}
          </TaskDescription>
          <ButtonsContainer>
            <DeleteBtn onPress={() => handleDeleteTask(id)}>
              <DelIcon />
            </DeleteBtn>
            <EditBtn onPress={handleEdit}>
              <EditIcon />
            </EditBtn>
          </ButtonsContainer>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
