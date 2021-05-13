import React from 'react';
import {View, ScrollView} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

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
  //const navigation = useNavigation();
  return (
    <Container>
      <View>
        <TaskData>
          <Title>Austrália</Title>
          <Description
            numberOfLines={4}
            scrollEnabled
            editable={false}
            maxLength={40}
            multiline>
            To use the styled-components library in a React Native app, you must
            import the /native to access primitive components instead of
            importing them directly from React Native. Then, let’s replace the
            View and Text components from the react-native library. These new
            components are going to follow the custom semantics from
            styled-components. To use the styled-components library in a React
            Native app, you must import the /native to access primitive
            components instead of importing them directly from React Native.
            Then, let’s replace the View and Text components from the
            react-native library. These new components are going to follow the
            custom semantics from styled-components.
          </Description>
        </TaskData>
      </View>
      <ButtonsContainer>
        <DeleteBtn onPress={() => console.log('delete')}>
          <DelIcon />
        </DeleteBtn>
        <EditBtn onPress={() => console.log('edit')}>
          <EditIcon />
        </EditBtn>
      </ButtonsContainer>
    </Container>
  );
}

export default Task;
