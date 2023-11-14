import React from 'react'

import '../assets/styles/Profile.css'

const Profile = ({ user }) => {
  return (
    <div className='profile'>
      <img
        className='profile-image'
        src={user.avatar}
      />
      <div className="profile-name">{user.name}</div>
    </div>
  )
}

export default Profile