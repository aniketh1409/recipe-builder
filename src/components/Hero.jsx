import React from 'react'
import backgroundImage from '../assets/images/hero.jpg'

const Hero = ({title = "Get instant recipes", subtitle = "Leave the thinking to us!"}) => { 
  return (
    <section className="relative bg-cover bg-center py-20 mb-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center font-sans">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero