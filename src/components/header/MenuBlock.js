import React from 'react';
import { Link } from 'gatsby';

const MainBlock = ({ className, itemsList,  onClickLink=() => {}, ...rest }) => (
  <ul className={`main-menu__container ${className || ''}`}>
    {
      itemsList.map( item => (
        <li className="main-menu__item" key={item.url}>
          <Link to={item.url} className={`main-menu__link ${item.className || ''}`} onClick={onClickLink} >
            {item.label}
          </Link>
        </li>
      ) )
    }
  </ul>
)

export default MainBlock;
