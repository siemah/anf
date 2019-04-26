import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BrandLogo = ({className='',  onClickLink=()=>{}, ...rest}) => (
  <AniLink
  	cover direction='up' bg="#1e0c65"
  	to='/' onClick={onClickLink} className={`logo-brand-block ${className}`} {...rest}>
    <img
      src={`https://css.gbtcdn.com/imagecache/gbm/img/site/logo_m@2x.png`}
      className='mb0'
      alt="brand logo"
      />
  </AniLink>
);

BrandLogo.propTypes = {
  className: PropTypes.string,
}

export default BrandLogo;
