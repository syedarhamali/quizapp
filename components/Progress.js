
export default function Progress({progress}) {
  return (
    <div style={{width: progress+"%"}} className={`bg-gray-900 h-2.5 dark:bg-gray-700 transition duration-75 delay-150 md:delay-75`} id='progressbar'></div>
  )
}
