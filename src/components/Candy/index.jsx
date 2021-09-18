import React from 'react'
import './styles.css'

const Candy = props => {
  let classImage = "candy"
  if (props.isFullSize) {
    classImage += " full-size"
  }
  return (
    <img
      src={props.candyImage}
      className={classImage}
      alt={props.candyImage} />
  )
}

export default Candy