import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../layout-components/grid';

const BackgroundRow = ({className='', src, children, ...rest}) => (
  <div style={{backgroundImage: `url(${src})`}} className={`background-block ${className}`} {...rest}>
    <Container>
      {children}
    </Container>
  </div>
);

BackgroundRow.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default BackgroundRow;
