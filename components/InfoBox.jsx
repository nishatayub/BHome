import React from 'react'

const InfoBox = ({ 
    heading,
    backgroundColor = 'bg-color-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children
 }) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor} font-bold`}>{heading}</h2>
            <p className={`${textColor} mt-2 mb-4`}>
              {children}
            </p>
            <a
              href={ buttonInfo.link }
              className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
            >
              Add Property
            </a>
          </div>
  )
}

export default InfoBox
