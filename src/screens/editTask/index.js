import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Checkbox} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import {
  Input,
  Update,
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

function RegisterScreen({route}) {
  const [checkedAlta, setCheckedAlta] = useState(false);
  const [checkedBaixa, setCheckedBaixa] = useState(false);
  const {name, description, id} = route.params;
  const [title, setTitle] = useState(name);
  const [TaskDescription, setDescription] = useState(description);
  const [priority, setPriority] = useState('baixa');

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      console.log(title, TaskDescription);
      getData();
      async function getData() {
        const token = await AsyncStorage.getItem('token');
        const response = await api.put(
          `/task/${id}`,
          {
            name: title,
            description: TaskDescription,
            priority,
          },
          {
            headers: {
              Auth: 'Bearer ' + token,
            },
          },
        );
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
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

  const navigation = useNavigation();

  return (
    <Container>
      <Back source={back}>
        <InputArea>
          <EditImage source={newTask} />
          <Input
            placeholder="título"
            value={title}
            onChangeText={tit => setTitle(tit)}
          />
          <Input
            placeholder="descrição"
            value={TaskDescription}
            onChangeText={desc => setDescription(desc)}
          />
          <Priority>
            <PriorityTitle>Prioridade: </PriorityTitle>

            <PriorityPicker>
              <PriorityText>Alta</PriorityText>
              <Checkbox
                placeholder="alta"
                status={checkedAlta ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSetPriorityAlta(!checkedAlta), setPriority('alta');
                }}
              />
            </PriorityPicker>
            <PriorityPicker>
              <PriorityText>Baixa</PriorityText>
              <Checkbox
                placeholder="alta"
                status={checkedBaixa ? 'checked' : 'unchecked'}
                onPress={() => {
                  handleSetPriorityBaixa(!checkedBaixa), setPriority('baixa');
                }}
              />
            </PriorityPicker>
          </Priority>
          <Update onPress={handleUpdate}>
            <ButtonText>Atualizar</ButtonText>
          </Update>
        </InputArea>
      </Back>
    </Container>
  );
}

export default RegisterScreen;
