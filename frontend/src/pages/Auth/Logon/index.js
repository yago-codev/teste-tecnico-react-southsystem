import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { apiUsers } from '../../../services/api';

import Form from './styles';

function PageLogon() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name !== '' && email !== '' && password !== '') {
      await apiUsers.post('/register', {
        name,
        email,
        password,
      });
      setRedirectToLogin(true);
    }
  };

  if (redirectToLogin) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Crie sua conta</h2>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Insira seu nome"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Insira seu email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Insira sua senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Criar Conta</button>
      <Link className="login" to="/login">
        Já possui conta? Faça seu login!
      </Link>
    </Form>
  );
}

export default PageLogon;
