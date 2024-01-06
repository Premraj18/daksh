import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout'
import myContext from '../../context/MyContext'
import TeamCard from './TeamCard'
import { BsPerson } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Data2k21 from './data2k21.json'
import Data2k22 from './data2k22.json'
import Data2k20 from './data2k20.json'
import Data2k19 from './data2k19.json'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1,
        },
    },
}

const Team = () => {
    const [item, setItem] = useState(Data2k21)
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <Layout>
            <motion.div className="w-full  sm:block hidden sm:w-auto flex gap-20 flex-wrap bg-stone-100 pl-4 pr-4" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', }}>
                <motion.div className='w-full sm:w-auto flex gap-10 flex-wrap pl-4 pr-4'
                    variants={variants}
                    initial='initial'
                    whileInView='animate'>
                    <motion.div className='w-full' variants={variants}>
                        <h2 className='w-full text-2xl text-center font-semibold md:text-4xl my-12' style={{ color: mode === 'dark' ? 'white' : '', }}>Faculty <span className='text-lime-600'>Advisior</span></h2>
                    </motion.div>
                    <motion.div className="conatiner w-full flex items-center justify-center md:gap-x-60 " variants={variants}>
                        <motion.div className="block w-full sm:w-80 rounded-lg "
                            variants={variants}
                        >
                            <motion.a href="#" className='flex justify-center w-full' variants={variants}>
                                <motion.img
                                    className="rounded-full w-52  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    initial={{ scale: 1 }}
                                    whileHover={{ boxShadow: '0 0 15px #84cc16', scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    src='/Team/2k21/person-icon.jpg'
                                    alt="" />
                            </motion.a>
                            <motion.div className="p-6" variants={variants}>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Dr KRISHNA DEO PRASAD SINGH
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Designation: Associate Professor,
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Mechanical Engineering,NIT Jamshedpur
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Kdpsingh.me@nitjsr.ac.in
                                </p>
                                <a href="" className='flex justify-center' style={{ color: mode === 'dark' ? 'lightgrey' : '' }}><BsPerson size={30} /></a>
                            </motion.div>
                        </motion.div>
                        <motion.div className="block w-full sm:w-80 rounded-lg" variants={variants}>
                            <motion.a href="#" className='flex justify-center w-full' variants={variants}>
                                <motion.img
                                    className="rounded-full w-52  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    initial={{ scale: 1 }}
                                    whileHover={{ boxShadow: '0 0 15px #84cc16', scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    src='/Team/2k21/person-icon.jpg'
                                    alt="" />
                            </motion.a>
                            <motion.div className="p-6" variants={variants}>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Dr KRISHNA DEO PRASAD SINGH
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Designation: Associate Professor,
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Mechanical Engineering,NIT Jamshedpur
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Kdpsingh.me@nitjsr.ac.in
                                </p>
                                <a href="" className='flex justify-center' style={{ color: mode === 'dark' ? 'lightgrey' : '' }}><BsPerson size={30} /></a>
                            </motion.div>
                        </motion.div>

                    </motion.div>

                    <div className='flex justify-center flex-wrap w-full mb-28'>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k21)}>Present Team</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k22)}>Batch 2k22</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k20)}>Batch 2k20</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k19)}>Batch 2k29</button>
                       
                    </div>

                    <motion.div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }} variants={variants}>
                        <TeamCard item={item} />

                    </motion.div>

                </motion.div>
            </motion.div>
            <div className="w-full sm:hidden sm:w-auto flex gap-20 flex-wrap bg-stone-100 pl-4 pr-4" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '',}}>
                <div className='w-full sm:w-auto flex gap-10 flex-wrap pl-4 pr-4'>
                    <div className='w-full' >
                        <h2 className='w-full text-2xl text-center font-semibold md:text-4xl my-12' style={{ color: mode === 'dark' ? 'white' : '', }}>Faculty <span className='text-lime-600'>Advisior</span></h2>
                    </div>
                    <div className="conatiner w-full flex sm:flex-row flex-col items-center justify-center md:gap-x-60 " >
                        <div className="block w-full sm:w-80 rounded-lg "
                            
                        >
                            <a href="#" className='flex justify-center w-full' >
                                <img
                                    className="rounded-full w-52  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    src='/Team/2k21/person-icon.jpg'
                                    alt="" />
                            </a>
                            <div className="p-6" >
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Dr KRISHNA DEO PRASAD SINGH
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Designation: Associate Professor,
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Mechanical Engineering,NIT Jamshedpur
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Kdpsingh.me@nitjsr.ac.in
                                </p>
                                <a href="" className='flex justify-center' style={{ color: mode === 'dark' ? 'lightgrey' : '' }}><BsPerson size={30} /></a>
                            </div>
                        </div>
                        <div className="block w-full sm:w-80 rounded-lg" >
                            <a href="#" className='flex justify-center w-full' >
                                <img
                                    className="rounded-full w-52  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                                    src='/Team/2k21/person-icon.jpg'
                                    alt="" />
                            </a>
                            <div className="p-6" >
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Dr KRISHNA DEO PRASAD SINGH
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Designation: Associate Professor,
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Mechanical Engineering,NIT Jamshedpur
                                </p>
                                <p className="mb-2 text-base text-neutral-600 text-center" style={{ color: mode === 'dark' ? 'lightgrey' : '' }}>
                                    Kdpsingh.me@nitjsr.ac.in
                                </p>
                                <a href="" className='flex justify-center' style={{ color: mode === 'dark' ? 'lightgrey' : '' }}><BsPerson size={30} /></a>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center flex-wrap w-full mb-28'>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k21)}>Present Team</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k22)}>Batch 2k22</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k20)}>Batch 2k20</button>
                        <button className="sm:w-36 w-28 mx-5 my-2 px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700"
                            onClick={() => setItem(Data2k19)}>Batch 2k29</button>
                       
                    </div>

                    <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }} >
                        <TeamCard item={item} />

                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Team
