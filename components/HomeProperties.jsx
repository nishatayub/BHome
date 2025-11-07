import React from 'react'
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const HomeProperties = async () => {
  let recentProperties = [];
  
  try {
    await connectDB();
    const propertiesData = await Property.find({}).lean();
    const properties = JSON.parse(JSON.stringify(propertiesData));
    recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0, 3);
  } catch (error) {
    console.error('Error fetching properties:', error);
    recentProperties = [];
  }

  return (
    <>
     <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? 
            (<p className="text-center text-gray-500">No Properties Found. Please ensure MongoDB is connected.</p>) : recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
            ))}
            </div>
            </div>
            </section>
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        href="/properties"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Properties </Link>
    </section>
    </>
  )
}

export default HomeProperties
