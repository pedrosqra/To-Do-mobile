import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;

export const TaskData = styled.TouchableOpacity`
  flex: 1;
  height: 90%;
  padding: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Description = styled.TextInput`
  overflow: scroll;
  max-width: 70%;
`;

export const ButtonsContainer = styled.View`
  width: 20%;
  padding: 5px;
`;

export const DeleteBtn = styled.TouchableOpacity`
  margin-left: auto;
  background-color: #a056c5;
  padding: 10px;
  height: 45%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-bottom: 5px;
`;

export const EditBtn = styled.TouchableOpacity`
  margin-left: auto;
  background-color: blue;
  padding: 10px;
  height: 45%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const DelIcon = styled(Icon).attrs({name: 'delete'})`
  font-size: 25px;
  color: white;
`;

export const EditIcon = styled(Icon).attrs({name: 'edit'})`
  font-size: 25px;
  color: white;
`;
