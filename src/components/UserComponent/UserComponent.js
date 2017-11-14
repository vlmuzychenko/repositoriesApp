// Core
import React from 'react';

// Instruments
import Styles from './UserComponent.scss';

// App
export default function(props) {
  return (
    <div className = { Styles.user }>
      <h1 className = { Styles.user__name }>
        { props.name }
        <span> Repositories</span>
      </h1>
      {
        props.name === 'Username' ?
        null :
        <button className = { Styles.user__logout } onClick = { props.logout }>Logout</button>
      }
    </div>
  )
}
