import React, { PropTypes } from 'react';

const Paragraph = ({ text, className }) => {
  return (
    <p className={className ? `graf ${className}` : 'graf'}>
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Paragraph;
