import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  elevation: 10;
`;

export const TaskData = styled.View`
  flex: 1;
  height: 90%;
  padding: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #574660;
  font-size: 18px;
`;

export const Description = styled.TextInput`
  overflow: hidden;
  max-width: 100%;
  max-height: 90%;
  color: #575656;
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
