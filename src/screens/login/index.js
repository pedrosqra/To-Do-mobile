import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Input,
  Login,
  Register,
  InputArea,
  Container,
  ButtonText,
  Back,
} from './styles';
import back from '../../assets/login.png';

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <Input placeholder="email" />
          <Input secureTextEntry placeholder="senha" />
          <Login>
            <ButtonText>Login</ButtonText>
          </Login>
        </InputArea>
        <Register>
          <ButtonText>Criar conta</ButtonText>
        </Register>
      </Back>
    </Container>
  );
}

export default Home;
