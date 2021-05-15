import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Input,
  Login,
  Register,
  InputArea,
  Container,
  ButtonTextLogin,
  ButtonTextRegister,
  Back,
  LoginImage,
} from './styles';
import back from '../../assets/login.png';
import tasksLife from '../../assets/loginScreen.png';

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
          <LoginImage source={tasksLife} />
          <Input placeholder="email" />
          <Input secureTextEntry placeholder="senha" />
          <Login onPress={handleLogin}>
            <ButtonTextLogin>Login</ButtonTextLogin>
          </Login>
        </InputArea>
        <Register onPress={handleCreateAccount}>
          <ButtonTextRegister>Criar conta</ButtonTextRegister>
        </Register>
      </Back>
    </Container>
  );
}

export default Home;
