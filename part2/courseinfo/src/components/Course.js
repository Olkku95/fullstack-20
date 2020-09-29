import React from 'react'

const Header = (props) => {
    return (
      <h1>{props.name}</h1>
    )
  }
  
  const Content = (props) => {
    return (
      props.parts.map(part => <Part key={part.id} parts={part}/>)
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.parts.name} {props.parts.exercises}</p>
    )
  }
  
  const Total = (props) => {
    const exercise = props.parts.map(exercise => exercise.exercises)
    const total = exercise.reduce((s,p) => {
      return s+p
    })
    return (
      <h4>total of {total} exercises</h4>
    )
  }
  
  const Course = (props) => {
    const { course } = props
    return (
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }

export default Course