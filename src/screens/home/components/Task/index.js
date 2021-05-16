import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, TaskData, Title, Description} from './styles';

function Task({task}) {
  const navigation = useNavigation();

  function handleFocusTask() {
    navigation.navigate('TaskScreen', {
      name: task.name,
      description: task.description,
      id: task._id,
    });
  }

  return (
    <Container onPress={handleFocusTask}>
      <View>
        <TaskData>
          <Title>{task.name}</Title>
          <Description numberOfLines={3} editable={false} multiline>
            {task.description}
          </Description>
        </TaskData>
      </View>
    </Container>
  );
}

export default Task;
