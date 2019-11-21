import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import DateTimeInput from '~/components/DateTimeInput';

import { Container } from './styles';

export default function SelectDateTime() {
  return (
    <Background>
      <Container>
        <DateTimeInput />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
