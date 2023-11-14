import React from 'react'
import Icon from './Icon'

import '../assets/styles/MenuItem.css'

const MenuItem = ({ logo, title, selected }) => {
  return (
    <div className={`menu-item ${selected ? 'selected' : undefined}`}>
      {logo && (
        <div className="icon-container">
          <Icon image={logo} />
        </div>
      )}
      <div className={logo ? 'title' : 'secondary-title'}>{title}</div>
    </div>
  )
}

export default MenuItem