'use client'
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"

const override = {
    display: "block",
    margin: "100px auto"
}

const PropertiesLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader 
        color='#3b82f6'
        loading={true}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
      />
    </div>
  )
}

export default PropertiesLoading
