// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

// Instruments
import './theme/reset.css';

// Layouts
import MainLayout from './components/Layout/Layout';

// Pages
import LoginContainer from './containers/LoginContainer/LoginContainer';
import ListContainer from './containers/ListContainer/ListContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Route exact path = '/' render={() => <LoginContainer />} />
            <Route
              path = '/list'
              render={() => <ListContainer />}
            />
          </MainLayout>
      </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
