import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const BrandLogo = ({className='',  onClickLink=()=>{}, ...rest}) => (
  <Link to='/' onClick={onClickLink} className={`logo-brand-block ${className}`} {...rest}>
    <img
      src={`https://css.gbtcdn.com/imagecache/gbm/img/site/logo_m@2x.png`}
      className='mb0'
      alt="brand logo"
      />
  </Link>
);

BrandLogo.propTypes = {
  className: PropTypes.string,
}

export default BrandLogo;
