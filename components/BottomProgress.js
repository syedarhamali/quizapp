
export default function BottomProgress({score,totalScore,wrongAnswers}) {
  return (
    <>
    <div style={{width: `${score / totalScore * 10 }%`}} className="bg-black-900 z-30 h-9 dark:bg-gray-900 absolute"></div>
    <div style={{width: `${100-((wrongAnswers*10)/totalScore*10)}%`}} className="bg-red-200 h-9 dark:bg-gray-200  absolute"></div>
    </>
  )
}
