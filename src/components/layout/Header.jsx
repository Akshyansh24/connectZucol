
import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
} from 'react-bootstrap';
import MainImage from '../../assets/img/MainImage.png';
import ZucolLogo from '../../assets/img/ZucolLogo.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" style={{ height: '80px' }}>
        <Container fluid className="px-3">
          <Navbar.Brand href="#" className="d-flex align-items-center me-4">
            <img
              src={ZucolLogo}
              alt="Zucol Logo"
              style={{ height: '185px', width: 'auto', objectFit: 'contain' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto p-3 ">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Our Experience</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>

            <Button variant="primary" className="px-4" style={{ backgroundColor: "white", color: "#2d2f7e", borderRadius: "50px" }}>
              Search
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Swiper

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><div
          style={{
            backgroundImage: `url(${MainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(47, 47, 47, 0.6)',
              padding: '120px 0',
            }}
          >
            <Container>
              <Row>
                <Col md={8}>
                  <h1 className="display-5 fw-bold text-start">
                    OUTSOURCING <span className="fw-normal">Services</span>
                  </h1>
                  <p className="mt-3 fs-5 text-start">
                    We are an agency that believe in the power of digital to
                    transform your business. Whether it be a new website, marketing
                  </p>
                  <div className="d-flex gap-3 mt-4">
                    <Button variant="primary" className="px-4">
                      Contact Us
                    </Button>
                    <Button variant="light" className="px-4 text-primary">
                      Join Us
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${MainImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'white',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(47, 47, 47, 0.6)',
                padding: '120px 0',
              }}
            >
              <Container>
                <Row>
                  <Col md={8}>
                    <h1 className="display-5 fw-bold text-start">
                      OUTSOURCING <span className="fw-normal">Services</span>
                    </h1>
                    <p className="mt-3 fs-5 text-start">
                      We are an agency that believe in the power of digital to
                      transform your business. Whether it be a new website, marketing
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <Button variant="primary" className="px-4">
                        Contact Us
                      </Button>
                      <Button variant="light" className="px-4 text-primary">
                        Join Us
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div></SwiperSlide>

      </Swiper>



      {/* <div
        style={{
          backgroundImage: `url(${MainImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(47, 47, 47, 0.6)',
            padding: '120px 0',
          }}
        >
          <Container>
            <Row>
              <Col md={8}>
                <h1 className="display-5 fw-bold text-start">
                  OUTSOURCING <span className="fw-normal">Services</span>
                </h1>
                <p className="mt-3 fs-5 text-start">
                  We are an agency that believe in the power of digital to
                  transform your business. Whether it be a new website, marketing
                </p>
                <div className="d-flex gap-3 mt-4">
                  <Button variant="primary" className="px-4">
                    Contact Us
                  </Button>
                  <Button variant="light" className="px-4 text-primary">
                    Join Us
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div> */}

      <div
        className="py-4"
        style={{
          background: 'linear-gradient(to right,rgb(183, 184, 185), #f4f3fc)',
          borderTop: '1px solid #ccc',
          borderBottom: '1px solid #ccc',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={2} className="fw-bold text-primary" style={{ fontSize: '18px' }}>
              Services Offered in :
            </Col>
            <Col md={10}>
              <div className="d-flex flex-wrap gap-4">
                {[
                  { flag: '🇬🇧', country: 'UK' },
                  { flag: '🇦🇺', country: 'Australia' },
                  { flag: '🇦🇪', country: 'Dubai' },
                  { flag: '🇻🇳', country: 'Vietnam' },
                  { flag: '🇦🇪', country: 'UAE' },
                  { flag: '🇸🇬', country: 'Singapore' },
                ].map(({ flag, country }, index) => (
                  <div key={index} className="d-flex align-items-center gap-2">
                    <span style={{ fontSize: '1.5rem' }}>{flag}</span>
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>


      </div>





    </>
  );
};

export default Header;




