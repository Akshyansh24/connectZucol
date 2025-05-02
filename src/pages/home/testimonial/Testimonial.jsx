import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
// import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "/images/client-1.jpg",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa vitae sapien, nunc quisque. Id.",
    name: "Praveen Tailor",
    title: "Graphic Designer",
    rating: 5
  },
  {
    image: "/images/client-2.jpg",
    feedback:
      "Very satisfied with the services. The team is professional and responsive.",
    name: "Aarti Sharma",
    title: "Marketing Manager",
    rating: 5
  },
  {
    image: "/images/client-3.jpg",
    feedback:
      "Outstanding experience. Highly recommend for business support.",
    name: "Ravi Mehta",
    title: "Entrepreneur",
    rating: 5
  }
];

const Testimonial = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-end pe-2 mb-3">
          <h6 className="text-primary fw-bold">Happy Clients About Us</h6>
          <p className="text-muted">We are happy to hear from you</p>
        </div>

        <Carousel indicators className="bg-white p-4 rounded-4 shadow">
          {testimonials.map((item, index) => (
            <Carousel.Item key={index}>
              <Row className="align-items-center">
                <Col xs={3} className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </Col>
                <Col xs={6}>
                  <div
                    className="bg-primary text-white p-3 rounded-4"
                    style={{ fontSize: "15px", fontWeight: "500" }}
                  >
                    {item.feedback}
                  </div>
                </Col>
                <Col xs={3} className="text-center">
                  {/* <div>
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                  </div> */}
                  <p className="mb-0 fw-bold">{item.name}</p>
                  <small className="text-muted">{item.title}</small>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
