import React, { useContext } from 'react'
import Layout from '../components/Layout'
import myContext from '../context/MyContext'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Achivement from '../components/Achivement'
import SponsorCrausal from '../components/sponser/SponserCrausal'
import ClubActivity from '../components/CLubActivity/ClubActivity'
import Contact from '../components/Contact/Contact'

const Home = () => {
  const context = useContext(myContext)
  const { mode, toggleMode } = context;
  return (
    <Layout>
      {/* <HeroSection/>
      <About/>
      <Achivement/> */}
      <ClubActivity/>
      {/* <SponsorCrausal/>
      <Contact/> */}
    </Layout>
  )
}

export default Home
