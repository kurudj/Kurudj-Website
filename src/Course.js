import React from 'react'

function Course(props) {
  return (
    <div>
      <h2>{props.courseName}</h2>
      <hr />
      <h4>{props.detailedName}</h4>
      <hr width="250"/>
      <p>Term: {props.term}</p>
      <hr width="150"/>
      <p>Topics included: {props.topics}
      </p>
    </div>
  )
}

export default Course
