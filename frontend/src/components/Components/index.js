import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationsList, Notification } from './styles';

export default function Components() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationsList>
        <Notification unread>
          <p>Você tem um notificação</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um notificação</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um notificaçãodfjosijda asoidjaois</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
      </NotificationsList>
    </Container>
  );
}
