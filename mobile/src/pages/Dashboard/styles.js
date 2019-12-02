import styled from 'styled-components/native';

// SafeAreaView é usado no iphone para nao ocupar a aria do statusbar
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: true,
  contentContainerStyle: { padding: 30 },
})``;

export const EmptyAppointmentsView = styled.View`
  margin: 10px;
  align-items: center;
`;

export const EmptyAppointmentsText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
`;
