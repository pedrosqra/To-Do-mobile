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
  height: 55%
  width: 90%;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 80%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 18px;
`;

export const Picker = styled.Picker``;

export const Register = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #4169e1;
`;
