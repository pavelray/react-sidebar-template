import React from 'react';
import HamburgerButton from '../../UI/HamburgerButton';

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <HamburgerButton click={props.sidebarToggleClickHandler} />
        </div>
      <div className="toolbar__logo">
        <a href="/">School Tool</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Toolbar