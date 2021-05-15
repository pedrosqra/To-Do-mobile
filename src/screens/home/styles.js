import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 0;
  background-color: #dcdcdc;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {padding: 20},
  ListFooterComponentStyle: {marginTop: 10},
})`
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  padding: 25px;
`;

export const Add = styled.TouchableOpacity`
  position: absolute;
  background: red;
  bottom: 5%;
  flex-direction: row;
  height: 55px;
  width: 40%;
  padding: 8px;
  align-self: flex-start;
  margin-left: 10%;
  border-radius: 25px;
  background-color: #a056c5;
  justify-content: space-evenly;
  align-items: center;
`;

export const AddText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const AddIcon = styled(AntIcon).attrs({name: 'plus'})`
  font-size: 35px;
  color: white;
`;
