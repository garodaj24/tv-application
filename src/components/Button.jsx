import React from 'react'

import '../assets/styles/Button.css'

const Button = (props) => {
  const style = {
    backgroundColor: props.backgroundColor,
    backgroundImage: props.backgroundImage,
  }
  return (
    <button className='button' style={style}>
      {props.children}
    </button>
  )
}

export default Button