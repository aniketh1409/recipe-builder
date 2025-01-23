import React from 'react'

const Hero = ({title = "Get instant recipes", subtitle = "Leave the thinking to us!"}) => { 
  return (
    <section className="bg-yellow-500 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center font-sans">
          <h1
            className="text-4xl font-extrabold text-gray-800 sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-gray-800">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
    
  )
}

export default Hero
