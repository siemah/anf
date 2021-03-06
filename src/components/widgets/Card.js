import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/css/card.css';

const Card = ({className='', imageSrc=null, alt='', title, text}) => (
  <div className={`card ${className} ${!imageSrc? 'card_withou-image' : ''}`}>
    {
      imageSrc && (
        <div className="card__image-block left">
          <img src={imageSrc} className='card__image' alt={alt || title}/>
        </div>
      )
    }
    <div className="card__action-block left">
      <h2 className="card__title">{title}</h2>
      <h4 className='card__text'>{text}</h4>
    </div>
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card;
