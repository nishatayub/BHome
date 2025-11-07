import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaBath, FaBed, FaRulerCombined, FaMoneyBill, FaMapMarker, FaArrowLeft, FaCheck } from 'react-icons/fa';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const PropertyPage = async ({ params }) => {
  const { id } = (await params);
  
  let property = null;
  
  try {
    await connectDB();
    const propertyDoc = await Property.findById(id).lean();
    
    if (!propertyDoc) {
      return notFound();
    }
    
    property = JSON.parse(JSON.stringify(propertyDoc));
  } catch (error) {
    console.error('Error fetching property:', error);
    return notFound();
  }

  const getRateDisplay = () => {
    const { rates } = property;
    if (!rates) return 'Contact for rates';
    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
    return 'Contact for rates';
  };

  // Helper function to get the correct image URL
  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '/images/properties/default.jpg';
    
    // Check if it's a Cloudinary URL or HTTP/HTTPS URL
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    
    // If it's a local filename, prepend the local path
    return `/images/properties/${imageUrl}`;
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      <section className="bg-blue-50 pb-10">
        <div className="container m-auto px-6">
          {/* Property Header */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-gray-500 mb-2 text-sm uppercase tracking-wide">{property.type}</div>
                <h1 className="text-4xl font-bold mb-3">{property.name}</h1>
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarker className="text-orange-700 mr-2" />
                  <p className="text-orange-700">
                    {property.location.street}, {property.location.city}{' '}
                    {property.location.state} {property.location.zipcode}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right">
                <div className="text-3xl font-bold text-blue-500">
                  {getRateDisplay()}
                </div>
                <div className="flex gap-4 mt-2 text-gray-600">
                  <span className="flex items-center">
                    <FaBed className="mr-1" /> {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <FaBath className="mr-1" /> {property.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <FaRulerCombined className="mr-1" /> {property.square_feet} sqft
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid - Images Left, Details Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Images */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
                <div className="space-y-3 p-3">
                  {property.images && property.images.length > 0 ? (
                    property.images.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={getImageUrl(image)}
                          alt={`${property.name} - Image ${index + 1}`}
                          className="object-cover w-full h-[350px] hover:scale-105 transition-transform duration-300"
                          width={800}
                          height={350}
                          priority={index === 0}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="bg-gray-200 h-[350px] rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">No images available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* Rates */}
              {(property.rates?.nightly || property.rates?.weekly || property.rates?.monthly) && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaMoneyBill className="mr-2 text-green-600" />
                    Rates & Pricing
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {property.rates?.nightly && (
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Nightly</div>
                        <div className="text-2xl font-bold text-blue-500">
                          ${property.rates.nightly.toLocaleString()}
                        </div>
                      </div>
                    )}
                    {property.rates?.weekly && (
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Weekly</div>
                        <div className="text-2xl font-bold text-blue-500">
                          ${property.rates.weekly.toLocaleString()}
                        </div>
                      </div>
                    )}
                    {property.rates?.monthly && (
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">Monthly</div>
                        <div className="text-2xl font-bold text-blue-500">
                          ${property.rates.monthly.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description || 'No description available.'}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Amenities</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <FaCheck className="text-green-600 mr-2 flex-shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Property Details */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Property Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-semibold">{property.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Square Feet</span>
                    <span className="font-semibold">{property.square_feet.toLocaleString()} sqft</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-semibold">{property.beds}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-semibold">{property.baths}</span>
                  </div>
                </div>
              </div>

              {/* Contact Property Manager */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Contact Property Manager</h3>
                <div className="space-y-3">
                  {property.seller_info?.name && (
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Name</p>
                      <p className="font-semibold text-lg">{property.seller_info.name}</p>
                    </div>
                  )}
                  {property.seller_info?.email && (
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Email</p>
                      <a 
                        href={`mailto:${property.seller_info.email}`} 
                        className="font-semibold hover:underline flex items-center"
                      >
                        {property.seller_info.email}
                      </a>
                    </div>
                  )}
                  {property.seller_info?.phone && (
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Phone</p>
                      <a 
                        href={`tel:${property.seller_info.phone}`} 
                        className="font-semibold hover:underline flex items-center"
                      >
                        {property.seller_info.phone}
                      </a>
                    </div>
                  )}
                  <button className="w-full mt-4 bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
