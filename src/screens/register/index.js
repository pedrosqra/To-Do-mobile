import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Input,
  Register,
  InputArea,
  Container,
  ButtonText,
  Back,
  RegisterImage,
} from './styles';
import back from '../../assets/login.png';
import girlTask from '../../assets/girlTask.png';
import api from '../../services/api';
import {Alert} from 'react-native';

function RegisterScreen() {
  const navigation = useNavigation();
  const [nickname, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  async function handleRegister() {
    try {
      const response = await api.post('/register', {
        nickname,
        email,
        password,
      });
      navigation.navigate('Login');
    } catch (err) {
      Alert.alert(
        'Falha no Registro',
        'Não foi possível realizar o cadastro. Cheque os campos e tente novamente',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <RegisterImage source={girlTask} />
          <Input
            placeholder="nickname (min 8 caracteres)"
            placeholderTextColor="#fff"
            value={nickname}
            onChangeText={email => setNick(email)}
          />
          <Input
            placeholder="email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <Input
            secureTextEntry
            placeholder="senha (min 8 caracteres)"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={password => setPass(password)}
          />
          <Register onPress={handleRegister}>
            <ButtonText>Confirmar</ButtonText>
          </Register>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
