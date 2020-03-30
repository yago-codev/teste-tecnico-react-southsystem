import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { apiUsers } from '../../../services/api';

import Form from './styles';

function PageLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToDragons, setRedirectToDragons] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      const response = await apiUsers.post('/login', {
        email,
        password,
      });

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      setRedirectToDragons(true);
    }
  };

  if (redirectToDragons) {
    return <Redirect to={{ pathname: '/dragons' }} />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          required
          placeholder="Insira sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Entrar</button>
      <Link className="logon" to="/">
        Não possui conta? Registre-se agora!
      </Link>
    </Form>
  );
}

export default PageLogin;
