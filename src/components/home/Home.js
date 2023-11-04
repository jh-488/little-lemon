import React from 'react'
import Heading from '../heading/Heading'
import { homeHeading } from '../data/Data'
import Specials from './specials/Specials'

const Home = () => {
  return (
    <>
      <Heading 
        title={homeHeading.title} 
        subtitle={homeHeading.subtitle} 
        text={homeHeading.text}
        btn={homeHeading.btn}
        image={homeHeading.image}
      />
      <Specials />
    </>
  )
}

export default Home
