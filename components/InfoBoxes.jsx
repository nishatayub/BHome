import React from 'react'
import InfoBox from './InfoBox'
import { FaSearch, FaMapMarkerAlt, FaCheckCircle, FaLock } from 'react-icons/fa'

export default function InfoBoxes() {
  const items = [
    {
      icon: <FaSearch className="w-5 h-5" />,
      title: 'Easy search',
      desc: 'Search by city, neighborhood or address with smart suggestions.'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Local listings',
      desc: 'Browse verified properties located near the best amenities.'
    },
    {
      icon: <FaCheckCircle className="w-5 h-5" />,
      title: 'Verified hosts',
      desc: 'All listings are verified for quality and accuracy.'
    },
    {
      icon: <FaLock className="w-5 h-5" />,
      title: 'Secure payments',
      desc: 'Payments are handled securely and reliably.'
    }
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <InfoBox key={i} icon={it.icon} title={it.title}>
              {it.desc}
            </InfoBox>
          ))}
        </div>
      </div>
    </section>
  )
}
