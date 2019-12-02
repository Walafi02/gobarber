import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import {
  Container,
  Title,
  List,
  EmptyAppointmentsView,
  EmptyAppointmentsText,
} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointments from '~/components/Appointments';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointment');
    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointment/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  function refreshList() {
    loadAppointments();
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        {appointments.length === 0 ? (
          <EmptyAppointmentsView>
            <EmptyAppointmentsText>Sem Agendamentos</EmptyAppointmentsText>
          </EmptyAppointmentsView>
        ) : (
          <List
            data={appointments}
            keyExtractor={item => String(item.id)}
            onRefresh={refreshList}
            refreshing={false}
            renderItem={({ item }) => (
              <Appointments
                onCancel={() => handleCancel(item.id)}
                data={item}
              />
            )}
          />
        )}
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

export default withNavigationFocus(Dashboard);
