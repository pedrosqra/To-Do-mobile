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

  function handleCreateAccount() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <Input placeholder="email" />
          <Input secureTextEntry placeholder="senha" />
          <Login onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </Login>
        </InputArea>
        <Register onPress={handleCreateAccount}>
          <ButtonText>Criar conta</ButtonText>
        </Register>
      </Back>
    </Container>
  );
}

export default Home;
