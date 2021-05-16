import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 25px;
`;

export const Back = styled.ImageBackground`
  flex: 1;
  padding: 30px 0;
  background-color: #dcdcdc;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6a5acd;
  margin-top: -13%;
  margin-bottom: -13%;
`;

export const InputArea = styled.View`
  justify-content: space-between;
  align-items: center;  
  background: #cd266a;
  border-radius: 10px;
  padding: 5px;
  height: 80%
  width: 90%;
  elevation: 6;
`;

export const TaskTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffff;
`;

export const TaskDescription = styled.TextInput`
  font-size: 16px;
  width: 80%;
  font-weight: bold;
  color: #ffff;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 15%;
  padding: 5px;
`;

export const DeleteBtn = styled.TouchableOpacity`
  background-color: #a056c5;
  padding: 10px;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const EditBtn = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px;
  width: 20%;
  height: 100%;
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
