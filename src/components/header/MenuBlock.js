import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const MainBlock = ({ className, itemsList,  onClickLink=() => {}, ...rest }) => (
  <ul className={`main-menu__container ${className || ''}`}>
    {
      itemsList.map( item => (
        <li className="main-menu__item" key={item.url}>
          <AniLink 
            cover diraction='bottom' bg="#1e0c65"
            to={item.url} 
            className={`main-menu__link ${item.className || ''}`} 
            onClick={onClickLink} >
            {item.label}
          </AniLink>
        </li>
      ) )
    }
  </ul>
)

MainBlock.propTypes = {
  className: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  onClickLink: PropTypes.func,
}

export default MainBlock;
