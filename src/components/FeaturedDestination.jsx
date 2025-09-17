import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelRoom from './HotelRoom'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate =useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
<Title title='Welcome to Hotel Booking' subTitle='Step into a world of comfort and luxury.Experience the best of hositality.unwind,recharge and create long lasting memories with us'/>
        <div className='flex flex-wrap item-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelRoom key={room._id} room={room} index={index} />
            ))}
        </div>

        <button onClick={()=> {navigate('/rooms'); scrollTo(0,0)}}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 roundeed bg-white hover:bg-gray-50 transition-all cursor-pointer'>
          View all Rooms
        </button>
    </div>
  )
}

export default FeaturedDestination