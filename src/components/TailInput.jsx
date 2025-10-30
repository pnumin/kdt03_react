import React from 'react'

export default function TailInput({type, name, ref}) {
  return (
    <div className='w-full'>
      <input type={type} name={name} 
                ref={ref}
                className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
    </div>
  )
}
