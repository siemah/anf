import PropTypes from 'prop-types'
import React from 'react'

import MainMenu from './header/MainMenu';
import '../assets/css/header.css';

const Header = ({ siteTitle }) => (
  <div className='header-block'>
    <MainMenu />
    <div className="fake-elem"></div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
