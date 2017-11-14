// Core
import React from 'react';

// Instruments
import Styles from './Layout.scss';
import UserContainer from '../../containers/UserContainer/UserContainer';

// App
export default function(props) {
  return (
    <div className = { Styles.app }>
      <header className = { Styles.header }>
        <UserContainer />
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}
