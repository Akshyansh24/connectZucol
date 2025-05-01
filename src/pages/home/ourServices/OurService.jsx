import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import { serviceData } from '../../../data.js'

function OurService() {

    
  return (
    <section className='service-section p-40'>
         <div className="heading text-center">
            <h2>Our Service</h2>
         </div>
         <Row>

         {serviceData.map((card) => (
          <ServiceCard 
            key={card.id} 
            title={card.title} 
            content={card.content} 
          />
        ))}
        <Col lg={12} className='text-center mt-4'>
            <Button className='btn-primary'>Read More</Button>
        </Col>
         </Row>
    </section>
  )
}

export default OurService