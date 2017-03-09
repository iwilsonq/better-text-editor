import React, { PropTypes } from 'react';

const Paragraph = ({ text, className }) => {
  return (
    <p className={"graf " + className}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Paragraph;
