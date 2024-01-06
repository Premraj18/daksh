import React, { useContext } from 'react'
import Card from './Card'
import myContext from '../context/MyContext'
import { Link } from 'react-router-dom'

const Data = [
    {
        "id": "1",
        "title": "BAJA SAE INDIA 2023:",
        "description": "- In 2023, Team DAKSH continued their legacy with a commendable *Rank of 29th out of 114 participating teams* and maintained their leadership among NITs, DTU, & NSUT by achieving the *1st Position.",
        "imgUrl": "/achivement/img16.jpg"
    },
    {
        "id": "2",
        "title": "BAJA SAE INDIA 2022:",
        "description": "- In 2022, their commitment to technological innovation and engineering excellence was evident as they secured the *4th Position among all NITs in CAE Evaluation Event* and achieved the *38th Position out of 138 teams in the Virtual Dynamics Event.",
        "imgUrl": "/achivement/img5.jpg"
    },
    {
        "id": "3",
        "title": "BAJA SAE INDIA 2021:",
        "description": "- Maintaining their standing among top-tier teams, they achieved an *Overall 4th Position among all NITs* in 2021, showcasing their consistent excellence.",
        "imgUrl": "/achivement/img6.jpg"
    },
    {
        "id": "4",
        "title": "BAJA SAE INDIA 2020:",
        "description": "- In a remarkable feat, Team DAKSH showcased the resilience of their vehicle by completing *15 laps of a rough and rigorous track without any breakdown for four continuous and enervating hours* in 2020.",
        "imgUrl": "/achivement/img10.jpg"
    },
    {
        "id": "5",
        "title": "BAJA SAE INDIA 2019:",
        "description": "- In 2019, Team DAKSH continued their environmental commitment, securing the *1st Position in the Go Green Event, and maintained a strong standing with the **12th Position in Baja Virtuals*.",
        "imgUrl": "/achivement/img9.jpg"
    },
    {
        "id": "6",
        "title": "BAJA SAE INDIA 2018:",
        "description": "- The team showcased their prowess in the virtual realm, securing the *1st Position in Baja Virtuals, and were recognized for their environmental consciousness with the **Runner Up in the Go Green Event*.",
        "imgUrl": "/achivement/img12.jpg"
    },
]

const Achivement = () => {
    const context = useContext(myContext)
    const { toggleMode, mode } = context

    return (
        <div className="w-full sm:w-auto flex gap-28 flex-wrap sm:px-32 pl-4 pr-4" style={{ backgroundColor: mode === 'dark' ? '#262930' : 'white', }}>
            <div className='w-full'>
                <h2 className='w-full text-3xl text-center font-semibold md:text-5xl my-12' style={{color: mode === 'dark' ? 'white' : '', }}>Our <span className='text-lime-600'>Achievements</span></h2>
            </div>
            <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }}>
                {Data && Data.map((element) => {
                    //   console.log(element);
                    return <div className="flex" key={element.id}>
                        <Card title={element.title} description={element.description} imgUrl={element.imgUrl}
                        />
                    </div>
                })}

                <div className="w-full text-center mb-20">
                    <Link to='/achivements'
                        className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700">
                        Read more
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Achivement
