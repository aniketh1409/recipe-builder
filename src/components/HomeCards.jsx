import Card from './Card'
import React from 'react'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
          <h2 className="text-2xl font-bold">Catalogue</h2>
            <p className="mt-2 mb-4">
              Browse through our list of recipes
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-black"
            >
              Our Recipes
            </a>
          </Card>
          <Card bg = "bg-yellow-100">
          <h2 className="text-2xl font-bold">Mix and Match</h2>
            <p className="mt-2 mb-4">
              Enter you ingredients to give tailored recipes 
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
            >
              Generate Recipe
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards
