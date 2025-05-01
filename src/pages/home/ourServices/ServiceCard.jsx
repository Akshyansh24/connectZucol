import React from 'react'
import { Col } from 'react-bootstrap'


function ServiceCard({title, content}) {
  return (
    <Col lg={4}>
       <div className='serviceCard'>
       <h3>{title}</h3>
       <p>{content}</p>
       </div>
    </Col>
  )
}

export default ServiceCard