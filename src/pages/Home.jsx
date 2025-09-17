import React from 'react'
import Frontpage from '../components/Frontpage'
import FeaturedDestination from '../components/FeaturedDestination'
import Offer from '../components/Offer'
import Feedback from '../components/Feedback'

const Home = () => {
  return (
    <>
        <Frontpage/>
        <FeaturedDestination/>
        <Offer/>
        <Feedback/>
    </>
  )
}

export default Home