import React from 'react'
import { FiSearch, FiMapPin, FiHome, FiUsers } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#483C32] via-[#36454F] to-[#2F2F2F] text-[#FFFDD0] py-20 px-4 sm:px-6 lg:px-8 -mt-1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Next Home,{' '}
              <span className="text-[#D2B48C]">Just a Click Away</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F5DC] mb-8 max-w-3xl mx-auto">
              Discover your perfect rental property with BHome. Browse thousands of listings, 
              connect with trusted landlords, and find your ideal home today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-[#FFFDD0] rounded-2xl shadow-2xl p-6 mb-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#483C32]" />
                <input
                  type="text"
                  placeholder="Enter location..."
                  className="w-full pl-10 pr-4 py-3 border border-[#D2B48C] rounded-lg focus:ring-2 focus:ring-[#483C32] focus:border-transparent text-[#2F2F2F]"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <FiHome className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#483C32]" />
                <select className="w-full pl-10 pr-4 py-3 border border-[#D2B48C] rounded-lg focus:ring-2 focus:ring-[#483C32] focus:border-transparent text-[#2F2F2F] appearance-none">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Condo</option>
                  <option>Studio</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="relative">
                <select className="w-full px-4 py-3 border border-[#D2B48C] rounded-lg focus:ring-2 focus:ring-[#483C32] focus:border-transparent text-[#2F2F2F] appearance-none">
                  <option>Price Range</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,000</option>
                  <option>$2,000 - $3,000</option>
                  <option>$3,000+</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-[#36454F] hover:bg-[#2F2F2F] text-[#FFFDD0] font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center">
                <FiSearch className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#36454F] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiHome className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-[#D2B48C]">Properties Listed</p>
            </div>
            <div className="text-center">
              <div className="bg-[#36454F] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiUsers className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-[#D2B48C]">Happy Tenants</p>
            </div>
            <div className="text-center">
              <div className="bg-[#36454F] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-[#D2B48C]">Cities Covered</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFFDD0] text-[#483C32] font-semibold py-3 px-8 rounded-lg hover:bg-[#F5F5DC] transition duration-200 shadow-lg">
              Browse Properties
            </button>
            <button className="border-2 border-[#FFFDD0] text-[#FFFDD0] font-semibold py-3 px-8 rounded-lg hover:bg-[#FFFDD0] hover:text-[#483C32] transition duration-200">
              List Your Property
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#36454F] opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#D2B48C] opacity-10"></div>
      </div>
    </section>
  )
}

export default Hero
