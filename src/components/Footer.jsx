import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../context/MyContext'

export default function Footer() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 pt-16 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center" >
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 lg:text-xl" style={{ color: mode === 'dark' ? 'white' : '' }}>Quick Link</h2>
                        <nav className="list-none mb-5 lg:text-lg">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>About</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Team</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Achivements</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact us</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase lg:text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>Manufacturing</h2>
                        <nav className="list-none mb-10">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam odit dignissimos doloremque ea error, eos in esse distinctio alias. Vero!</p>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center md:ml-28">
                            <img src="../../public/nitjsrlogo.png" alt="" className='w-24' />
                        <nav className="list-none mb-10">
                            <li>
                                <p className="text-gray-600 hover:text-gray-800 lg:text-xl text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>National Institute of Technology Jamshedpur</p>
                            </li>
                            <li>
                                <p className="text-gray-600 hover:text-gray-800 lg:text-lg text-center" style={{ color: mode === 'dark' ? 'white' : '' }}>Adityapur, Jamshedpur, Jharkhand 831014</p>
                            </li>
                        </nav>
                    </div>
                </div>
                <div className='lg:text-lg text-black'>
                    <p style={{ color: mode === 'dark' ? 'white' : '', }}>Designed By: <a href="" className='text-lime-600'>Abcdefgh</a> </p>
                </div>
            </div>

            <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Team<span className='text-lime-600'>Daksh</span></h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 NIT Jamshedpur —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.teamdaksh.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}
