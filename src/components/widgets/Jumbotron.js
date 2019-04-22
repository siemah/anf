import React from 'react';
import PropTypes from 'prop-types'

import '../../assets/css/jumbotron.css';

const Jumbotron = ({size='full', theme='default', className='', nextElementId=null, children, ...rest}) => {
  return (
    <div
      className={`jumbotron jumbotron-block ${size} theme-jumbotron__${theme} ${className || ''}`}
      {...rest}
      >

      {children}

      {
        nextElementId && (
          <a href={`#${nextElementId}`} className="jumbotron__slide-down-arrrow">
            <svg aria-hidden="true" data-prefix="fal" className='jumbotron__slide-down-arrrow__image' data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill={theme === 'default'? '#0ab587' : 'white'} d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"></path>
            </svg>
          </a>
        )
      }

    </div>
  )
}

Jumbotron.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Jumbotron;
