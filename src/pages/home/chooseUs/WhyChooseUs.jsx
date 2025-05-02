
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WhyChooseUs = () => {
  return (
    <div style={{ backgroundColor: '#2E86F7', padding: '50px 0', color: 'white' }}>
      <Container fluid="md">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Why Choose Us</h2>
            <hr style={{ width: '50%', borderTop: '3px solid white' }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui.
              Purus diam elit vitae scelerisque sem rutrum ut pharetra, a. Venenatis tellus vivamus scelerisque egestas lacus faucibus cursus. Eu leo elementum hendrerit gravida et ultricies at. Ut elementum accumsan ut elit. Egestas sit senectus et blandit. Ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui.
              Purus diam elit vitae scelerisque sem rutrum ut pharetra, a. Venenatis tellus vivamus scelerisque egestas lacus faucibus cursus. Eu leo elementum hendrerit gravida et ultricies at. Ut elementum accumsan ut elit. Egestas sit senectus et blandit. Ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui.
              Purus diam elit vitae scelerisque sem rutrum ut pharetra, a. Venenatis tellus vivamus scelerisque egestas lacus faucibus cursus. Eu leo elementum hendrerit gravida et ultricies at. Ut elementum accumsan ut elit. Egestas sit senectus et blandit. Ut.
            </p>
          </Col>

          <Col md={6} className="d-flex justify-content-end p-0">
            <div style={{
              backgroundColor: '#f2f2f2',
              borderRadius: '60px 0 0 60px',
              height: '300px',
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_square_(2017).svg"
                alt="YouTube"
                style={{ width: '60px', height: '60px' }}
              /> */}
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="60" fill="#FF0000" rx="10" />
                <path d="M50 30L35 40V20L50 30Z" fill="white" />
              </svg>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;

