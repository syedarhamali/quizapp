
export default function Result({ score, totalScore,states}) {
  const [setanswerState,setCounter,setScore,setProgress,setwrongAnswers,setanswerValidaty,setShowResult] = states
  const restart = () =>{
    setanswerState('')
    setCounter(0)
    setScore(0)
    setProgress(0)
    setwrongAnswers(0)
    setShowResult(false)
    setanswerValidaty(false)
  }
  return (
    <>
    <div className="container">
      <h1 className="text-2xl text-center">Congrats you have successfully attempt quiz</h1>
      <div className=" bg-gray-400 text-center  border-2 rounded border-black p-4 m-2">
        <div className="py-10">
          <h2 className="text-2xl">Your Success rate is {score/10} out of {totalScore} </h2>
        </div>
        <div className="py-5 rounded">
          <h3 className="border-2 border-black  rounded">Score is {score*10/totalScore}% out of 100%</h3>
        </div>
        <div className="py-5 rounded">
          <h3 className="bg-green-400 p-10 text-xl border-2 border-black rounded">your correct answer is {score/10}</h3>
        </div>
        <div className="py-5 rounded">
          <h3 className="bg-red-900 text-lime-50 text-xl p-10 border-2 border-black rounded">your incorrect answer is {totalScore-score/10}</h3>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-gray-100 w-2/4 border my-2 rounded" onClick={restart}>Play Again</button>
      </div>
    </div>
    </>
  )
}
