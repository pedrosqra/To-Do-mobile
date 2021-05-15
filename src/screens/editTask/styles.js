import styled from 'styled-components/native';

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
  justify-content: center;
  align-items: center;  
  background: #cd266a;
  border-radius: 10px;
  height: 85%
  width: 90%;
  elevation: 6;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 12px;
`;

export const Register = styled.TouchableOpacity`
  background-color: #6a5acd;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffff;
`;

export const EditImage = styled.Image`
  width: 60%;
  height: 47%;
`;

export const Priority = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
`;

export const PriorityPicker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PriorityText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffff;
`;

export const PriorityTitle = styled.Text`
  font-size: 16px;
  margin-right: 5%;
  font-weight: bold;
  color: #ffff;
`;
