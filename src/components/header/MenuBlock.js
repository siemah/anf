import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const MainBlock = ({ className, itemsList, onClickLink = () => { }, ...rest }) => (
  <ul className={`main-menu__container ${className || ''}`}>
    {
      itemsList.map(item => (
        <li className="main-menu__item" key={item.url}>
          <Link
            cover direction='down' bg="#1e0c65"
            to={item.url}
            className={`main-menu__link ${item.className || ''}`}
            onClick={onClickLink} >
            {item.label}
          </Link>
        </li>
      ))
    }
  </ul>
)

MainBlock.propTypes = {
  className: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  onClickLink: PropTypes.func,
}

export default MainBlock;
