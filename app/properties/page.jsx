import React from 'react'
import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/database'
import Property from '@/models/Property'

const PropertiesPage = async () => {
  let properties = [];
  
  try {
    await connectDB();
    const propertiesData = await Property.find({}).lean();
    properties = JSON.parse(JSON.stringify(propertiesData));
  } catch (error) {
    console.error('Error fetching properties:', error);
    // Return empty array if DB is not connected
    properties = [];
  }

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {
          properties.length === 0 ? (
            <p className="text-center text-gray-500"> No Properties Found. Please ensure MongoDB is connected. </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id.toString()} property={property} />
              ))}
          </div>
          )
        }
        
          </div>
          </section>
  )
}

export default PropertiesPage
