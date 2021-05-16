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
  margin-top: -18%;
  margin-bottom: -18%;
`;

export const InputArea = styled.View`
  justify-content: center;
  align-items: center;  
  background: #cd266a;
  border-radius: 10px;
  height: 80%
  width: 90%;
  elevation: 6;
`;

export const Input = styled.TextInput`
  background-color: #a9a9a9;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 12px;
  color: white;
`;

export const Register = styled.TouchableOpacity`
  background-color: #6a5acd;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const RegisterImage = styled.Image`
  width: 80%;
  height: 43%;
`;
