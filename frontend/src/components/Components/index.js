import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationsList,
  Scroll,
  Notification,
} from './styles';

export default function Components() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationsList>
        <Scroll>
          <Notification unread>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>
          <Notification>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>
          <Notification>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>
          <Notification unread>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>{' '}
          <Notification unread>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>{' '}
          <Notification unread>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>{' '}
          <Notification unread>
            <p>Você tem um notificaçãodfjosijda asoidjaois</p>
            <div>
              <time>há 2 dias</time>
              <button type="button">Marcar como lida</button>
            </div>
          </Notification>
        </Scroll>
      </NotificationsList>
    </Container>
  );
}
