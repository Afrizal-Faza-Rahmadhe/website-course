import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from "../data/index"

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated
             animate__fadeInUp animate__delay-1s">
              Pertanyaan Yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
            {/* Kolom Kiri */}
            <Col>
              <Accordion className="shadow-sm">
                {faq.slice(0, Math.ceil(faq.length / 2)).map((data) => (
                  <Accordion.Item eventKey={data.eventKey.toString()} key={data.id}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>

            {/* Kolom Kanan */}
            <Col>
              <Accordion className="shadow-sm">
                {faq.slice(Math.ceil(faq.length / 2)).map((data) => (
                  <Accordion.Item eventKey={data.eventKey.toString()} key={data.id}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      {data.desc}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default FaqComponent