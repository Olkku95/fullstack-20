import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course}/>
}

ReactDOM.render(<App />, document.getElementById('root'))