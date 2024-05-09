import { useState } from 'react'

// function Button(props) {
//   return <button onClick={props.handleClick}>{props.text}</button>
// }

// function StatisticLine(props) {
//   return (
//     <tbody>
//       <tr>
//         <th>{props.text}</th>
//         <td>{props.value}</td>
//       </tr>
//     </tbody>
//   )
// }

// function Statistics(props) {
//   if (props.total === 0) {
    
//     return (
//       <div>
//         <h2>Statistics</h2>
//         <p>No feedback given</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h2>Statistics</h2>
//       <table>
//         <StatisticLine text="Good" value={props.good}/>
//         <StatisticLine text="Neutral" value={props.neutral}/>
//         <StatisticLine text="Bad" value={props.bad}/>
//         <StatisticLine text="Total Number of Reviews" value= {props.total}/>
//         <StatisticLine text="Average" value={props.average}/>
//         <StatisticLine text="Percentage of Positive Reviews" value={props.percentage}/>
//       </table>
//     </div>
//   )
// }

// function App() {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const [total, setTotal] = useState(0);

//   function updateGood() {
//     const updatedGood = good + 1;
//     setGood(updatedGood);
//     setTotal(updatedGood + neutral + bad);
//   }

//   function updateNeutral() {
//     const updatedNeutral = neutral + 1;
//     setNeutral(updatedNeutral);
//     setTotal(good + updatedNeutral + bad);
//   }

//   function updateBad() {
//     const updatedBad = bad + 1;
//     setBad(updatedBad);
//     setTotal(good + neutral + updatedBad);
//   }

//   function calculateAverage() {
//     return (good - bad) / total;
//   }

//   function calculatePercentage(review) {
//     return review * 100 / total
//   }

//   const average = calculateAverage();
//   const percentage = calculatePercentage(good);

//   return (
//     <div>
//       <div>
//         <h1>Give Feedback</h1>
//         <Button handleClick={updateGood} text="Good"/>
//         <Button handleClick={updateNeutral} text="Neutral"/>
//         <Button handleClick={updateBad} text="Bad"/>
//       </div>
//       <div>
//         <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={percentage}/>
//       </div>
//     </div>
//   )
// }

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  let maxIdx;

  function getRandomIdx() {
    return Math.floor(Math.random() * anecdotes.length);
  }

  function generateQuote() {
    const randomIdx = getRandomIdx();
    setSelected(randomIdx);
  }

  function vote() {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }

  
  function findMaxQuoteIdx() {
    const maxVote = Math.max(...votes);
    maxIdx = votes.findIndex(vote => vote === maxVote);
  }
  findMaxQuoteIdx()
  
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} Votes</p>
      <Button handleClick={vote} text="Vote" />
      <Button handleClick={generateQuote} text="Generate Quote"/>
      <div>
        <h2>Most Popular Quote</h2>
        <p>{anecdotes[maxIdx]}</p>
        <p>Has {votes[maxIdx]} Votes</p>
      </div>
      
    </div>
  )
}

export default App
