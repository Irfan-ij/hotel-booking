import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelRoom = ({room,index}) => {
  return (
    <Link to={'/rooms/'+ room._id} onClick={()=> scrollTo(0,0) } key={room._id}
    className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-xl'>
      <img src={room.images[0]} alt=""  />

       <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray font-mendium rounded-full'>Best seller</p>
      <div className='p-4 pt-5'>
        <div className='flex item-center justify-between'>
          <p className='font-playfair text-xl font-medium text-gray-800'>{room.roomType}</p>
          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt='star-icon'/>4.5
          </div>
        </div>
        <div className='flex item-cenrer justify-between mt-4'>
          <p><span className='text-xl text-gray-800'> ${room.pricePerNight}</span> /night</p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pinter'>
            Book now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelRoom