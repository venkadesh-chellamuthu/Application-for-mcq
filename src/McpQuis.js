import React,{useState} from 'react'
import './App.css';
import Qustion from './components/Qustion';


function McpQuis() {
  const [qustionIdx, setQustionIdx] = useState(0);
  const currQustion = Qustion[qustionIdx];
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const selectOption = (idx) => {
    if (currQustion.answer === idx){
        setScore(score + 1);
    }
    const nextQ = qustionIdx + 1;
    if(nextQ < Qustion.length){
      setQustionIdx(qustionIdx + 1);

    }
    else{
      setShowScore(true)
    }
  };
const reset = () =>{
  setQustionIdx(0);
  setScore(0);
  setShowScore(0)

}
const skip = () =>{
  const nextQ = qustionIdx + 1;
  if(nextQ < Qustion.length){
    setQustionIdx(qustionIdx + 1);
  }
  else{
    setShowScore(true)
  }
}
const prev = () =>{
 if(qustionIdx === 0){
  setQustionIdx(0)
 }
 else{
  setQustionIdx(qustionIdx - 1);
 }
}
const submit = () =>{
    setShowScore(true)
    
}

  return (
    <div className="quiz-container">
{
  showScore ? (
  <>
  <h1>Your score is :{score}</h1>
  <button onClick={reset}>reset</button>
  </>
  ):(
    <div className="quiz-continer-quistion">
    <p>{currQustion.question}</p>
    <div className="quiz-continer-option">
    <ul className="quiz-container-ul">
      {currQustion.options.map((option,i)=> { 
    return<li className="quiz-container-li"  onClick ={ () => selectOption(i)}>{option}</li>
    
      })}
    
    </ul>
    <span><button onClick={skip}>skip</button><button onClick={prev}>return</button><button onClick={submit}>submit</button> </span>
    
    
    </div>
          </div>


  )
}



    </div>
  );
}

export default McpQuis;
