import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="user-info">
        <div className="user-info__avater">
           <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="Avater"/>
            <h2 className="user-info__avater--title"> Pavel Ray</h2>
            <div className="spacer" />
            <i class="angle down icon"></i>
        </div>
        
        <div className="user-info__content">
            <ul>
                <li>
                    <a href="/" className="nav-link">My Profile</a>
                    <a href="/" className="nav-link">Edit Profile</a>
                    <a href="/" className="nav-link">Logout</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
