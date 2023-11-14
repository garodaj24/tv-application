import React from 'react'

const Icon = ({ image, height, width }) => {
  return (
    <img src={image} height={height ?? 20} width={width ?? 20} />
  )
}

export default Icon