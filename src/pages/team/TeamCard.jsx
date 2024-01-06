import React, { useContext } from 'react'
import myContext from '../../context/MyContext'
import {motion} from 'framer-motion'
import { BsLinkedin } from 'react-icons/bs'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
}

const ActivityCard = ({item}) => {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <>
        <motion.div className='container hidden sm:block w-full'>
            <motion.div className='flex justify-center gap-x-4 md:gap-x-16 gap-y-10 flex-wrap'
                variants={variants}
                initial='initial'
                whileInView='animate'
            >
                {item.map((d) => {
                    return(
                        <motion.div
                        key={d.id}
                        className="block sm:w-52 rounded-lg" variants={variants}>
                        <motion.a href="#!" variants={variants}>
                            <img
                                className="rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                src={d.imgUrl}
                                alt="" />
                        </motion.a>
                        <motion.div className="p-6" variants={variants}>
                            <motion.h5
                                className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800" style={{color: mode === 'dark' ? 'white': '' }} >
                                {d.name}
                            </motion.h5>
                            <motion.p className="mb-4 text-base text-neutral-600 text-center" style={{color: mode === 'dark' ? 'lightgrey': '' }} >
                                {d.position}
                            </motion.p>
                            <motion.a href='' className="mb-4 text-base text-lime-600 flex justify-center" style={{color: mode === 'dark' ? 'lightgrey': '' }} >
                                <BsLinkedin/>
                            </motion.a>
                            
                        </motion.div>
                    </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
        <div className='container sm:hidden w-full'>
            <div className='flex justify-center md:gap-x-16 gap-y-10 flex-wrap'>
                {item.map((d) => {
                    return(
                        <div
                        key={d.id}
                        className="block w-52 sm:w-52 rounded-lg">
                        <a href="#!">
                            <img
                                className="rounded-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                src={d.imgUrl}
                                alt="" />
                        </a>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-center leading-tight text-neutral-800" style={{color: mode === 'dark' ? 'white': '' }} >
                                {d.name}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 text-center" style={{color: mode === 'dark' ? 'lightgrey': '' }} >
                                {d.position}
                            </p>
                            <a href='' className="mb-4 text-base text-lime-600 flex justify-center" style={{color: mode === 'dark' ? 'lightgrey': '' }} >
                                <BsLinkedin/>
                            </a>
                            
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default ActivityCard
