import React from 'react'

function Contact(props) {
  return (
    <a href={props.imglink} target="_blank"><img src={props.source} className={props.clss} alt={props.alter}/></a>
  )
}

export default Contact
