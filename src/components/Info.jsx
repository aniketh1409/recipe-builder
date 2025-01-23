import React from 'react'

const Info = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <p className="text-gray-400">
              I made this page because I wanted to combine my love for technology with the joy of cooking. As someone who's always looking for ways to simplify and organize things, I thought, why not create a platform where anyone can build and customize recipes effortlessly?

This page is designed for anyone who loves experimenting in the kitchen or simply needs a convenient way to store and share their culinary creations. I wanted to make it intuitive, fun, and practical—a space where you can express your creativity with food.

Whether you're a home chef, a foodie, or someone just starting out, I hope this page inspires you to cook, create, and share amazing recipes.              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400">
                Email: info@recipes.com
              </p>
              <p className="text-gray-400">
                Phone: +1 234 567 890
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Info
