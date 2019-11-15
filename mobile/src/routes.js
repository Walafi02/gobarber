import { createAppContainer, createSwitchNavigator } from 'react-navigation'; // createSwitchNavigator não gera historico

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
