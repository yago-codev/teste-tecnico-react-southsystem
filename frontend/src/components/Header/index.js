import React from 'react';

import Header from './assets/styles';

import LogoImg from './assets/logo_dragon.png';

function HeaderComponent() {
  const logout = () => {
    localStorage.removeItem('user', null);
    localStorage.removeItem('token', null);
    window.location.href = '/login';
  };

  return (
    <Header>
      <a href="/dragons">
        <img src={LogoImg} alt="Logo South Dragons" />
      </a>

      {localStorage.getItem('user') && (
        <button type="button" onClick={() => logout()}>
          Sair
        </button>
      )}
    </Header>
  );
}

export default HeaderComponent;
