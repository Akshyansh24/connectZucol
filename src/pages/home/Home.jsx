import React from 'react'
import OurService from './ourServices/OurService'
import WhyChooseUs from './chooseUs/WhyChooseUs'
import CounterSection from './counter/CounterSection'
import Certifications from './certification/Certifications'
import Testimonial from './testimonial/Testimonial'
import Banner from './banner/Banner'

function Home() {
  return (
    <>
    <Banner/>
        <OurService/>
        <WhyChooseUs/>
        <CounterSection/>
        <Certifications/>
        <Testimonial/>
    </>
  )
}

export default Home