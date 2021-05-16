import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import {
  Input,
  Register,
  InputArea,
  Container,
  ButtonText,
  Back,
  AddTaskImage,
  Priority,
  PriorityPicker,
  PriorityText,
  PriorityTitle,
} from './styles';
import back from '../../assets/login.png';
import update from '../../assets/update.png';

function RegisterScreen() {
  const navigation = useNavigation();
  const [checkedAlta, setCheckedAlta] = useState(false);
  const [checkedBaixa, setCheckedBaixa] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('baixa');

  async function handleCreateTask(e) {
    await definePriority();
    try {
      getData();
      async function getData() {
        const token = await AsyncStorage.getItem('token');
        const response = await api.post(
          '/task',
          {name, priority, description},
          {headers: {Auth: 'Bearer ' + token}},
        );
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function definePriority() {
    if (checkedAlta === true) {
      setPriority('alta');
    } else {
      setPriority('baixa');
    }
  }

  function handleSetPriorityAlta(e) {
    if (checkedBaixa === false) {
      setCheckedAlta(!checkedAlta);
    } else {
      setCheckedAlta(false);
    }
  }

  function handleSetPriorityBaixa(e) {
    if (checkedAlta === false) {
      setCheckedBaixa(!checkedBaixa);
    } else {
      setCheckedBaixa(false);
    }
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <AddTaskImage source={update} />
          <Input
            placeholder="título"
            value={name}
            onChangeText={n => setName(n)}
          />
          <Input
            placeholder="descrição (max. 40 caracteres)"
            value={description}
            onChangeText={d => setDescription(d)}
          />
          <Priority>
            <PriorityTitle>Prioridade: </PriorityTitle>

            <PriorityPicker>
              <PriorityText>Alta</PriorityText>
              <Checkbox
                placeholder="alta"
                status={checkedAlta ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSetPriorityAlta(!checkedAlta);
                }}
              />
            </PriorityPicker>
            <PriorityPicker>
              <PriorityText>Baixa</PriorityText>
              <Checkbox
                placeholder="alta"
                status={checkedBaixa ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSetPriorityBaixa(!checkedBaixa);
                }}
              />
            </PriorityPicker>
          </Priority>
          <Register onPress={handleCreateTask}>
            <ButtonText>Atualizar</ButtonText>
          </Register>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
