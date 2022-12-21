
function Options({incorrectOptions, correctOption,submitAnswer,disableBtn}) {
    console.log(disableBtn)
    const array = [...incorrectOptions,correctOption]
  return (
    array.map((item,key)=>{
        return(
            <button onClick={()=>submitAnswer(decodeURIComponent(item))} key={key} className="bg-transparent focus:bg-black text-black-700 focus:text-white py-2 px-4 border border-black-500 hover:border-black rounded options" disabled={disableBtn}>{decodeURIComponent(item)}</button>
        )
    })

  )
}

export default Options