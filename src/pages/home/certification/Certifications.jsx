import React from 'react'
import { certificateData } from '../../../data.js'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
function Certifications() {
  return (
    <section className='certificate p-40' >
    <div className="heading mb-5">
      <h2>Our Certificate</h2>
    </div>
    <div>
      <Container>
      <Swiper
      spaceBetween={20}
      slidesPerView={4}>
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

export default Certifications