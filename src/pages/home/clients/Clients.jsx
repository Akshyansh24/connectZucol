import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { certificateData } from '../../../data.js'
import { Container } from 'react-bootstrap'
function Clients() {
  return (
      <section className='certificate p-40'>
        <div className="heading mb-5">
          <h2>Our Clients</h2>
        </div>
        <div>
          <Container>
          <Swiper spaceBetween={20} slidesPerView={5} 
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {certificateData.map((certificate, index) => (
            <SwiperSlide key={index}>
              <div className='text-center img-box'>
              <img src={certificate.img} alt={certificate.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          </Container>
        </div>
      </section>
  )
}

export default Clients