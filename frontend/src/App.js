import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import HeaderComponent from './components/Header';
import store from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <HeaderComponent />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
