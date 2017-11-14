// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Instruments
import Styles from './LoginComponent.scss';

export default function(props) {
  return (
    <div className = { Styles.login }>
      <div className = { Styles.form }>
        <div className = { Styles.form__field }>
          <input
            id = 'username'
            name = 'username'
            type = 'text'
            onChange = { props.loginEnter }
            required
          />
          <label htmlFor = 'username'>Enter your name</label>
        </div>
        <div className = { Styles.form__button }>
          <Link to = "/list" onClick = { props.login }>Login</Link>
        </div>
      </div>
    </div>
  );
}
