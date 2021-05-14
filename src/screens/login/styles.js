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
  background-color: #b0e0e6;
  margin-top: -13%;
  margin-bottom: -13%;
`;

export const InputArea = styled.View`
  justify-content: center;
  align-items: center;  
  background: #008B8B;
  border-radius: 10px;
  height: 60%
  width: 90%;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 80%;
  margin-top: 10px;
  border-radius: 8px;
  padding: 18px;
`;

export const Login = styled.TouchableOpacity`
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
  color: #008b8b;
`;

export const Register = styled.TouchableOpacity`
  background-color: #fff;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  border-radius: 8px;
  padding: 20px;
`;
