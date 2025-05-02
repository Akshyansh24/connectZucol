
// import React from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Nav,
//   Navbar,
//   Form,
//   FormControl,
// } from 'react-bootstrap';
// import MainImage from '../../assets/img/MainImage.png';
// import ZucolLogo from '../../assets/img/ZucolLogo.png';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';


// const Header = () => {
//   return (
//     <>
//       <Navbar bg="primary" variant="dark" expand="lg" style={{ height: '80px' }}>
//         <Container fluid className="px-3">
//           <Navbar.Brand href="#" className="d-flex align-items-center me-4">
//             <img
//               src={ZucolLogo}
//               alt="Zucol Logo"
//               style={{ height: '185px', width: 'auto', objectFit: 'contain' }}
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse>
//             <Nav className="ms-auto p-3 ">
//               <Nav.Link href="#">About</Nav.Link>
//               <Nav.Link href="#">Our Experience</Nav.Link>
//               <Nav.Link href="#">Services</Nav.Link>
//               <Nav.Link href="#">Contact</Nav.Link>
//             </Nav>

//             <Button variant="primary" className="px-4" style={{ backgroundColor: "white", color: "#2d2f7e", borderRadius: "50px" }}>
//               Search
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>



//       <Swiper

//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log('slide change')}
//       >
//         <SwiperSlide><div
//           style={{
//             backgroundImage: `url(${MainImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             color: 'white',
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: 'rgba(47, 47, 47, 0.6)',
//               padding: '120px 0',
//             }}
//           >
//             <Container>
//               <Row>
//                 <Col md={8}>
//                   <h1 className="display-5 fw-bold text-start">
//                     OUTSOURCING <span className="fw-normal">Services</span>
//                   </h1>
//                   <p className="mt-3 fs-5 text-start">
//                     We are an agency that believe in the power of digital to
//                     transform your business. Whether it be a new website, marketing
//                   </p>
//                   <div className="d-flex gap-3 mt-4">
//                     <Button variant="primary" className="px-4">
//                       Contact Us
//                     </Button>
//                     <Button variant="light" className="px-4 text-primary">
//                       Join Us
//                     </Button>
//                   </div>
//                 </Col>
//               </Row>
//             </Container>
//           </div>
//         </div></SwiperSlide>
//         <SwiperSlide>
//           <div
//             style={{
//               backgroundImage: `url(${MainImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               color: 'white',
//             }}
//           >
//             <div
//               style={{
//                 backgroundColor: 'rgba(47, 47, 47, 0.6)',
//                 padding: '120px 0',
//               }}
//             >
//               <Container>
//                 <Row>
//                   <Col md={8}>
//                     <h1 className="display-5 fw-bold text-start">
//                       OUTSOURCING <span className="fw-normal">Services</span>
//                     </h1>
//                     <p className="mt-3 fs-5 text-start">
//                       We are an agency that believe in the power of digital to
//                       transform your business. Whether it be a new website, marketing
//                     </p>
//                     <div className="d-flex gap-3 mt-4">
//                       <Button variant="primary" className="px-4">
//                         Contact Us
//                       </Button>
//                       <Button variant="light" className="px-4 text-primary">
//                         Join Us
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>
//               </Container>
//             </div>
//           </div></SwiperSlide>

//       </Swiper>



//       {/* <div
//         style={{
//           backgroundImage: `url(${MainImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           color: 'white',
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'rgba(47, 47, 47, 0.6)',
//             padding: '120px 0',
//           }}
//         >
//           <Container>
//             <Row>
//               <Col md={8}>
//                 <h1 className="display-5 fw-bold text-start">
//                   OUTSOURCING <span className="fw-normal">Services</span>
//                 </h1>
//                 <p className="mt-3 fs-5 text-start">
//                   We are an agency that believe in the power of digital to
//                   transform your business. Whether it be a new website, marketing
//                 </p>
//                 <div className="d-flex gap-3 mt-4">
//                   <Button variant="primary" className="px-4">
//                     Contact Us
//                   </Button>
//                   <Button variant="light" className="px-4 text-primary">
//                     Join Us
//                   </Button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div> */}

