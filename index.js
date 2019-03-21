import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/layout';
import Todos from './components/todos';

const App = () => (
  <Provider store={store}>
    <Layout title="Mis Tareas">
      <Todos />
    </Layout>
  </Provider>
);

render(<App/>, document.getElementById('root'));
