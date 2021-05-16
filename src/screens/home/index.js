import React, {useEffect, useState} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  List,
  Title,
  Add,
  AddIcon,
  AddText,
  TasksIcon,
  TitleContainer,
  FilterIcon,
  Filter,
  Buttons,
} from './styles';
import Task from './components/Task';
import api from '../../services/api';

function Home() {
  const navigation = useNavigation();
  const [userTasks, setUserTasks] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getData();
    async function getData() {
      const token = await AsyncStorage.getItem('token');
      api
        .get('/tasks', {
          headers: {
            Auth: 'Bearer ' + token,
          },
        })
        .then(response => {
          setUserTasks(response.data);
        });
    }
  }, [userTasks.length, isFocused]);

  function handleTasksSorted(e) {
    try {
      getData();
      async function getData() {
        const token = await AsyncStorage.getItem('token');
        api
          .get('/tasks/sorted', {
            headers: {
              Auth: 'Bearer ' + token,
            },
          })
          .then(response => {
            setUserTasks(response.data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCreateTask() {
    navigation.navigate('Add');
  }

  return (
    <Container>
      <TitleContainer>
        <TasksIcon />
        <Title>Suas Tarefas</Title>
      </TitleContainer>
      <List
        data={userTasks}
        renderItem={({item}) => <Task task={item} />}
        keyExtractor={item => item._id}
      />
      <Buttons>
        <Add onPress={handleCreateTask}>
          <AddIcon />
          <AddText>Adicionar</AddText>
        </Add>
        <Filter onPress={handleTasksSorted}>
          <FilterIcon />
        </Filter>
      </Buttons>
    </Container>
  );
}

export default Home;
