import React, {useState} from 'react';
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
import {Alert} from 'react-native';
import back from '../../assets/login.png';
import tasksLife from '../../assets/loginScreen.png';
import api from '../../services/api';
import Cookie from 'js-cookie';

function Home() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  Cookie.set('token', '');

  async function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await api.post('/login', {email, password});
      Cookie.set('token', response.data.token);
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
      Alert.alert(
        'Falha no Login',
        'Não foi possível realizar login. Cheque os campos e tente novamente',
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

  function handleCreateAccount() {
    navigation.navigate('Register');
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea onSubmit={handleLogin}>
          <LoginImage source={tasksLife} />
          <Input
            placeholder="email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <Input
            secureTextEntry
            placeholder="senha"
            value={password}
            onChangeText={password => setPass(password)}
          />
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
