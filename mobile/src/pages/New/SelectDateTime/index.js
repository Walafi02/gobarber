import React from 'react';
import { View } from 'react-native';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
}


SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  // headerLeft: () => (
  //   <TouchableOpacity
  //     onPress={() => {
  //       navigation.navigate('Dashboard');
  //     }}
  //   >
  //     <Icon name="chevron-left" size={24} color="#fff" />
  //   </TouchableOpacity>
  // ),
});
