import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2f80ed", color: "#fff", padding: "40px 0" }}>
      <Container fluid="lg">
        {/* Top Section */}
        <Row className="mb-4">
          <Col md={3}>
            <h6><strong>Phone number:</strong></h6>
            <p style={{ margin: 0 }}>+912222222222, 5555555555</p>
            <small style={{ color: "#000" }}>24x7 Available</small>
          </Col>

          <Col md={3}>
            <h6><strong>Email:</strong></h6>
            <p>info@Connect.zucol.in</p>
          </Col>

          <Col md={3}>
            <h6><strong>Address:</strong></h6>
            <p style={{ marginBottom: 0 }}>Manglam Signature Tower</p>
            <p>Lal Kothi, Jaipur, Rajasthan–302015</p>
          </Col>

          <Col md={3}>
            <h6 className="mb-2"><strong>Services Provided</strong></h6>
            <hr style={{ backgroundColor: "#fff", height: "2px", width: "50%", marginLeft: 0 }} />
            <Row>
              <Col>
                <ul className="list-unstyled">
                  <li>SEO Services</li>
                  <li>Pay-per-click</li>
                  <li>Social Media</li>
                  <li>Web Analytics</li>
                  <li>Web Development</li>
                </ul>
              </Col>
              <Col>
                <ul className="list-unstyled">
                  <li>SEO Services</li>
                  <li>Pay-per-click</li>
                  <li>Social Media</li>
                  <li>Web Analytics</li>
                  <li>Web Development</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>


        <Row className="mb-4">
          <Col className="d-flex justify-content-start gap-3" md={3}>
            <FaLinkedin size={28} />
            <FaFacebookSquare size={28} />
            <FaTwitterSquare size={28} />
          </Col>
        </Row>


        <Row>
          <Col className="text-center mb-2">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Accounting</a>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
            </div>
          </Col>
        </Row>


        <Row>
          <Col className="text-center text-white">
            <small>
              2025 © Connect.ZUCOL, All Right Reserved | Designed &amp; Developed By ZUCOL
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
