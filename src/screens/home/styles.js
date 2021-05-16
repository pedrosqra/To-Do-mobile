import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 0;
  background-color: #f5e4f5;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {padding: 20},
  ListFooterComponentStyle: {marginTop: 10},
})`
  height: 100%;
  bottom: -4%;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #383737;
  font-weight: bold;
`;

export const Add = styled.TouchableOpacity`
  flex-direction: row;
  height: 55px;
  width: 40%;
  padding: 8px;
  border-radius: 25px;
  background-color: #a056c5;
  justify-content: space-evenly;
  align-items: center;
  elevation: 25;
`;

export const AddText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const AddIcon = styled(AntIcon).attrs({name: 'plus'})`
  font-size: 25px;
  color: white;
`;

export const TasksIcon = styled(FA5Icon).attrs({name: 'tasks'})`
  font-size: 35px;
  color: #383737;
`;

export const Filter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 15%;
  padding: 8px;
  border-radius: 25px;
  background-color: #a056c5;
  elevation: 25;
`;

export const FilterIcon = styled(AntIcon).attrs({name: 'filter'})`
  font-size: 35px;
  color: #ffff;
  padding: 2px;
`;

export const Buttons = styled.View`
  position: absolute;
  bottom: 4%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
