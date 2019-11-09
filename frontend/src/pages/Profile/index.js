import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha antiga"
        />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme sua nova senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do Gobarber</button>
    </Container>
  );
}
