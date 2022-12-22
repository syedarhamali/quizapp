
function Options({ incorrectOptions, correctOption, checkAnswer }) {
  const array = [...incorrectOptions, correctOption]
  return (
    array.map((item, key) => {
      return (
        <button onClick={() => checkAnswer(decodeURIComponent(item))} key={key} className="bg-transparent focus:bg-black break-normal text-black-700 focus:text-white py-2 px-4 border border-black-500 hover:border-black rounded options">{decodeURIComponent(item)}</button>
      )
    })

  )
}

export default Options