import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const foundRoom = roomsDummyData.find(r => r._id === id)
    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.images[0])
    }
  }, [id])

  return (
    room && (
      <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'> 
          <h1 className='text-3xl md:text-4xl font-playfair'>
            {room.hotel.name} <span className='font-inner text-sm'>({room.roomType})</span>
          </h1>
          <p className='text-xs font-inner py-1.5 px-3 text-[#222] bg-red-500/75 rounded-full'>15% Off</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>350+ reviews</p>
        </div>
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="room image"
                className='w-full rounded-xl shodow-lg object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image, index)=>(
                    <img onClick={()=>setMainImage(image)}
                     key={index} src={image} alt="room image" 
                     className={`w-full rounded-xl showdow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-red-500'}`}/>
                ))}
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div>
                <div className='flex flex-wrap items-center mb-6 gap-4'>
                    {room.amenities.map((item, index)=>(
                        <div key={index} className='flex items-cneter gap-2 px-3 py-2 rounded-lg bg-red-500/75'>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                            <p className='text-xs'>{item}</p>

                        </div>
                    ))}
                </div>
            </div>
                    <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.5)] p-6 rounded-xl mx-auto mt-16 max-w-6xl
'>
            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                <div className='flex flex-col'>
                    <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                    <input type="date" id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>

                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

                <div className='flex flex-col'>
                    <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                    <input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>

                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'>

                </div>

                <div className='flex flex-col'>
                    <label htmlFor="guests" className='font-medium'>Guests</label>
                    <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>

            </div>
            <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                Book Now
            </button>
        </form>
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec,index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                    <div>
                        <p className='text-base'>
                            {spec.title}
                        </p>
                        <p className='text-gray-500'>
                             {spec.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    )
  )
}

export default RoomDetails