//       <div
//         className="py-4"
//         style={{
//           background: 'linear-gradient(to right,rgb(183, 184, 185), #f4f3fc)',
//           borderTop: '1px solid #ccc',
//           borderBottom: '1px solid #ccc',
//         }}
//       >
//         <Container>
//           <Row className="align-items-center">
//             <Col md={2} className="fw-bold text-primary" style={{ fontSize: '18px' }}>
//               Services Offered in :
//             </Col>
//             <Col md={10}>
//               <div className="d-flex flex-wrap gap-4">
//                 {[
//                   { flag: '🇬🇧', country: 'UK' },
//                   { flag: '🇦🇺', country: 'Australia' },
//                   { flag: '🇦🇪', country: 'Dubai' },
//                   { flag: '🇻🇳', country: 'Vietnam' },
//                   { flag: '🇦🇪', country: 'UAE' },
//                   { flag: '🇸🇬', country: 'Singapore' },
//                 ].map(({ flag, country }, index) => (
//                   <div key={index} className="d-flex align-items-center gap-2">
//                     <span style={{ fontSize: '1.5rem' }}>{flag}</span>
//                     <span>{country}</span>
//                   </div>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//         </Container>


//       </div>





//     </>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import MainImage from '../../assets/img/MainImage.png';
import ZucolLogo from '../../assets/img/ZucolLogo.png';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const countries = [
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇦🇺', name: 'Australia' },
    { flag: '🇦🇪', name: 'Dubai' },
    { flag: '🇻🇳', name: 'Vietnam' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇸🇬', name: 'Singapore' }
  ];

  const heroSlides = [
    {
      title: "OUTSOURCING",
      subtitle: "Services",
      description: "We are an agency that believe in the power of digital to transform your business. Whether it be a new website, marketing",
      button1: "Contact Us",
      button2: "Join Us"
    },
    {
      title: "GLOBAL",
      subtitle: "Solutions",
      description: "Providing comprehensive outsourcing services across multiple industries worldwide.",
      button1: "Learn More",
      button2: "Get Quote"
    }
  ];

  return (
    <>

      <Navbar
        variant="dark"
        expand="lg"
        style={{ height: '80px', backgroundColor: '#2F80ED' }}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid className="px-3">
          <Navbar.Brand href="#" className="d-flex align-items-center me-4">
            <img
              src={ZucolLogo}
              alt="Zucol Logo"
              style={{ height: '185px', width: 'auto', objectFit: 'contain' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto p-3">
              <Nav.Link href="#" style={{ color: 'white' }}>About</Nav.Link>

              <NavDropdown
                title="Our Experience"
                id="experience-dropdown"
                style={{ color: 'white' }}
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="#action/3.1">Case Studies</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Client Testimonials</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Success Metrics</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Services"
                id="services-dropdown"
                style={{ color: 'white' }}
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="#action/3.1">IT Outsourcing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Customer Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Content Creation</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" style={{ color: 'white' }}>Contact</Nav.Link>
            </Nav>
            <Button
              variant="primary"
              className="px-4 ms-lg-3"
              style={{
                backgroundColor: "white",
                color: "#2d2f7e",
                borderRadius: "50px",
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Search
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: '550px' }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${MainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                height: '100%'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(47, 47, 47, 0.6)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Container>
                  <Row>
                    <Col md={8} className="ps-5">
                      <h1 className="display-5 fw-bold text-start">
                        {slide.title} <span className="fw-normal">{slide.subtitle}</span>
                      </h1>
                      <p className="mt-3 fs-5 text-start" style={{ maxWidth: '600px' }}>
                        {slide.description}
                      </p>
                      <div className="d-flex gap-3 mt-4">
                        <Button
                          variant="primary"
                          className="px-4"
                          style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                            backgroundColor: '#2F80ED'
                          }}
                        >
                          {slide.button1}
                        </Button>
                        <Button
                          variant="light"
                          className="px-4 text-primary"
                          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
                        >
                          {slide.button2}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div
        className="py-3 position-relative"
        style={{
          background: '#f4f4f4',
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        {/* blue blur effects */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '120px',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(47, 128, 237, 0.3) 0%, rgba(47, 128, 237, 0) 100%)',
            backdropFilter: 'blur(4px)',
            zIndex: 2
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '120px',
            height: '100%',
            background: 'linear-gradient(270deg, rgba(47, 128, 237, 0.3) 0%, rgba(47, 128, 237, 0) 100%)',
            backdropFilter: 'blur(4px)',
            zIndex: 2
          }}
        />

        <Container className="position-relative">
          <Row className="align-items-center">
            <Col md={2} className="fw-bold text-primary ps-5" style={{ fontSize: '18px', zIndex: 3 }}>
              Services Offered in:
            </Col>
            <Col md={10} style={{ zIndex: 1 }}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 15
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  },
                  992: {
                    slidesPerView: 5,
                    spaceBetween: 20
                  }
                }}
              >
                {countries.map(({ flag, name }, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="d-flex align-items-center justify-content-center gap-2 p-2"
                      style={{
                        height: '60px'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{flag}</span>
                      <span className="fw-medium">{name}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;