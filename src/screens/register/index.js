import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Input,
  Register,
  InputArea,
  Container,
  ButtonText,
  Back,
} from './styles';
import back from '../../assets/login.png';

function RegisterScreen() {
  const navigation = useNavigation();

  function handleCreateAccount() {
    navigation.navigate('Login');
  }
  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <Input placeholder="nickname" />
          <Input placeholder="email" />
          <Input secureTextEntry placeholder="senha" />
          <Register onPress={handleCreateAccount}>
            <ButtonText>Confirmar</ButtonText>
          </Register>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
