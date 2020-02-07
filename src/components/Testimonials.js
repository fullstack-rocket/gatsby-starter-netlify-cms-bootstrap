import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <blockquote key={v4()} className="blockquote bg-light p-3">
        <p className="mb-0">{testimonial.quote}</p>
        <footer className="blockquote-footer"> – {testimonial.author}</footer>
      </blockquote>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
