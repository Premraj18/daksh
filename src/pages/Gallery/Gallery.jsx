import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout'
import myContext from '../../context/MyContext'
import Manufacturing from './manufacturing.json'
import Workshop from './Workshop.json'
import events from './events.json'
import GroupPhoto from './GroupPhoto.json'
import Celebration from './Celebration.json'
import GalleryCard from './GalleryCard'

const Gallery = () => {
    
    const [active, setActive] = useState("item1")
    const [item1, setItem1] = useState(Manufacturing)
    const [item2, setItem2] = useState(events)
    const [item3, setItem3] = useState(Workshop)
    const [item4, setItem4] = useState(GroupPhoto)
    const [item5, setItem5] = useState(Celebration)

    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <Layout>
            <div className="w-full sm:w-auto flex flex-wrap bg-stone-100 pl-4 pr-4" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '',}}>
                {/* <div className='w-full sm:w-auto flex gap-10 flex-wrap pl-4 pr-4'> */}
                    <div className='w-full' >
                        <h2 className='w-full text-2xl text-center font-semibold md:text-4xl my-12 mb-16' style={{ color: mode === 'dark' ? 'white' : '', }}>Our <span className='text-lime-600'>Memories</span></h2>
                    </div>

                    <div className='flex justify-center flex-wrap w-full mb-48'>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setActive('item1')}>Manufacturing</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setActive('item2')}>Events</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setActive('item3')}>Workshop</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setActive('item4')}>Group Photos</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setActive('item5')}>Celebration</button>
                       
                    </div>

                    <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }} >
                        {active === 'item1' && <GalleryCard item={item1} />}
                        {active === 'item2' && <GalleryCard item={item2} />}
                        {active === 'item3' && <GalleryCard item={item3} />}
                        {active === 'item4' && <GalleryCard item={item4} />}
                        {active === 'item5' && <GalleryCard item={item5} />}

                    </div>

                {/* </div> */}
            </div>
        </Layout>
    )
}

export default Gallery
