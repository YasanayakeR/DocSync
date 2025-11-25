import React from 'react'
import BannerImage from '../assets/BannerImage.png' 
import { useNavigate } from 'react-router-dom'

const Banner = () => {
       const navigate = useNavigate()
  return (
    <div className="relative bg-[#20B2AA] mt-20 w-full sm:w-[98%] md:w-[99%] lg:w-[99%] mx-auto overflow-hidden">
      {/* Content Section */}
     <div className="flex flex-col md:flex-row px-6 md:px-10 lg:px-20 pt-24 pb-10 md:pb-32 w-full">

        
        {/* Left Side Text */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
            Book Appointment <br /> With 100+ trusted Doctors<br/>across multiple specialties
          </p>
            <div className="w-full flex justify-center md:justify-start">
  <button onClick={()=>{navigate('/login');scrollTo(0,0) }} className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#20B2AA] transition font-medium flex items-center"
  >
   Create Account
  </button>
</div>
        </div>
          
          {/* Image at Bottom Right */}
      <div className="absolute bottom-5 right-10 top-0">
        <img
          className="w-[150px] md:w-[250px] lg:w-[350px] h-auto object-contain"
          src={BannerImage}
          alt="header image"
        />
      </div>
   
      </div> 
    </div>
    
  )
}

export default Banner
