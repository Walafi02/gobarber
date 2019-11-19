import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointments() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
        />

        <Info>
          <Name>Walafi Ferreira</Name>
          <Time>em 2 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={24} color="#f65c75" />
      </TouchableOpacity>
    </Container>
  );
}
