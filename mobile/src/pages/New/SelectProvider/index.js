import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, ProviderList, Avatar, Provider, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }
    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item }) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', { item })}
            >
              <Avatar
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : `https://api.adorable.io/avatar/50/${item.name}.png`,
                }}
              />
              <Name>{item.name || 'telfkjodi'}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});
