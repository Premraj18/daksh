import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsFillCloudSunFill, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import myContext from '../context/MyContext'
import {motion} from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flex flex-col w-full justify-center items-center space-y-8 my-5">
                    <Link to={'/'} className="text-sm font-medium text-gray-700 hover:text-lime-600" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      HOME
                    </Link>
                    <Link to={'participation'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Our Participation
                    </Link>
                    <Link to={'/achivements'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      ACHIEVEMENTS
                    </Link>
                    <Link to={'/gallery'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      GALLERY
                    </Link>
                    <Link to={'/ourteam'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      OUR TEAM
                    </Link>
                    <Link to={'/sponser'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      SPONSOR US
                    </Link>
                    <Link to={'/conatct'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      CONTACT US
                    </Link>
                  </div>
                  <div className="flex gap-5 items-center justify-center pt-10">
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsInstagram size={25} /></a>
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsFacebook size={25} /></a>
                    <a href="" className='xl:w-12 hover:text-lime-600'><BsLinkedin size={25} /></a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white h-20">
        {/* <p className="flex h-5 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav aria-label="Top" className="h-full bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-20 items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="flex justify-between w-full">
                <div className="ml-4 flex lg:ml-0">
                  <Link to={'/'} className='flex'>
                    <div className="flex ">
                      <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Team<span className='text-lime-600'>Daksh</span></h1>
                    </div>
                  </Link>
                </div>

                {/* <div className="ml-auto flex items-center"> */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center justify-center xl:space-x-8 lg:space-x-6">

                  <Link to={'/'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    HOME
                  </Link>
                  <Link to={'participation'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    OUR PARTICIPATION
                  </Link>
                  <Link to={'/achivements'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    ACHIEVEMENTS
                  </Link>
                  <Link to={'/gallery'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    GALLERY
                  </Link>
                  <Link to={'/ourteam'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    OUR TEAM
                  </Link>
                  <Link to={'/sponser'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    SPONSOR US
                  </Link>
                  <Link to={'/conatct'} className="text-sm font-medium text-gray-700 hover:text-lime-600 hover:scale-110" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    CONTACT US
                  </Link>

                </div>

                {/* Search */}
                <div className="flex lg:ml-6 items-center">
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsInstagram size={23} /></a>
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsFacebook size={23} /></a>
                  <a href="" className='hidden lg:inline xl:w-12 lg:w-10 hover:text-lime-600'><BsLinkedin size={23} /></a>
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </header>
    </div >
  )
}