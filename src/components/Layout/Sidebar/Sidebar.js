import React from 'react';
import UserInfo from '../../UI/UserInfo';
import Logo from '../../UI/Logo';

const SideBar = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  
  return (
    <nav className={drawerClasses}>
      <Logo/>
      <UserInfo/>
    </nav>
  )
}

export default SideBar