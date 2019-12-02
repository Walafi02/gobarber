import React from 'react';
import { useSelector } from 'react-redux';
import createRoutes from './routes';

import NavigationService from '~/services/navigation';

export default function App() {
  const signed = useSelector(state => state.auth.singed);
  const Routes = createRoutes(signed);
  return (
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  );
}
