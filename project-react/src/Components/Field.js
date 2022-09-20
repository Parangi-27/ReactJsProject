import React from 'react'

export default function Field(props) {
    
  return (
    <div>
        <label>{props.name} :</label>
        <input type={props.type} name={props.name} id={props.id}></input>
    </div>
  )
}
