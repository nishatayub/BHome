'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import pin from '@/assets/images/pin.svg'

const Hero = () => {
  const [q, setQ] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    // Replace with real search/navigation logic
    // Could redirect to /properties?q=value or call an API
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
          {/* Left: text + search */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">Find your next place to call home</h1>
            <p className="mt-4 text-lg text-gray-600">Browse properties for rent and discover neighbourhoods that suit your lifestyle.</p>

            <form onSubmit={onSearch} className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <label htmlFor="search" className="sr-only">Search properties</label>
              <input
                id="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full sm:flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search city, address or property"
                aria-label="Search properties"
              />

              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Search</button>
            </form>

            <div className="mt-4">
              <a href="/properties" className="text-sm text-indigo-600 hover:underline">Or browse all properties →</a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80">
              <Image src={pin} alt="map pin illustration" width={320} height={320} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
