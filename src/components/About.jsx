import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import myContext from '../context/MyContext'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    const ref = useRef()
    const context = useContext(myContext)
    const { toggleMode, mode } = context

    return (
        <section className="flex items-center bg-stone-100 xl:h-screen font-poppins " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', }}>
            <motion.div className="justify-center flex-1 max-w-6xl py-4 mx-auto md:px-6 hidden sm:block"
                variants={variants}
                initial='initial'
                whileInView='animate'
            >
                <div className="flex flex-wrap ">
                    <motion.div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0" variants={variants}>
                        <div className="relative lg:max-w-md">
                            <motion.img src="/about.jpg" alt="aboutimage"
                                className="relative z-10 object-cover w-full rounded h-96" variants={variants} />
                            <motion.div
                                className="absolute bottom-0 right-0 z-10 p-6 bg-white border-4 border-lime-600 rounded shadow dark:border-lime-500 lg:-mb-8 lg:-mr-11 sm:p-6  " style={{ backgroundColor: mode === 'dark' ? '#3b3f47' : '', color: mode === 'dark' ? 'lightgray' : '', }}>
                                <p className="text-xl font-semibold md:w-72">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        className="absolute top-0 left-0 w-16 h-16 text-lime-600 dark:text-gray-300 opacity-10"
                                        viewBox="0 0 16 16" variants={variants}>
                                        <path
                                            d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                        </path>
                                    </svg> We Work Together, Perform Together, Achieve Together
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 " variants={variants}>
                        <motion.div className="pl-4 mb-6 border-l-4 border-lime-600 " variants={variants}>
                            <span className="text-sm text-gray-600 uppercase " style={{ color: mode === 'dark' ? 'white' : '', }}>Who we are?</span>
                            <h1 className="mt-2 text-3xl font-semibold text-lime-600 md:text-5xl ">
                                About Us
                            </h1>
                        </motion.div>
                        <motion.p className="mb-6 text-base leading-7 text-gray-500 " variants={variants} style={{ color: mode === 'dark' ? 'lightgrey' : '', }}>
                            Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                            We also proudly claims the first position as the official club at NIT Jamshedpur.
                            Team Daksh was started in the year 2009 by a small group of students who have their
                            own determination to Explore the mechanism of ATVs. Every year we participates in
                            BAJA SAE and holds top position among all the teams. Our Team under the guidance
                            of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                            from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                            with the electrifying power of electricity.
                        </motion.p>
                        <motion.a href="#"
                            className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700" variants={variants}>
                            Learn more
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            <section className="flex items-center bg-stone-100 xl:h-screen font-poppins sm:hidden" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', }}>
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 "
                >
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative lg:max-w-md">
                                <img src="/about.jpg" alt="aboutimage"
                                    className="relative z-10 object-cover w-full rounded h-96" />
                                <div
                                    className="absolute bottom-0 right-0 z-10 p-6 bg-white border-4 border-lime-600 rounded shadow dark:border-lime-500 lg:-mb-8 lg:-mr-11 sm:p-8  " style={{ backgroundColor: mode === 'dark' ? '#3b3f47' : '', color: mode === 'dark' ? 'lightgray' : '', }}>
                                    <p className="text-xl font-semibold md:w-72" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            className="absolute top-0 left-0 w-16 h-16 text-lime-600 dark:text-gray-300 opacity-10"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                            </path>
                                        </svg> We Work Together, Perform Together, Achieve Together
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="pl-4 mb-6 border-l-4 border-lime-600 ">
                                <span className="text-sm text-gray-600 uppercase" style={{ color: mode === 'dark' ? 'white' : '', }}>Who we are?</span>
                                <h1 className="mt-2 text-3xl font-semibold text-lime-600 md:text-5xl ">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500" style={{ color: mode === 'dark' ? 'lightgray' : '', }}>
                                Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                                We also proudly claims the first position as the official club at NIT Jamshedpur.
                                Team Daksh was started in the year 2009 by a small group of students who have their
                                own determination to Explore the mechanism of ATVs. Every year we participates in
                                BAJA SAE and holds top position among all the teams. Our Team under the guidance
                                of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                                from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                                with the electrifying power of electricity.
                            </p>
                            <a href="#"
                                className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default About
