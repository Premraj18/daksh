import React, { useContext, useState } from 'react'
import ActivityCard from './ActivityCard.jsx'
import Buttons from './Buttons.jsx'
import Data from './Data.json'
import myContext from '../../context/MyContext'
import { BsYoutube } from 'react-icons/bs'

const ClubActivity = () => {
    const [item, setItem] = useState(Data)
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    const menuItems = [...new Set(Data.map((val) => val.category))]

    const filterItems = (cat) => {
        const newItems = Data.filter((newval) => newval.category === cat)
        setItem(newItems)
    }
    return (
        <div className="w-full sm:w-auto flex gap-20 flex-wrap bg-stone-100 pl-4 pr-4" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', }}>
            <div className='w-full'>
                <h2 className='w-full text-2xl text-center font-semibold md:text-5xl my-12' style={{ color: mode === 'dark' ? 'white' : '', }}>Club <span className='text-lime-600'>Activities</span></h2>
            </div>
            <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px'}}>
                <Buttons menuItems={menuItems} filterItems={filterItems} setItem={setItem}/>
                <ActivityCard item={item}/>
                <div className="w-full text-center mb-10">
                    <p className='text-lg md:text-2xl'>If you want to explore more you can check our Youtube Channel</p>
                    <a href='https://www.youtube.com/@teamdaksh9836' target='_blank' className='cursor-pointer flex items-center h-20 w-full justify-center'>
                        <BsYoutube size={40} color='red'/>
                        <span className='text-xl mx-3'>Team Daksh</span>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default ClubActivity
