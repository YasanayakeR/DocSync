import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16" id="speciality">
      
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-black">Explore Specialities</h1>
      
      {/* Subtitle */}
      <p className="sm:w-1/3 text-center text-sm text-gray-700">
        Select a speciality to connect with the right doctor.<br />
        Your care begins here.
      </p>

      {/* Speciality Icons */}
      <div className="flex sm:justify-center gap-8 pt-8 w-full overflow-x-scroll scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link 
          onClick={()=>scrollTo(0,0)}
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className="flex flex-col items-center min-w-[100px] text-xs cursor-pointer "
          >
           <img 
  src={item.image} 
  alt={item.speciality}
  className="w-32 h-32 sm:w-32 mb-2 object-contain rounded-full border hover:scale-110 transition"
/>

            <p className="mt-2 text-gray-800 font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
