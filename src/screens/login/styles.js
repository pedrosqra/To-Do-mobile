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
  margin-top: -18%;
  margin-bottom: -18%;
`;

export const InputArea = styled.View`
  justify-content: center;
  align-items: center;  
  background: #008B8B;
  border-radius: 10px;
  height: 70%
  width: 90%;
  elevation: 6;
`;

export const Input = styled.TextInput`
  background-color: #a9a9a9;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 12px;
  color: #fff;
`;

export const Login = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  border-radius: 50px;
  padding: 15px;
`;

export const ButtonTextLogin = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #008b8b;
`;

export const ButtonTextRegister = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffff;
`;

export const Register = styled.TouchableOpacity`
  background-color: #66cdaa;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 9%;
  border-radius: 50px;
  padding: 18px;
  elevation: 50;
`;

export const LoginImage = styled.Image`
  width: 80%;
  height: 40%;
  margin-bottom: 4%;
`;
