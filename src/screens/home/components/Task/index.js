import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TaskData,
  Title,
  Description,
  DeleteBtn,
  ButtonsContainer,
  EditBtn,
  DelIcon,
  EditIcon,
} from './styles';

function Task({task}) {
  const navigation = useNavigation();
  function handleEdit() {
    navigation.navigate('Edit');
  }
  return (
    <Container>
      <View>
        <TaskData>
          <Title>Taskzinha</Title>
          <Description
            numberOfLines={4}
            scrollEnabled
            editable={false}
            maxLength={40}
            multiline>
            Pegar o carro e explodir depis cantar good 4 u
          </Description>
        </TaskData>
      </View>
      <ButtonsContainer>
        <DeleteBtn onPress={() => console.log('delete')}>
          <DelIcon />
        </DeleteBtn>
        <EditBtn onPress={handleEdit}>
          <EditIcon />
        </EditBtn>
      </ButtonsContainer>
    </Container>
  );
}

export default Task;
