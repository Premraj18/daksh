import React from 'react'
import Data from './Data.json'

const Buttons = ({ menuItems, filterItems, setItem }) => {
    return (
        <div className='flex justify-center flex-wrap w-full'>
            <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                onClick={() => setItem(Data)}
            >
                All
            </button>
            {
                menuItems.map(val => (
                    <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                        onClick={() => filterItems(val)}
                    >
                        {val}
                    </button>
                ))
            }
        </div>
    )
}

export default Buttons
