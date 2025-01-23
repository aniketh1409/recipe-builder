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
                A recipe sharing platform dedicated to bringing you the best recipes from around the world.
              </p>
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
