import { useState } from "react";

const Button = ({onClick, text}) =>{
  return(
  <button onClick={onClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({text, value, sign}) => {
  return(
    <tr>
      <td>{text} </td>
      <td>{value}</td>
      <td>{sign}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, sign}) => {
  if (good === 0 && neutral === 0 && bad === 0){
    return(
    <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
    )
  } else {
      return(
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text ="neutral" value ={neutral} />
            <StatisticLine text ="bad" value ={bad} />
            <StatisticLine text ="all" value ={good + neutral + bad} />
            <StatisticLine text= "average" value ={(good*1 + neutral*0 + bad*-1)/(good + neutral + bad)} />
            <StatisticLine text ="positive" value={good/(good + neutral + bad) * 100} sign ="%" />
          </tbody>
        </table>
       </>
      )
    }
}

const App = () => {
  // create a new state on each button click
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodClick = () => setGood(good + 1);
  const setNeutralClick = () => setNeutral(neutral + 1);
  const setBadClick = () => setBad(bad + 1);


  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGoodClick} text ="good" />
      <Button onClick={setNeutralClick} text = "neutral" />
      <Button onClick={setBadClick} text ="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />   
    </div>
  )
}

export default App;
