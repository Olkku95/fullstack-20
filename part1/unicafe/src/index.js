import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  )
}

const Buttons = (props) => {
  return (
    <div>
      <Button handleClick={() => props.setGood(props.good + 1)} text="good"/>
      <Button handleClick={() => props.setNeutral(props.neutral + 1)} text="neutral"/>
      <Button handleClick={() => props.setBad(props.bad + 1)} text="bad"/>
    </div>
  )
}

const Statistic = (props) => {
  if (props.text === "positive ") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        <td>%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / all
  const pos = 100*(props.good / all)

  if (all===0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="average" value={avg} />
      <Statistic text="positive " value={pos} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header text="give feedback"/>
      <Buttons good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
