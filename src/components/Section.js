import React, { PropTypes } from 'react';
import SectionDivider from './SectionDivider';
import SectionContent from './SectionContent';

const Section = ({ children, className }) => {

  return (
    <section className={className}>
      <SectionDivider />
      <SectionContent>
        {children}
      </SectionContent>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
};

export default Section;
