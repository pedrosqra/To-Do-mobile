import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';

import {
  Input,
  Register,
  InputArea,
  Container,
  ButtonText,
  Back,
  EditImage,
  Priority,
  PriorityPicker,
  PriorityText,
  PriorityTitle,
} from './styles';
import back from '../../assets/login.png';
import newTask from '../../assets/newTask.png';

function RegisterScreen() {
  const [checkedAlta, setCheckedAlta] = useState(false);
  const [checkedBaixa, setCheckedBaixa] = useState(false);

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

  const navigation = useNavigation();

  function handleCreateAccount() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <EditImage source={newTask} />
          <Input placeholder="titulo" />
          <Input placeholder="descrição (max. 40 caracteres)" />
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
          <Register onPress={handleCreateAccount}>
            <ButtonText>Atualizar</ButtonText>
          </Register>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;