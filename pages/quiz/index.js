import { useEffect, useState } from 'react'
import Options from '../../components/Options'

export default function About() {
    const [counter, setCounter] = useState(0)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState(false)
    const [disable,setdisable] = useState(false);
    const [iscorrect, setiscorrect] = useState('')
    const [progressbar, setprogressbar] = useState(10)
    

    const questions = [
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
            "correct_answer": "Dirk%20the%20Daring",
            "incorrect_answers": [
                "Arthur",
                "Sir%20Toby%20Belch",
                "Guy%20of%20Gisbourne"
            ]
        },
        {
            "category": "Animals",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What%20is%20the%20scientific%20name%20for%20modern%20day%20humans%3F",
            "correct_answer": "Homo%20Sapiens",
            "incorrect_answers": [
                "Homo%20Ergaster",
                "Homo%20Erectus",
                "Homo%20Neanderthalensis"
            ]
        },
        {
            "category": "Entertainment%3A%20Books",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20is%20Ron%20Weasley%27s%20middle%20name%3F",
            "correct_answer": "Bilius",
            "incorrect_answers": ["Arthur", "John", "Dominic"]
        },
        {
            "category": "Entertainment%3A%20Comics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F",
            "correct_answer": "Robert%20Kirkman",
            "incorrect_answers": [
                "Stan%20Lee",
                "Malcolm%20Wheeler-Nicholson",
                "Robert%20Crumb"
            ]
        },
        {
            "category": "Entertainment%3A%20Board%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "At%20the%20start%20of%20a%20standard%20game%20of%20the%20Monopoly%2C%20if%20you%20throw%20a%20double%20six%2C%20which%20square%20would%20you%20land%20on%3F",
            "correct_answer": "Electric%20Company",
            "incorrect_answers": ["Water%20Works", "Chance", "Community%20Chest"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What%20is%20the%20capital%20of%20Jamaica%3F",
            "correct_answer": "Kingston",
            "incorrect_answers": ["Rio%20de%20Janeiro", "Dar%20es%20Salaam", "Kano"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When%20did%20Jamaica%20recieve%20its%20independence%20from%20England%3F%20",
            "correct_answer": "1962",
            "incorrect_answers": ["1492", "1963", "1987"]
        },
        {
            "category": "Animals",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Kangaroos%20keep%20food%20in%20their%20pouches%20next%20to%20their%20children.",
            "correct_answer": "False",
            "incorrect_answers": ["True"]
        },
        {
            "category": "General%20Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In%202013%20how%20much%20money%20was%20lost%20by%20Nigerian%20scams%3F",
            "correct_answer": "%2412.7%20Billion",
            "incorrect_answers": [
                "%2495%20Million",
                "%24956%20Million",
                "%242.7%20Billion"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How%20old%20was%20Lyndon%20B.%20Johnson%20when%20he%20assumed%20the%20role%20of%20President%20of%20the%20United%20States%3F",
            "correct_answer": "55",
            "incorrect_answers": ["50", "60", "54"]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "hard",
            "question": "In%20World%20of%20Warcraft%20lore%2C%20who%20organized%20the%20creation%20of%20the%20Paladins%3F",
            "correct_answer": "Alonsus%20Faol",
            "incorrect_answers": [
                "Uther%20the%20Lightbringer",
                "Alexandros%20Mograine",
                "Sargeras%2C%20The%20Daemon%20Lord"
            ]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "In%20the%20game%20%22Subnautica%22%2C%20a%20%22Cave%20Crawler%22%20will%20attack%20you.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "category": "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What%20is%20the%20name%20of%20the%20device%20that%20allows%20for%20infinite%20energy%20in%20the%20anime%20%22Dimension%20W%22%3F",
            "correct_answer": "Coils",
            "incorrect_answers": ["Wires", "Collectors", "Tesla"]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What%20is%20the%20name%20of%20Cream%20the%20Rabbit%27s%20mom%20in%20the%20%22Sonic%20the%20Hedgehog%22%20series%3F",
            "correct_answer": "Vanilla",
            "incorrect_answers": ["Peach", "Strawberry", "Mint"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "These%20two%20countries%20held%20a%20commonwealth%20from%20the%2016th%20to%2018th%20century.",
            "correct_answer": "Poland%20and%20Lithuania",
            "incorrect_answers": [
                "Hutu%20and%20Rwanda",
                "North%20Korea%20and%20South%20Korea",
                "Bangladesh%20and%20Bhutan"
            ]
        },
        {
            "category": "Entertainment%3A%20Television",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Which%20of%20these%20voices%20wasn%27t%20a%20choice%20for%20the%20House%20AI%20in%20%22The%20Simpsons%20Treehouse%20of%20Horror%22%20short%2C%20House%20of%20Whacks%3F",
            "correct_answer": "George%20Clooney",
            "incorrect_answers": [
                "Matthew%20Perry",
                "Dennis%20Miller",
                "Pierce%20Brosnan"
            ]
        },
        {
            "category": "Entertainment%3A%20Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "From%20which%20album%20is%20the%20Gorillaz%20song%2C%20%22On%20Melancholy%20Hill%22%20featured%20in%3F",
            "correct_answer": "Plastic%20Beach",
            "incorrect_answers": ["Demon%20Days", "Humanz", "The%20Fall"]
        },
        {
            "category": "General%20Knowledge",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Scotland%20voted%20to%20become%20an%20independent%20country%20during%20the%20referendum%20from%20September%202014.",
            "correct_answer": "False",
            "incorrect_answers": ["True"]
        },
        {
            "category": "Entertainment%3A%20Video%20Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In%20Left%204%20Dead%2C%20which%20campaign%20has%20the%20protagonists%20going%20through%20a%20subway%20in%20order%20to%20reach%20a%20hospital%20for%20evacuation%3F",
            "correct_answer": "No%20Mercy",
            "incorrect_answers": [
                "Subway%20Sprint",
                "Hospital%20Havoc",
                "Blood%20Harvest"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What%20was%20the%20last%20colony%20the%20UK%20ceded%20marking%20the%20end%20of%20the%20British%20Empire%3F",
            "correct_answer": "Hong%20Kong",
            "incorrect_answers": ["India", "Australia", "Ireland"]
        }
    ]
    
    const answerIncrement = () => {
        document.querySelectorAll(".options").forEach((item) => {
            item.disabled = false
        })
        setCounter(counter + 1)
        setAnswer(false)
        setprogressbar(progressbar + (100 / questions.length))
        document.getElementById("progressbar").style.width = progressbar + '%'
    }
    const submitAnswer = (e) => {
        console.log(e)
        if (e === decodeURIComponent(questions[counter].correct_answer)) {
            setiscorrect("Correct")
            setScore(score+10)
            setdisable(true)
            alert(score);
        }
        else {
            setiscorrect("Wrong")
        }
        setAnswer(true)
    }
    
    return (
        <div className="container desktop:w-3/6 container-md mx-auto d-flex justify-center p-2">
            <div className='w-100 border-dark-900 border-4'>
                <header>
                    <div className={`w-0 bg-gray-900 h-2.5 dark:bg-gray-700`} id='progressbar'></div>
                    <h2 className='text-dark-900 text-5xl text-center py-6'>Quiz App</h2>
                </header>
                <main className='p-4'>
                    <div>
                        <h5 className='text-2xl'>Question: <span>{counter + 1}</span> into  <span>{questions.length}</span></h5>
                    </div>

                    <div className='py-2'>
                        <span>{decodeURIComponent(questions[counter].category)}</span>
                    </div>
                    <div>
                        <ul className="flex">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className='py-15'>
                        <div>
                            <p className='text-dark-xl py-10'>{decodeURIComponent(questions[counter].question)}</p>
                        </div>
                        <div className='grid gap-5 grid-cols-2 grid-rows-2 p-2'>
                            <Options disableBtn={disable} submitAnswer={submitAnswer} incorrectOptions={questions[counter].incorrect_answers} correctOption={questions[counter].correct_answer} />
                        </div>
                    </div>
                    <div className='text-center py-2'>
                        {answer &&
                            <>
                                <h1 className='text-5xl mb-4' >{iscorrect}</h1>
                                <button onClick={answerIncrement} className="bg-transparent focus:bg-black text-black-700 focus:text-white py-2 px-4 border border-black-500 hover:border-black">Next Question</button>
                            </>

                        }
                    </div>
                    <div className='py-6'>
                        <div className='flex justify-between'>
                            <p>Score: 67%</p>
                            <p>Max Score: 75%</p>
                        </div>
                        <div className='rounded relative bg-black'>
                            <div className="bg-black-900 h-9 dark:bg-gray-700 rounded absolute"></div>
                            <div className="bg-black-900 h-9 dark:bg-gray-700 rounded absolute"></div>
                            <div className="bg-black-900 h-9 dark:bg-gray-700  rounded absolute"></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
