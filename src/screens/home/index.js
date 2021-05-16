import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
import Cookie from 'js-cookie';
import api from '../../services/api';

function Home() {
  const navigation = useNavigation();
  const [userTasks, setUserTasks] = useState([]);
  const token = '';

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
    console.log(token);
  }, [userTasks.length, token]);

  function handleTasksSorted(e) {
    e.preventDefault();

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

  async function handleDeleteTask(id) {
    try {
      await api.delete(`/task/${id}`, {
        headers: {
          Auth: 'Bearer ' + token,
        },
      });
      setUserTasks(userTasks.filter(task => task._id !== id));
    } catch (error) {
      alert('Erro ao deletar tarefa.');
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
