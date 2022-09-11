import React from 'react'
import { Link } from 'react-router-dom'

export default function 
({title}) {
  return (
    <div className='inline-block p-2 mt-4 font-serif'>
        
        <Link to="hr" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 text-black">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
            <p className="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </Link>

    </div>
  )
}
