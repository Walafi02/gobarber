import React from 'react';
// import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Title, List } from './styles';

import Background from '~/components/Background';
import Appointments from '~/components/Appointments';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointments data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={24} color={tintColor} />
  ),
};
