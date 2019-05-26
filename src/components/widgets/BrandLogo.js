import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Logo from "../../assets/images/logo.svg";

const BrandLogo = ({className='',  onClickLink=()=>{}, ...rest}) => (
  <AniLink
    cover direction='up' bg="#1e0c65"
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
  </AniLink>
);

BrandLogo.propTypes = {
  className: PropTypes.string,
}

export default BrandLogo;
