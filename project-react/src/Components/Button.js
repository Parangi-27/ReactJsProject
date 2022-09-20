import React from 'react'

function Button(props) {
  return (
    <div>
        <button value={props.value}>{props.name}</button>  
          </div>
  )
}

export default Button