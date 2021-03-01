import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

import Logo from "../../assets/images/logo.svg";

const BrandLogo = ({ className = '', onClickLink = () => { }, ...rest }) => (
  <Link
    to='/'
    onClick={onClickLink}
    className={`logo-brand-block ${className}`}
  >
    <img
      src={Logo}
      className='mb0'
      alt="ANF logo"
      {...rest}
    />
  </Link>
);

BrandLogo.propTypes = {
  className: PropTypes.string,
}

export default BrandLogo;
