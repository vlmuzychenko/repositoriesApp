// Core
import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

// Instruments
import Styles from './ListComponent.scss';

const linkStyle = {
  active: {
    opacity: 1
  },

  link: {
    outline: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    opacity: '.5',
    transition: 'opacity .2s',
  }
}

export default function(props) {
  const { repositories } = props;
  console.log(repositories);

  if (repositories.length === 0) return <div>NO DATA!</div>

  return(
    <div className = { Styles.list }>
      <Tabs
        name = 'tabs'
        className = { Styles.list }
        handleSelect = { props.changeSelectedTab }
        selectedTab = { props.selectedTab }
        activeLinkStyle = { linkStyle.active }
      >
        <ol className = { Styles.list__items }>
          {
            repositories.map(repository =>
              <li key={ repository.id } >
                <TabLink
                  to={ `${repository.id}` }
                  style = { linkStyle.link }
                >
                  { repository.name}
                </TabLink>
              </li>
            )
          }
        </ol>

        <div className = { Styles.list__info }>
          {
            repositories.map(repository =>
              <TabContent
                for = { `${repository.id}` }
                key = { repository.id }
              >
                <h2>{ repository.name }</h2>
                <a href = { repository.html_url } target='_blank'>
                  { repository.html_url }
                </a>
              </TabContent>
            )
          }
        </div>
      </Tabs>
    </div>
  );
}
