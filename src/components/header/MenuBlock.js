import React from 'react';
import { Link } from 'gatsby';

const MainBlock = ({ className, itemsList, ...rest }) => (
  <ul className={`main-menu__container ${className || ''}`}>
    {
      itemsList.map( item => (
        <li className="main-menu__item" key={item.url}>
          <Link to={item.url} className={`main-menu__link ${item.className || ''}`}>
            {item.label}
          </Link>
        </li>
      ) )
    }
  </ul>
)

export default MainBlock;
