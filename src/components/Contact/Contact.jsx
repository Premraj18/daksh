import React, { useRef } from 'react'
import {BsTelephone } from 'react-icons/bs'
import { MdLocationPin, MdMail } from "react-icons/md";
import { motion,useInView } from 'framer-motion'

const textvariants = {
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

const Contact = () => {
    const ref = useRef()
    return (
        <section className="bg-stone-100 dark:bg-slate-800" id="contact">
            <motion.div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 hidden sm:block"
            >
                <div className="mb-4">
                    <motion.div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in <span className='text-lime-600'>Touch</span>
                        </h2>
                    </motion.div>
                </div>
                <div className="flex items-stretch justify-center">
                    <motion.div className="grid md:grid-cols-2"
                         variants={textvariants}
                         initial='initial'
                         whileInView='animate'
                    >
                        <motion.div className="h-full pr-6"
                           variants={textvariants}
                        >
                            <motion.p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400"
                                variants={textvariants}
                            >
                                className aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                sagittis ante, ac tincidunt sem venenatis ut.
                            </motion.p>
                            <motion.ul className="mb-6 md:mb-0">
                                <motion.li className="flex"
                                    variants={textvariants}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <MdLocationPin />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">National Institute of Technology Jamshedpur</p>
                                        <p className="text-gray-600 dark:text-slate-400">Adityapur, Jamshedpur, Jharkhand 831014</p>
                                    </div>
                                </motion.li>
                                <motion.li className="flex"
                                    variants={textvariants}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <BsTelephone/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                    </div>
                                </motion.li>
                                <motion.li className="flex mt-5 "
                                    variants={textvariants}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <MdMail/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Mail</h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mail: example@gmail.com</p>
                                    </div>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                        <motion.div className="card h-fit max-w-6xl p-5 md:p-12" id="form"
                            variants={textvariants}
                        >
                            <motion.h2 className="mb-4 text-2xl font-bold" variants={textvariants}>Ready to Get Started?</motion.h2>
                            <motion.form id="contactForm">
                                <motion.div className="mb-6">
                                    <motion.div className="mx-0 mb-1 sm:mb-4">
                                        <motion.div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                        </motion.div>
                                        <motion.div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="text-center" variants={textvariants}>
                                    <button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>


            <section className="bg-stone-100 sm:hidden" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                            Get in <span className='text-lime-600'>Touch</span>
                        </h2>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                className aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                sagittis ante, ac tincidunt sem venenatis ut.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex"
    
                             >
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <MdLocationPin />
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">National Institute of Technology Jamshedpur</p>
                                        <p className="text-gray-600 dark:text-slate-400">Adityapur, Jamshedpur, Jharkhand 831014</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <BsTelephone/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                    </div>
                                </li>
                                <li className="flex mt-5 ">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                        <MdMail/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Mail</h3>
                                        <p className="text-gray-600 dark:text-slate-400">Mail: example@gmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white" variants={textvariants}>Ready to Get Started?</h2>
                            <form id="contactForm">
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                    </div>
                                </div>
                                <div className="text-center" variants={textvariants}>
                                    <button type="submit" className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </section>
    )
}

export default Contact
