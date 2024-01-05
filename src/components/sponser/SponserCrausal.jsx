import React, { useContext } from "react";
import SponserCard from "./SponserCard";
import myContext from '../../context/MyContext'

const SponsorCrausal = () => {
    const context = useContext(myContext)
    const { toggleMode, mode } = context

        return (
            <div className="w-full overflow-x-hidden" style={{ backgroundColor: mode === 'dark' ? '#262930' : 'white', color: mode === 'dark' ? 'white' : '' }}>
                <div className='w-full'>
                    <h2 className='w-full text-3xl text-center font-semibold md:text-5xl my-12'>Our <span className='text-lime-600'>Sponsors</span></h2>
                </div>
                <div className="w-full">
                    <SponserCard />
                </div>
                <div className="w-full">
                    <p className="w-full text-xl text-center font-semibold md:text-3xl my-12 text-lime-600">DONATE TOWARDS THE BETTERMENT</p>
                </div>
                <div className="w-full">
                    <p className="w-full text-lg text-center font-semibold md:text-2xl my-12">"Contribute towards a greener India and play your role in bringing it to forefront in the solar race."</p>
                </div>
                <div className="w-full mb-10 text-center">
                    <a href="#"
                        className=" px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700">
                        Learn more
                    </a>
                </div>
            </div>
        );
    };

export default SponsorCrausal
    ;
