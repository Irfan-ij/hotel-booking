import React from 'react'
import { facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'

const AllRooms = () => {
    const navigate =useNavigate()
  return (
    <div >
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 ml-17'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2 '>take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories. </p>
        </div>
        </div>
        {roomsDummyData.map((room)=>(
            <div key={room._id} className='flex flex-col items-center md:flex-row py-10 gap-6   last:pb-30 last:border-0 ml-95'>
                <img onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                src={room.images[0]} alt="hotel-img" title='View Room Details' className=' max-h-65 md:w-75 rounded-xl showdow-lg  object-cover  cursor-pointer' />
                <div className='md:w-1/2 flex flex-col gap-2 '>
                    
                    <p onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0,0)}}
                    className='text-gray-800 text-3xl font-playfair cursor-pointer '>{room.roomType}</p>
                    <div className='flex item-center'>
                        <StarRating/>
                        <p className='ml-2'>220+ reviews</p>
                    </div>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item ,index)=>(
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#222]/60'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text=xs'>{item}</p>
                            </div>

                        ))}
                    </div>
                    <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default AllRooms