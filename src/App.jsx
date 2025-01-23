import Navbar from './components/navbar'
import Hero from './components/Hero'
import React from 'react'
import HomeCards from './components/HomeCards'
import TodaysRecommendation from './components/TodaysRecommendation'
import Info from './components/Info'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <TodaysRecommendation />
      <Info />
    </>
  )
}

export default App



