import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pricing = ({ data }) => (
  <section className="mt-5">
    <Row>
      {data.map(price => (
        <Col key={price.plan}>
          <Card>
            <Card.Header>
              <h4 className="text-center">{price.plan}</h4>
            </Card.Header>
            <Card.Body>
              <h2 className="h1 text-center text-danger">${price.price}</h2>
              <p>{price.description}</p>
              <ul>
                {price.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
