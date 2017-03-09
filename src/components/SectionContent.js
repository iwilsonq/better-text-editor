import React, { PropTypes } from 'react';

const SectionContent = ({ children }) => {
  return (
    <div className="section-content">
      {children}
    </div>
  );
};

SectionContent.propTypes = {
  children: PropTypes.element
};

export default SectionContent;
