import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-[#222]">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                
                <div className="max-w-96">
                    <a className="flex items-center gap-2">
                        <img src={"https://www.svgrepo.com/show/394205/hotel.svg"} alt="" className='h-12 invert'/>
                    <h3 className={`font-semibold text-xl ml-0 cursor-default text-white `}>Booking</h3>
                    </a>
                    
                    <p className="mt-6 text-sm text-gray-500">
                       Luxury is not about possessions — it is about how you feel when you are here. Great journeys begin with great stays.Every stay is a story — let yours be unforgettable.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <a href="#">
                            <img src={"https://www.svgrepo.com/show/452229/instagram-1.svg"} alt="instagram-icom" className='w-6' />
                        </a>
                        <a href="#">
                            <img src={"https://www.svgrepo.com/show/475647/facebook-color.svg"} alt="facebook-icon" className='w-6' />
                        </a>
                        <a href="#">
                           <img src={"https://www.svgrepo.com/show/475689/twitter-color.svg"} alt="x" className='w-6' />
                        </a>
                        <a href="#">
                           <img src={"https://www.svgrepo.com/show/448234/linkedin.svg"} alt="linkedin-icon" className='w-6' />
                        </a>
                    </div>
                </div>
        
                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between ml-15">
                    <div>
                        <h2 className="font-playfair text-white mb-5">SUPPORT</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Information </a></li>
                            <li><a href="#">Cancellation Opation</a></li>
                            <li><a href="#">contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-playfair text-white mb-5">HOTEL</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </div>
                    </div>
                </div>
        
            </div>
            <p className="py-4 text-center text-xs md:text-sm text-gray-500">
                Copyright 2024 © <a>Hotel Booking</a>. All Right Reserved.
            </p>
        </footer>
    </div>
  )
}

export default Footer