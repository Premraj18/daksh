import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout'
import myContext from '../../context/MyContext'
import manufacturing from './manufacturing.json'
import Workshop from './Workshop.json'
import events from './events.json'
import GroupPhoto from './GroupPhoto.json'
import celebration from './celebration.json'
import GalleryCard from './GalleryCard'

const Gallery = () => {
    const [item, setItem] = useState(manufacturing)
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
                            onClick={() => setItem(manufacturing)}>Manufacturing</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(events)}>Events</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Workshop)}>Workshop</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(GroupPhoto)}>Group Photos</button>
                        <button className="sm:w-36 w-40 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(celebration)}>Celebration</button>
                       
                    </div>

                    <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }} >
                        <GalleryCard item={item} />

                    </div>

                {/* </div> */}
            </div>
        </Layout>
    )
}

export default Gallery
