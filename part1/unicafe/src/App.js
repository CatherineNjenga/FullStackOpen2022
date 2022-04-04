import { useState } from "react";

const Statistics = ({good, neutral, bad}) => {
  if (!onClick){
    return(
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
      return(
        <>
        <h1>Statistics</h1>
        <div>good {good} </div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div> all {good + neutral + bad}</div>
        <div>average {(good + neutral + bad)/3}</div>
        <div>positive {good/(good + neutral + bad)}%</div>
        </>
      )

}

const App = () => {
  // create a new state on each button click
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
      


    </div>
  )
}

export default App;
