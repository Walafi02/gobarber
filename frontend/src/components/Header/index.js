import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Components';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <Notifications />
            <div>
              <strong>Walafi Ferreira</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/51/abott@adorable.png"
              alt="Walafi Ferreira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
