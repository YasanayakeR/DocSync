import React from 'react'
import HeaderImage from '../assets/header.png'   

const Header = () => {
  return (
    <div className="relative bg-[#20B2AA] mt-20 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-hidden h-full">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-10 lg:px-20 pt-24 pb-40 w-full">
        
        {/* Left Side Text */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Schedule Your Visit <br /> With Expert Doctors
          </p>
          <div>
            <p className="text-gray-100 mt-2 text-lg">
              Connect with experienced doctors in just a few clicks. <br />
              Get trusted medical advice, prescriptions, and support <br />
              anytime, anywhere.
            </p>
          </div>

          {/* Book Now Button (centered + bordered) */}
         <div className="w-full flex justify-center md:justify-start">
  <a 
    href="#speciality" 
    className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#20B2AA] transition font-medium flex items-center"
  >
    Book Now
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
</div>
          
        </div>
      </div>

      {/* Image at Bottom */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 flex justify-center">
        <img
          className="w-full max-w-[600px] h-auto object-contain"
          src={HeaderImage}
          alt="header image"
        />
      </div>
    </div>
  )
}

export default Header
