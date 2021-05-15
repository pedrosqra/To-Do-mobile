import React from 'react';
import {Picker} from '@react-native-community/picker';
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
          <Input placeholder="titulo" />
          <Input placeholder="descrição (max. 40 caracteres)" />
          <Picker onValueChange={() => console.log('vish')}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>

          <Register onPress={handleCreateAccount}>
            <ButtonText>Atualizar</ButtonText>
          </Register>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
