import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <Container>
    <Row>
      {gridItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <Col sm>
            <section className="d-block px-4 py-5">
              <div className="text-center">
                <div
                  className="d-inline-block"
                  style={{
                    width: '240px',
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              </div>
              <p>{item.text}</p>
            </section>
          </Col>
          {idx > 0 && idx % 2 ? (
            <>
              {/*<!-- Force next columns to break to new line at md breakpoint and up -->*/}
              <div className="w-100 d-none d-md-block" />
            </>
          ) : null}
        </React.Fragment>
      ))}
    </Row>
  </Container>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
