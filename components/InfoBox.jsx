import React from 'react'

export default function InfoBox({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{children}</p>
      </div>
    </div>
  )
}
