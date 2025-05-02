import React from "react";
import { Container, Carousel } from "react-bootstrap";

const certifications = [
  { src: "/images/tie-global.png", alt: "TiE Global" },
  { src: "/images/quickbooks.png", alt: "QuickBooks Certified" },
  { src: "/images/bill-com.png", alt: "Bill.com Certified" },
  { src: "/images/sage.png", alt: "Sage Certified" },
  { src: "/images/xero.png", alt: "Xero" },
  { src: "/images/xero-certified.png", alt: "Xero Certified Advisor" }
];

const Certifications = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h5 className="text-center mb-4 position-relative">
          <span style={{ borderBottom: "3px solid #2f80ed", paddingBottom: "4px" }}>
            Certifications &amp; Associations
          </span>
        </h5>

        <Carousel indicators={false} controls={true} interval={2500} className="w-100">
          {certifications.map((item, index) => (
            <Carousel.Item key={index} className="text-center">
              <img
                src={item.src}
                alt={item.alt}
                className="d-inline-block mx-auto"
                style={{ maxHeight: "80px", maxWidth: "150px" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Certifications;
