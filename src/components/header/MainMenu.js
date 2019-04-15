import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../layout-components/grid';
import MenuBlock from './MenuBlock';

import { hasClass, addClass, removeClass } from '../../utils/domTools';

const MainMenu = props => {
  const centerItems = [
    {
      url: '/',
      label: 'Accueil',
    },
    {
      url: '/presentation',
      label: 'Présentation',
    },
    {
      url: '/structure',
      label: 'Structure',
    },
  ];
  const rightItems = [
    {
      url: '/contact',
      label: 'Nos Contactes',
    },
    {
      url: '/preinscription',
      label: 'Préinscription',
      className: 'btn btn-primary'
    },
  ];
  const buttonRef = React.createRef();
  /**
   * @name onClick
   * click event to display a mobile menu
   */
  const onClick = e => {
    e.preventDefault();
    if( typeof window !== `undefined` ) {
      const menus = document.querySelectorAll('.js-main-menu__container');
      /**
       * @name toggleMobileMenu
       * display or dosnt by toggling the show class
       * @param {Boolean} isDisplay to verify if will show mobile menu or nope
       */
      const toggleMobileMenu = (isDisplay=true) => menus.forEach( menu => {
        if(isDisplay) addClass(menu, 'show')
        else removeClass(menu, 'show')
      });

      if(hasClass(buttonRef.current, 'anime-rotate')) {
        removeClass(buttonRef.current, 'anime-rotate');
        toggleMobileMenu(false);
        removeClass(document.querySelector('html'), 'hidden');
        removeClass(document.querySelector('.js-main-menu'), 'full-screen');
      }
      else {
        addClass(buttonRef.current, 'anime-rotate');
        toggleMobileMenu(true);
        addClass(document.querySelector('html'), 'hidden');
        addClass(document.querySelector('.js-main-menu'), 'full-screen');
      }

    }
  }
  return (
    <nav className="main-menu js-main-menu">
      <button
        ref={buttonRef}
        onClick={onClick}
        className="main-menu__mobile-menu-trigger">
        <div className="fake-bar"></div>
        <div className="fake-bar half"></div>
        <div className="fake-bar "></div>
      </button>
      <Container>
        <Link to='/' className="main-manu__logo-brand">
          <img src={`https://css.gbtcdn.com/imagecache/gbm/img/site/logo_m@2x.png`} className='mb0' alt="brand logo"/>
        </Link>
        <MenuBlock className='main-menu__center left js-main-menu__container' itemsList={centerItems} />
      </Container>
      <MenuBlock className='main-menu__right right js-main-menu__container' itemsList={rightItems} />
    </nav>
  )
}

export default MainMenu;
