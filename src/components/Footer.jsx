import React from 'react'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-x-hidden mt-10 shadow-xl">
        <div className=' bg-white z-50'>
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-14 p-8 text-sm'>
                <div className='md:w-1/3'>
                    <img className="w-24 h-10" src={Logo} alt="DocSync Logo" />
                    <p className="mt-2">Your trusted partner for <br/>easy and reliable doctor appointments.</p>
                </div>
                <div className='md:w-1/3'>
                    <p className='font-semibold mb-2'>COMPANY</p>
                    <ul className='space-y-1'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>  
                    </ul>
                </div>
                <div className='md:w-1/3'>
                    <p className='font-semibold mb-2'>GET IN TOUCH</p>
                    <ul className='space-y-1'>
                        <li>+94 11 263 2342</li>
                        <li>docsync@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr className="my-4"/>
            <p className="text-center text-sm pb-4">© 2025 DocSync. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
