import React from 'react'
import { FiSearch, FiMapPin, FiHome, FiUsers } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Your Next Home,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Just a Click Away</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover your perfect rental property with BHome. Browse thousands of listings, 
              connect with trusted landlords, and find your ideal home today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 mb-12 max-w-3xl mx-auto border border-white/20 hover:shadow-blue-200/20 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Location */}
              <div className="relative flex-1">
                <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-300"
                />
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-400 whitespace-nowrap">
                <FiSearch className="h-5 w-5 mr-2" />
                Search Properties
              </button>
            </div>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                <FiHome className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">1000+</h3>
              <p className="text-blue-600 font-medium">Properties Listed</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                <FiUsers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">500+</h3>
              <p className="text-blue-600 font-medium">Happy Tenants</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                <FiMapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">50+</h3>
              <p className="text-blue-600 font-medium">Cities Covered</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-400 transform hover:scale-105">
              Browse Properties
            </button>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-lg transform hover:scale-105">
              List Your Property
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
